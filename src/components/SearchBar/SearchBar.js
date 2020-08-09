import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}
// values taken from: https://www.yelp.com/developers/documentation/v3/business_search#sort_by


class SearchBar extends React.Component {
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(
            sortByOption => {
                let sortByOptionValue = sortByOptions[sortByOption];
                return <li key={sortByOptionValue}>{sortByOption}</li>;
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
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
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