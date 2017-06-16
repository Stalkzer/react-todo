var React = require("react"),
    ReactDOM = require("react-dom"),
    TestUtils = require("react-addons-test-utils"),
    $         = require("jquery"),
    expect    = require("expect");

var TodoApp = require("TodoApp");

describe("TodoApp",() =>{
    it("Should exist",()=>{
        expect(TodoApp).toExist();
    });

    it("should add todo to the todos state on handleAddTodo", ()=>{
        var todoText = "test text";
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

        todoApp.setState({todos: []});
        todoApp.handleAddTodo(todoText);
        
        expect(todoApp.state.todos[0].text).toBe(todoText);
    })
});