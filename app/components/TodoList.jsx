var React = require("react"),
    Todo  = require("Todo");


var TodoList = React.createClass({
    render: function () {

        var {todos} = this.props;

        var renderTodos = function() {
            return todos.map((todo)=>{
                return <Todo key={todo.id} {...todo}/>
            });
        };
        
        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
});

module.exports = TodoList;