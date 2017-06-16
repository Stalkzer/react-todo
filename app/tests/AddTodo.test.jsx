var React = require("react"),
    ReactDOM = require("react-dom"),
    TestUtils = require("react-addons-test-utils"),
    $         = require("jquery"),
    expect    = require("expect");

var AddTodo = require("AddTodo");

describe("AddTodo", ()=> {
    it("Should exist", () =>{
        expect(AddTodo).toExist();
    });

    it("should call onAddTodo prop with valid data", () => {
        var todoText = "Check mail";
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = todoText;
        TestUtils.Simulate.submit($el.find("form")[0]); 

        expect(spy).toHaveBeenCalledWith(todoText);

    });
    it("should not call onAddTodo prop when invalid input", () => {
        var todoText = "";
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = todoText;
        TestUtils.Simulate.submit($el.find("form")[0]); 

        expect(spy).toNotHaveBeenCalled();

    });
});