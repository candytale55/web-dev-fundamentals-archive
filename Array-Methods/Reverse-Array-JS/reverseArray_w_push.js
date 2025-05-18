// write a function that takes an array as argument and returns a new array with the elements in the reverse order. WITHOUT USING BUILT-IN METHODS:


const sentence = ['sense.','make', 'all', 'will', 'This'];




// myReverseArray() was my first try (originally named reverseArray). It worked but it didn't pass the tests  
let myNewArray = [];

const myReverseArray = function(array){
  for(let i = array.length-1; i>=0; i--){
    myNewArray.push(array[i]);
  }
  return myNewArray.join(' ');
}

console.log(myReverseArray(sentence)); // Prints: This will all make sense.





// Example answer that pass the test. It didn't have an array in global scope: 
const reverseArray = arr => {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed
}

console.log(reverseArray(sentence)) 
// Prints ['This', 'will', 'all', 'make', 'sense.'];





// As a function declaration:
function reverseArrayFunct(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed.join(' ')
}
console.log(reverseArrayFunct(sentence)); // prints: This will all make sense.


