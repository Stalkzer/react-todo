var React           = require("react"),
    ReactDOM        = require("react-dom"),
    {Provider}      = require("react-redux"),
    // var Route = require('react-router').Route; OR DO IT LIKE BELOW
    // ES6 Syntax
    {Route, Router, IndexRoute, hashHistory} = require("react-router");

var TodoApp = require("TodoApp");

var actions = require("actions");
var store   = require("configureStore").configure();

store.subscribe(() => {
    console.log("New state", store.getState());
});

//Load foundation
// require("style-loader!css-loader!foundation-sites/dist/foundation.min.css");
$(document).foundation();

// App css
require("style-loader!css-loader!sass-loader!applicationStyles");

ReactDOM.render(
    // Provider (from react-redux) makes the components acces to the store / dispatch possible
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById('app')
);