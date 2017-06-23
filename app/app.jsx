var React           = require("react"),
    ReactDOM        = require("react-dom"),
    {Provider}      = require("react-redux"),
    // var Route = require('react-router').Route; OR DO IT LIKE BELOW
    // ES6 Syntax
    {hashHistory} = require("react-router");

var actions = require("actions");
var store   = require("configureStore").configure();
import firebase from "app/firebase/";
import router from "app/router/";

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        hashHistory.push('/todos');
    } else {
        hashHistory.push('/');
    }
})


store.dispatch(actions.startAddTodos());

//Load foundation
// require("style-loader!css-loader!foundation-sites/dist/foundation.min.css");
$(document).foundation();

// App css
require("style-loader!css-loader!sass-loader!applicationStyles");




ReactDOM.render(
    // Provider (from react-redux) makes the components acces to the store / dispatch possible
    <Provider store={store}>
        {router}
    </Provider>,
    document.getElementById('app')
);