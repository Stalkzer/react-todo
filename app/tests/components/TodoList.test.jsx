var React = require("react"),
    ReactDOM = require("react-dom"),
    TestUtils = require("react-addons-test-utils"),
    $         = require("jquery"),
    expect    = require("expect");

var TodoList = require("TodoList");
var Todo     = require("Todo");

describe("TodoList",() =>{
    it("Should exist",()=>{
        expect(TodoList).toExist();
    });

    it("should render one Todo component for each todo item", ()=>{
        var todos = [{
            id: 1,
            text: "Do something"
        }, {
            id: 2,
            text: "Check mail"
        }];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
   
        expect(todosComponents.length).toBe(todos.length);
    });
    it("should render empty message when no todos", ()=>{
        var todos = [];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var $el = $(ReactDOM.findDOMNode(todoList));

        expect($el.find(".container__message").length).toBe(1);
    });
});