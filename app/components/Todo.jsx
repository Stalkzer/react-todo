var React = require("react"),
    moment = require("moment"),
    {connect} = require("react-redux"),
    actions = require("actions");

export var Todo = React.createClass({
    render: function () {
        var {text, completed, id, createdAt, completedAt, dispatch} = this.props;
        var todoClassName = completed ? "todo todo-completed" : "todo";
        var renderDate = () => {
            var message = "Created ";
            var timestamp = createdAt;

            if(completed) {
                message = "Completed ";
                timestamp = completedAt;
            } 


            return message + moment.unix(timestamp).format("MMM Do YYYY, @ h:mm a");
        };
        return (
            <div className={todoClassName}>
                <div onClick={()=>{
                    // this.props.onToggle(id);
                    dispatch(actions.startToggleTodo(id, !completed));    
                }}>
                <p className="todo_text">
                    <input type="checkbox" checked={completed}/>              
                    &nbsp; {text} </p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
                <div>
                    <p className="hollow button alert small" onClick={() => {dispatch(actions.removeTodo(id))}}> X </p>
                </div>
            </div>
        )
    }
});

export default connect()(Todo);
