var React = require("react"),
    ReactDOM = require("react-dom"),
    TestUtils = require("react-addons-test-utils"),
    $         = require("jquery"),
    expect    = require("expect");

var Todo = require("Todo");

describe("Todo", ()=> {
    it("Should exist", () =>{
        expect(Todo).toExist();
    });
});