var React = require("react"),
    {RaisedButton} = require('material-ui');
    import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";


var MaterialButton = React.createClass({
    render: function () {
        return (
            <div>
                <MuiThemeProvider>
                    <RaisedButton label="Default"/>
                </MuiThemeProvider>
            </div>
        );
    }
});

module.exports = MaterialButton;