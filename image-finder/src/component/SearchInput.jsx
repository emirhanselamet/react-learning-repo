import React from "react";

class SearchInput extends React.Component {
state = { entry: '' };
onFormSubmit(event) {
    event.preventDefault();
}
render() {

    return (
    <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="field">
            <div className="ui massive icon input">
            <input
                type="text"
                placeholder="search.."
                onChange={(event) =>
                this.setState({ entry: event.target.value.toLowerCase() })
                }
                value={this.state.entry}
            />
            <i className="search icon"></i>
            </div>
        </div>
        </form>
    </div>
    );
}
}
export default SearchInput;
