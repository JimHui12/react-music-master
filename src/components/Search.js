import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div>
                <input 
                    onChange={this.updateArtistQuery} 
                    onKeyPress={this.handleKeyPress}
                    placeholder='Search for an Artist'
                />
                <button onClick={this.searchArtist}>Search</button>        
            </div>        
        )
    }
}