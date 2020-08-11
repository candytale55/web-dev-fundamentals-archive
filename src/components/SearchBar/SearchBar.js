import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            term : '' ,
            location : '',
            sortyBy: 'best_match'
        };
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch= this.handleSearch.bind(this);

        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        }
        // values taken from: https://www.yelp.com/developers/documentation/v3/business_search#sort_by        

    } // constructor 

    getSortByClass(sortByOption){
        if (this.state.sortBy == sortByOption) {
            return 'active';
        } 
            return ''; 
    } // getSortByClass()

    handleSortByChange(sortByOption) {
        this.setState({ sortBy: sortByOption});
    }// handleSortByChange()

    handleTermChange(event){
        this.setState({ term: event.target.value });
    }//handleTermChange()

    handleLocationChange(event){
        this.setState({ location: event.target.value});
    }//handleLocationChange()

    handleSearch(event){
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortyBy);
        event.preventDefault();
    }//handleSearch()

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(
            sortByOption => {
                let sortByOptionValue = this.sortByOptions[sortByOption];
                return (
                <li 
                className={this.getSortByClass(sortByOptionValue)} 
                key={sortByOptionValue}
                onClick={this.handleSortByChange.bind(this,sortByOptionValue)}>
                </li>);
            }); //return Object.keys(sortByOptions)...
    }// renderSortByOptions()

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input 
                        placeholder="Search Businesses"
                        onChange={this.handleTermChange}
                     />
                    <input 
                        placeholder="Where?"
                        onChange={this.handleLocationChange} 
                    />
                </div>
                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        );//return() inside render()
    }//render()
} //SearchBar 

export default SearchBar;


/*
The search bar will communicate with the Yelp API, but you’ll build the functionality to communicate with the API in a later project. Today, you’ll build part of the structure that’s needed to communicate with the Yelp API. Specifically, requests to the Yelp API must follow formatting and naming conventions set by the API. 
*/

/*
renderSortByOptions():
The method should iterate through the keys and values of the sortByOptions object and return a list item. The list item elements should use the keys as an attribute, and the values as content. 

It's purpose is to dynamically create the list items needed to display the sort options (Best Match, Highest Rated, Most Reviewed). This is to help future proof against potential changes to the Yelp API.
*/

/*
SearchBar this.state elements:
            term : search term located in search input
            location : location to search near from the location input,
            sortyBy: selected sorting option to use.
*/




