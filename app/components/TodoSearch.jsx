var React = require("react"),
    {connect} = require("react-redux"),
    actions = require("actions");

export var TodoSearch = React.createClass({
    render: function () {
        var {dispatch, searchText, showCompleted} = this.props;
        var buttonClass = showCompleted ? "" : "hollow show_inactif";
        return (
            <div className="container__header">
                <div>

                    <input 
                    type="search" 
                    ref="searchText" 
                    placeholder="Search todos" 
                    value={searchText} 
                    onChange={() => {
                        var searchText = this.refs.searchText.value;
                        dispatch(actions.setSearchText(searchText));
                    }}/>

                </div>
                <div>
                    <label className={`button expanded ${buttonClass}`}>
                    <input 
                        id="showCompleted" 
                        type="checkbox" 
                        ref="showCompleted" 
                        checked={showCompleted}
                        onChange={() => {
                            dispatch(actions.toggleShowCompleted());
                        }}/>

                         Show completed todos

                    </label>
                </div>
            </div>
        )
    }
});

export default connect(
    (state) => {
        return {
            showCompleted: state.showCompleted,
            searchText: state.searchText
        }
    }
)(TodoSearch);