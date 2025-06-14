
// Evaluating Arrays In-Place with Spread Operator VS Apply method. 

// GET THE MAX VALUE OF AN ARRAY. 

var arr = [1, 20, 40, 99, 10];
var maximus = Math.max.apply(null, arr);
console.log(maximus); // Returns 99

// Why  apply?: Math.max(arr) returns NaN as it expects comma-separated arguments but NOT in an array form. 
var array = [1,2,4,9];
var thisGivesNan = Math.max(arr);
console.log(thisGivesNan); // Returns NaN

// Spread operator gets the array y "spreads" it up into comma-separated values, what Math.max expects - It is easier to read and mantain.

const spreadArray = [1, 20, 40, 99, 10];
const spreadMaximus = Math.max(...spreadArray); //Returns 99
console.log(spreadMaximus);



// MINIMUM

var arr = [1, 20, 40, 99, 10];

var minimum = Math.min.apply(null, arr);
console.log(minimum);   // Returns 1

var minimumNan = Math.min(arr);
console.log(minimumNan); // Returns NaN

var minimumSpread = Math.min(...arr);
console.log(minimumSpread); // Returns 1




//NOTE: The spread array only works in-place, in an argument that is passed to a function or in an array literal. Using it plain does not work: 

// Copy an array: 

const myArrayErr = ...arr; 
//SyntaxError: unknown: Unexpected token (41:20)


//To just copy an array into another, set the spread operator within brackets. 
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let months;
months = [...arr1];   
console.log(months);  // Returns [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY' ]

// The same example with a function.
const arr2 = ["ENE", "FEB", "MAR", "ABR", "MAY"];
let meses;
(function() {
  "use strict";
  meses = [...arr2]; 
})();
console.log(meses);
