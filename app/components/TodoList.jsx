var React = require("react"),
    {connect} = require("react-redux"),
    TransitionGroup  = require('react-transition-group/CSSTransitionGroup'),
    {TweenMax, Power2, TimelineLite} = require("gsap");
    
import Todo from "Todo";

export var TodoList = React.createClass({
    render: function () {
        var {todos} = this.props;

        var renderTodos = () => {
            if(todos.length === 0) {
                return (
                    <p className="container__message"> Nothing To Do </p>
                );
            }
            return todos.map((todo) => {
                return <Todo key={todo.id} {...todo}/>
            });
        };
        
        return (
            <div className="list_container">
                <TransitionGroup
                transitionName="todo"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
                transitionAppear={true}
                transitionAppearTimeout={300}>
                    {renderTodos()}
                </TransitionGroup>
            </div>
        )
    }
});

export default connect(
    (state) => {
        return {
            todos: state.todos
        };
    }
)(TodoList);