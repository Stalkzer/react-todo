var React = require("react"),
    TodoList = require("TodoList"),
    AddTodo = require("AddTodo");

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            todos: [
                {
                    id: 1,
                    text: "Follow my dreams"
                },{
                    id: 2,
                    text: "Walk in the rain"
                },{
                    id: 3,
                    text: "Buy a Camper *q*"
                },{
                    id: 4,
                    text: "Buy a PS4 (°_°')"
                }
            ]
        }
    },
    handleAddTodo: function (text){

    },
    render: function (){
        var {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
});

module.exports = TodoApp;