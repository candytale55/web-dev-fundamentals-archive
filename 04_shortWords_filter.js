/* The method .filter() returns a new array after filtering out elements from the original array. 
The callback function should return true or false depending on the element passed to it. 
Those elements that the callback function return true are added to the new array. */

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




/* .filter() method on randomNumbers to return values that are less than 250. 
Save them to a new array called smallNumbers, declared with const. */

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// return values that are less than 250. 
const smallNumbers = randomNumbers.filter(
  number => {
    return number < 250;
  }
);
console.log(smallNumbers); // [ 200, 3.14, 7, 13 ]




/* .filter() on the favoriteWords array to return elements that have more than 7 characters. 
Save the returned array to a const variable named longFavoriteWords. */

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Return elements that have more than 7 characters.
const longFavoriteWords = favoriteWords.filter(
  word => {
    return word.length > 7; 
  }
);
console.log(longFavoriteWords);
