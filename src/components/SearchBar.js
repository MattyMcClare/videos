import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' }

    onInputChange = (e) => {
        
        this.setState({ term: e.target.value})
        
        
    };

    onFormSubmit = (e) => {
        e.preventDefault();

        console.log(this.state.term)
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                        type="text" 
                        onChange={this.onInputChange}
                        value={this.state.term}>
                        </input>
                    </div>
                </form>
            </div>
        )
    }
};

export default SearchBar;