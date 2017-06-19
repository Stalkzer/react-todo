var React = require("react");
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import Add from 'material-ui/svg-icons/content/add';



var AddTodo = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        var todoText = this.refs.todoText.input.value;
        if(todoText.length > 0) {
            this.refs.todoText.input.value = "";
            this.props.onAddTodo(todoText);
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
                    <TextField 
                    className="add_field"
                    style={style.textField} 
                    fullWidth={true} 
                    ref="todoText"
                    floatingLabelText="What do you need to do ?"/>
                    <RaisedButton 
                        type="submit" 
                        label="Add Todo" 
                        primary={true} 
                        fullWidth={true} 
                        style={style.button}
                        icon={<Add style={style.icon}/>}/>
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;