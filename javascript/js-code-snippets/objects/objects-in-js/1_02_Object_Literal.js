
// We use curly braces and an equal sign = {}, to designate an OBJECT LITERAL:
let spaceCat = {}; // empty object
console.log(spaceCat); // Prints {}

/* The object is filled with unordered data organized into key-value pairs. 
A key is like a variable name that points to a location in memory that holds a value. 
The value can be any data type in the language including functions or other objects. 
Key-value pairs inside the object literal are SEPARATED BY COMMAS (,) */



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
