
// We use curly braces and an equal sign = {}, to designate an OBJECT LITERAL:
let spaceCat = {}; // empty object
console.log(spaceCat); // Prints {}

// The object is filled with unordered data organized into key-value pairs. A key is like a variable name that points to a location in memory that holds a value. The value can be any data type in the language including functions or other objects. 
// Key-value pairs inside the object literal are SEPARATED BY COMMAS (,)

let spaceDog = {
  'type of fur': 'shaggy', //'type of fur' has quotation marks because it has a space (special character).
  color: 'blue-green' //  Can omit the quotation marks if the key doesn't have special characters.

}
console.log(spaceDog); // prints { 'type of fur': 'shaggy', color: 'blue-green' }


let spaceship = {
  'Fuel Type': 'diesel',
  color: 'silver'
};


let fasterShip = {
  'Fuel Type': 'Turbo Fuel',
  color: 'silver'
}
console.log (spaceship, fasterShip); // prints { 'Fuel Type': 'diesel', color: 'silver' } { 'Fuel Type': 'Turbo Fuel', color: 'silver' }





// ACCESSING OBJECT PROPERTIES

let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};


// Access with DOT notation:
console.log(spaceship.homePlanet); // Earth
console.log(spaceship.color); // silver

// Access a property that does not exist
console.log(spaceship.favoriteIceCream); // undefines

// Assign a property to a variable.
let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;
console.log(crewCount); // 5
console.log(planetArray); // [ 'Venus', 'Mars', 'Saturn' ]





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


