

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];


/* .some() tests if at least one element in the array passes the test implemented by callback function returning true or false.
NOTE: Calling this method on an empty array returns FALSE for any condition */

// check if there are words that are fewer than 6 characters long. 
console.log(words.some(
  word => {
    return word.length <6
  }
)); // prints: true


// Use .filter() to save any words longer than 5  to a new array

const interestingWords = words.filter(
  word => {
    return word.length > 5;
  }
);
console.log(interestingWords); //prints: [ 'unique', 'uncanny', 'oxymoron' ]




/* .every() method tests if all elements in the array pass the test implemented by callback function. It returns true or false.*/
/*NOTE: Calling this method on an empty array returns TRUE for any condition */


console.log(interestingWords.every(
  word => {
    return word.length > 5;
  }
)); // prints: True

console.log(interestingWords.every(
  word => {
    return word.length > 8;
  }
)); // prints: false
