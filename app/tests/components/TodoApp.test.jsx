var React = require("react"),
    ReactDOM = require("react-dom"),
    {Provider} = require("react-redux"),
    TestUtils = require("react-addons-test-utils"),
    $         = require("jquery"),
    expect    = require("expect");

var configureStore = require("configureStore");
import {TodoApp} from "TodoApp";
import TodoList from "TodoList";


describe("TodoApp",() =>{
    it("Should exist",()=>{
        expect(TodoApp).toExist();
    });

    it("should render TodoList", () => {
        var store = configureStore.configure();
        var provider = TestUtils.renderIntoDocument(
        <Provider store={store}> 
            <TodoApp/>
        </Provider>  
        );

        var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
        var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

        expect(todoList.length).toEqual(1);

    });
});