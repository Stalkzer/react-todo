var React           = require("react"),
    ReactDOM        = require("react-dom"),
    {Provider}      = require("react-redux"),
    // var Route = require('react-router').Route; OR DO IT LIKE BELOW
    // ES6 Syntax
    {Route, Router, IndexRoute, hashHistory} = require("react-router");

var actions = require("actions");
var store   = require("configureStore").configure();
var TodoAPI = require("TodoAPI");
import Login from "Login";
import TodoApp from "TodoApp";

store.dispatch(actions.startAddTodos());

//Load foundation
// require("style-loader!css-loader!foundation-sites/dist/foundation.min.css");
$(document).foundation();

// App css
require("style-loader!css-loader!sass-loader!applicationStyles");

ReactDOM.render(
    // Provider (from react-redux) makes the components acces to the store / dispatch possible
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/">
                <Route path="todos" component={TodoApp}/>
                <IndexRoute component={Login}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);