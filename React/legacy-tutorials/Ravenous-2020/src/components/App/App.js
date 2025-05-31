import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
]

class App extends React.Component {
  searchYelp(term, location, sortBy){
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
  }

  render(){
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={businesses}/>
      </div>
    ); // return
  } // render()
} // class App

export default App;

/*
The App component renders a SearchBar component and a BusinessList component. The final product is a simulation of how the Ravenous project will look and work. Some functionality (like querying the Yelp API) is currently missing, but you’ll build it in the upcoming projects.
*/