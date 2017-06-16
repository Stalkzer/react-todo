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
                    text: "Follow my dreams"
                },{
                    id: uuid(),
                    text: "Walk in the rain"
                },{
                    id: uuid(),
                    text: "Buy a Camper *q*"
                },{
                    id: uuid(),
                    text: "Buy a PS4 (°_°')"
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
                    text: text
                }
            ]
        })
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
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
});

module.exports = TodoApp;