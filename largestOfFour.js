// JavaScript ES6

/* Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays. */
// From FCC exercise here: 
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays




// PROCEDURAL APPROACH

function largestOfFour(arr) {
  let arrLargest = [];
  for (let i=0; i<arr.length; i++){
    let largest = arr[i][0];
    for(let j=0; j<arr[i].length; j++){
      if (largest <= arr[i][j]){
        largest = arr[i][j];
      }
    }
      arrLargest.push(largest);
  }
  return arrLargest;
}
 

// TESTS
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// [ 5, 27, 39, 1001 ]
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// [ 27, 5, 39, 1001 ]
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
// [ 9, 35, 97, 1000000 ]
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
// [ 25, 48, 21, -3 ]

/*  You can do it also WITHOUT USING PUSH  */

function largestOfFour(arr) {
  let arrLargest = [];
  for (let i=0; i<arr.length; i++){
    let largest = arr[i][0];
    for(let j=0; j<arr[i].length; j++){
      if (largest <= arr[i][j]){
        largest = arr[i][j];
      }
    }
      arrLargest[i] = largest;   // Changed line
  }
  return arrLargest;
}









/*  Using MAP, REDUCE and TERNARY operator */
/*
MAP will map all items into a new array. 
Within each inner array the callback function in REDUCE 
will compare elements with a TERNARY operator, 
returning the one that is largest. 
This will reduce them to just a single element.
*/


function largestOfFour(arr) {
  return arr.map(
    function(innerArr){
      return innerArr.reduce(
        function(prevNum, currentNum){
          return currentNum > prevNum ? 
          currentNum : prevNum;
        })});}
 

// TESTS
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// [ 5, 27, 39, 1001 ]
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// [ 27, 5, 39, 1001 ]
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
// [ 9, 35, 97, 1000000 ]
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
// [ 25, 48, 21, -3 ]

