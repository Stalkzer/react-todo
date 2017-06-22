var React     = require("react"),
    {connect} = require("react-redux"),
    actions   = require("actions");

export var AddTodo = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        var {dispatch} = this.props;
        
        var todoText = this.refs.todoText.value;
        if(todoText.length > 0) {
            this.refs.todoText.value = "";
            dispatch(actions.startAddTodo(todoText));
        } else {
            this.refs.todoText.focus();
        }
    },
    render: function () {
        const style = {
            button: {
                margin: "1rem 0"
            },
            textField: {
                boxShadow: 0,
                margin:"1rem 0"
            },
            icon: {
                marginRight: "10px"
            }
        }
        return (
            <div className="container__footer">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="todoText"/>
                    <button className="button expanded primary" type="submit">
                    Add Todo 
                    </button>
                </form>
            </div>
        );
    }
});

export default connect()(AddTodo);