var React      = require("react"),
    TodoList   = require("TodoList"),
    AddTodo    = require("AddTodo"),
    TodoSearch = require("TodoSearch"),
    uuid       = require("node-uuid");

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: "",
            todos: [
                {
                    id: uuid(),
                    text: "Follow my dreams",
                    completed: false,
                },{
                    id: uuid(),
                    text: "Walk in the rain",
                    completed: true,
                },{
                    id: uuid(),
                    text: "Buy a Camper *q*",
                    completed: true,
                },{
                    id: uuid(),
                    text: "Buy a PS4 (°_°')",
                    completed: false,
                }
            ],

        }
    },
    handleAddTodo: function (text){
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false,
                }
            ]
        })
    },
    handleToggle: function (id){
        var updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }

            return todo;
        });

        this.setState({
            todos: updatedTodos
        });
    },
    handleSearch: function (showCompleted,searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    render: function (){
        var {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos} onToggle={this.handleToggle}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
});

module.exports = TodoApp;