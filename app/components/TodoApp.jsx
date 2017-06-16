var React = require("react"),
    TodoList = require("TodoList"),
    AddTodo = require("AddTodo"),
    TodoSearch = require("TodoSearch");

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: "",
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
            ],

        }
    },
    handleAddTodo: function (text){

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