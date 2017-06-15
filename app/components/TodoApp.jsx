var React    = require("react"),
    TodoList = require("TodoList");

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            todos: [
                {
                    id: 1,
                    text: "Feed the cat"
                }, {
                    id: 2,
                    text: "Go eat"
                }, {
                    id: 3,
                    text: "Go to the gym"
                }, {
                    id: 4,
                    text: "Workout"
                }
            ]
        };
    },
    render: function () {
        var {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos}/>
            </div>
        )
    }
});

module.exports = TodoApp;