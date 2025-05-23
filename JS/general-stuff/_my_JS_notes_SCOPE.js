
var cat = 'WhiskCat';
var cat = 'Ronin';
console.log(cat);
// logs 'Ronin'



/*Unlike var, when using let, a variable with the same name can only be declared once.*/

let dog = 'Perruedines';
let dog = 'Fido';
console.log(dog);
// Uncaught SyntaxError: Identifier 'dog' has already been declared


/*When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function*/
/*When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.*/

function checkScope() {
  'use strict';
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  return 'Function scope i is: ' + i;
}

console.log(checkScope()); 


/*
const variables are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned.

Always name variables you don't want to reassign using the const keyword to avoid accidentally reassigning a variable meant to stay constant. 

A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.
*/


const FAV_ANIMAL = "dogs";
FAV_ANIMAL = "cats"; 
/*
Uncaught TypeError: Assignment to constant variable.
    at script.js:159
*/


// OBJECTS, ARRAYS and FUNCTIONS:

/* objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier*/

const numbers0To10 = [0,1,2,3,4,5,6,7,8,9,10];
const numbers0To10 = ["whatever"];
// Uncaught SyntaxError: Identifier 'numbers0To10' has already been declared

numbers0To10 = ["whatever"];
// Uncaught TypeError: Assignment to constant variable.

numbers0To10[0] = "whatever";
console.log(numbers0To10); // ["whatever", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



// With an Object:
const northAmericaCountries = {
     "Canada": {
        capital: "Toronto"
     },
     "United States of America": {
      capital: "Washington DC"
     },
   "Mexico":{
    capital: "Mexico City"
   }
};

console.log(northAmericaCountries);
// {Canada: {…}, United States of America: {…}, Mexico: {…}}

const northAmericaCountries = "whatever";
//Uncaught SyntaxError: Identifier 'northAmericaCountries' has already been declared

northAmericaCountries = "Whatever";
// Uncaught TypeError: Assignment to constant variable.

console.log(northAmericaCountries.Canada);
// {capital: "Toronto"}

northAmericaCountries.Canada.capital = "Otawa";
console.log(northAmericaCountries.Canada);
// {capital: "Otawa"}




//Object.freeze 

/* Because const declaration alone doesn't really protect your data from mutation. You can use the Object.freeze function. Once object is frozen, you can't change it or delete it. Any attempt will produce an error.   
*/

const myObject = {
  name: "Objeto inmutable",
  changes: "not allowed - na na na",
}

Object.freeze(myObject); 
myObject.changes = "Sure, I can change";
console.log(myObject); // {name: "Objeto inmutable", changes: "not allowed - na na na"}


function freezeObject() {
  'use strict';
  const MATH_CONSTANTS = {
    PI: 3.1416
  };
  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObject();
/*
TypeError: Cannot assign to read only property 'PI' of object '#<Object>'
    at freezeObject (script.js:243)
    at script.js:249
*/
