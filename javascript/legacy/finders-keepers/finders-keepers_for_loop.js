// JavaScript ES6

/*
Function _findElement_ looks through an array _arr_ and returns the FIRST element in it that passes a 'truth test' (_func_). This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
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

// TESTS:
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));  // 2
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })); // 8
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })); // undefined
