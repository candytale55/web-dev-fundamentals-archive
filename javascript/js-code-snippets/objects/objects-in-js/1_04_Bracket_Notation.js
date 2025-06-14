// Accessing properties using BRACKET NOTATION

console.log(['A', 'B', 'C'][0]); // A


let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Duty': true,
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };


// MUST use bracket notation when keys have numbers, spaces, or special characters in them.

//console.log(spaceship.'Active Duty'); // SyntaxError: Unexpected string
console.log(spaceship['Active Duty']);   // true
console.log(spaceship['Fuel Type']);   // 'Turbo Fuel'
console.log(spaceship['numCrew']);   // 5
console.log(spaceship['!!!!!!!!!!!!!!!']); // undefined

// Assign variables
let isActive = spaceship['Active Mission'];
//let isActive = spaceship.'Active Mission'; // SyntaxError: Unexpected string
console.log(isActive);




// Use a variable inside the brackets to select the keys of an object. This can be especially helpful when working with functions:

let returnAnyProp = (objectName, propName) => objectName[propName];

console.log(returnAnyProp(spaceship, 'homePlanet')); // 'Earth'

// If we tried dot notation (objectName.propName) the computer would look for a key of 'propName' on our object and not the value of the propName parameter

