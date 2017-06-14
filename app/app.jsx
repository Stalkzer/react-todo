var React           = require("react"),
    ReactDOM        = require("react-dom"),
    // var Route = require('react-router').Route; OR DO IT LIKE BELOW
    // ES6 Syntax
    {Route, Router, IndexRoute, hashHistory} = require("react-router");

    //Load foundation
    // require("style-loader!css-loader!foundation-sites/dist/foundation.min.css");
    $(document).foundation();

    // App css
    require("style-loader!css-loader!sass-loader!applicationStyles");

ReactDOM.render(
    <p>BoilerPlate 3 Project</p>,
    document.getElementById('app')
);