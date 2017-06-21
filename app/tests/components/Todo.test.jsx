var React = require("react"),
    ReactDOM = require("react-dom"),
    TestUtils = require("react-addons-test-utils"),
    $         = require("jquery"),
    expect    = require("expect");

var {Todo} = require("Todo");

describe("Todo", ()=> {
    it("Should exist", () =>{
        expect(Todo).toExist();
    });

    it("should dispatch TOGGLE_TODO action on click",() =>{
        var todoData = {
            id: 190,
            text:"Write todo.test.jsx test",
            completed: true
        }
        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todo));

        TestUtils.Simulate.click($el.find("div")[0]);
        expect(spy).toHaveBeenCalledWith({
            type: "TOGGLE_TODO",
            id: todoData.id
        });

    });
});