var React = require("react"),
    moment = require("moment");

import Checkbox from 'material-ui/Checkbox';


var Todo = React.createClass({
    render: function () {
        var {text, completed, id, createdAt, completedAt} = this.props;
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
                <div onClick={()=>{this.props.onToggle(id);}}>
                  <Checkbox type="checkbox" checked={completed}/>              
                </div>
                <div onClick={()=>{this.props.onToggle(id);}}>
                    <p className="todo_text">{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
                <div>
                    <p className="hollow button alert small" onClick={() => {this.props.onClick(id)}}> X </p>
                </div>
            </div>
        )
    }
});

module.exports = Todo;