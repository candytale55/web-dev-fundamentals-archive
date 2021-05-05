/*
 function incrementer returns the value of the global variable fixedValue increased by one
*/

// The global variable
var fixedValue = 4;

function incrementer () {
  return fixedValue + 1;
}

console.log(incrementer(fixedValue));
