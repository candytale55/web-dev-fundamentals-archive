// Using RegEx

/*
The constructor of the regular expression object is new RegExp(pattern[, flags]),
  - new RegExp(target).

To check at the end of the string, let's concatenate RegExp(target) to the $ character to match the end: 
   - new RegExp(target+'$').
*/


function confirmEnding(str, target) {
  let re = new RegExp(target + "$");
  //console.log(re); // to see the RegEx generated in re 
  return re.test(str) 
}


// TESTS: 
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on")); // true
console.log(confirmEnding("Connor", "n"));  // false
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")); // false
console.log(confirmEnding("He has to give me a new name", "name")); // true
console.log(confirmEnding("Open sesame", "same")); // true
console.log(confirmEnding("Open sesame", "sage")); // false
console.log(confirmEnding("Open sesame", "game")); // false
console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")); // false
console.log(confirmEnding("Abstraction", "action")); // /action$i/ true
