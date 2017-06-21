var React = require("react"),
    {connect} = require("react-redux"),
    actions = require("actions");

export var TodoSearch = React.createClass({
    handleSearch: function () {
        var {dispatch} = this.props;
        var showCompleted = this.refs.showCompleted.checked;
        var searchText = this.refs.searchText.value;

        dispatch(actions.setSearchText(searchText));
    },
    render: function () {
        var {buttonClass} = this.props;
        return (
            <div className="container__header">
                <div>
                    <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
                </div>
                <div>
                    <label className={`button expanded ${buttonClass}`}>
                    <input id="showCompleted" type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
                         Show completed todos
                    </label>
                </div>
            </div>
        )
    }
});

export default connect()(TodoSearch);