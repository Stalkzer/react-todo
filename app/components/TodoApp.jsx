var React      = require("react"),
    uuid       = require("node-uuid"),
    moment     = require("moment");

    import TodoList from "TodoList";
    import AddTodo from "AddTodo";
    import TodoSearch from "TodoSearch";

    var TodoAPI    = require("TodoAPI");

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: "",
            todos: TodoAPI.getTodos()
        }
    },
    componentDidUpdate: function () {
        TodoAPI.setTodos(this.state.todos);
    },
    handleAddTodo: function (text){
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ]
        })
    },
    handleDelete: function (id) {
        var updatedTodos = TodoAPI.removeTodo(id);
        this.setState({
            todos: updatedTodos
        })
    },
    handleSearch: function (showCompleted,searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    render: function (){
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
        var buttonClass = showCompleted ? "" : "hollow show_inactif";
        return (
            <div >
                <h1 className="page-title text-center"> Todo App </h1>
                <div className="row">
                  <div className="column small-centered small-11 medium-6 large-5">
                    <div className="container">
                        <TodoSearch onSearch={this.handleSearch}  buttonClass={buttonClass}/>
                        <TodoList/>
                        <AddTodo onAddTodo={this.handleAddTodo}/>
                    </div>
                  </div>

                </div>

            </div>
        )
    }
});

module.exports = TodoApp;