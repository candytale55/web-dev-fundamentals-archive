// JavaScript ES6

/*
Function _findElement_ looks through an array _arr_ and returns the FIRST element in it that passes a 'truth test' (_func_). 
This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
*/

function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}



///// BEST: using find
// The most simple and shorter so far: 

function findElement(arr, func) {
  return arr.find(func);
}







// Using MAP and indexOf:

function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}

/*
The function goesthrough the array _arr_ using the .map() method and 
it uses function _func_ as callback function in arr.map(). In this way it
gets the index of the first number that meets the condition in the function.
*/




// More complex: Use recursion and ternary operator

function findElement(arr, func) {
  return arr.length && !func(arr[0]) ?
    findElement(arr.slice(1), func) :
    arr[0];
}




// TESTS:
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));  // 2
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })); // 8
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })); // undefined

// Link to exercise: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers
