/* The method .filter() returns a new array after filtering out elements from the original array. 
The callback function should return true or false depending on the element passed to it. 
Those  elements that the callback function return true are added to the new array. */

const words = ['amusing', 'serendipity', 'oak', 'forest', 'chamaeleon', 'fly', 'eternity', 'biscuit'];

const shortWords = words.filter(
  word => {
    return word.length < 7;
  }
); // words longer or equal than 7 are not passed to the new array. Shorter than 7 are 'true'

console.log(shortWords); // [ 'oak', 'forest', 'fly' ]
console.log(words); // It has not mutated:
/* [ 'amusing',
  'serendipity',
  'oak',
  'forest',
  'chamaeleon',
  'fly',
  'eternity',
  'biscuit' ]*/




const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// return values that are less than 250. 
const smallNumbers = randomNumbers.filter(
  number => {
    return number < 250;
  }
);
console.log(smallNumbers); // [ 200, 3.14, 7, 13 ]




const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Return elements that have more than 7 characters.
const longFavoriteWords = favoriteWords.filter(
  word => {
    return word.length > 7; 
  }
);
console.log(longFavoriteWords); // [ 'nostalgia', 'hyperbole', 'esoteric' ]





const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

// return a new array with only those elements longer than 7 characters.
const longCities = cities.filter(city => city.length > 7);
console.log("Cities with long names: " + longCities); /* Prints:
Cities with long names: Edinburgh,Eskisehir,Medellin,Yokohama
*/

