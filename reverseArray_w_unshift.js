// write a function that takes an array as argument and returns a new array with the elements in the reverse order. WITHOUT USING BUILT-IN METHODS:

const sentence = ['sense.','make', 'all', 'will', 'This'];



// With .unshift() method. Remember unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

const myUnshiftedArray = arrayUn =>{
  let unshiftedArray = [];
  for (let i = 0; i < arrayUn.length; i++){
    unshiftedArray.unshift(arrayUn[i]);
  }
  return unshiftedArray.join(' ');
}
console.log(myUnshiftedArray(sentence)); // Prints: This will all make sense.


