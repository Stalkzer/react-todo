var React = require("react"),
    ReactDOM = require("react-dom"),
    TestUtils = require("react-addons-test-utils"),
    $         = require("jquery"),
    expect    = require("expect");

import {TodoSearch} from "TodoSearch";

describe("TodoSearch", ()=> {
    it("Should exist", () =>{
        expect(TodoSearch).toExist();
    });
    it("should dispatch SET_SEARCH_TEXT on input change", () => {
        var searchText = "Some text";
        var action = {
            type: "SET_SEARCH_TEXT",
            searchText
        };
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

        todoSearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);
        expect(spy).toHaveBeenCalledWith(action);
    });

    it("should dispatch TOGGLE_SHOW_COMPLETED when check box checked", () =>{
        var action = {
            type: "TOGGLE_SHOW_COMPLETED"
        };
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
       
        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(action);
    });
});