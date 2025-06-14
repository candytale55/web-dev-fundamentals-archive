
// Access Properties with Bracket Notation
/*
You can access and work with property values using the property name in bracket notation. For example in the inventory list below, the function will return the amount of the product given as argument, or will return "undefined" if it is not present in the object. 
*/


let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(product) {
  return foods[product];
}

console.log(checkInventory("apples")); // 25
console.log(checkInventory("grapes")); // 35
console.log(checkInventory("potatoes")); // undefined
