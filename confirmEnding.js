/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
*/

function confirmEnding(str, target) {
  let fragment = str.slice(str.length - target.length);
  //console.log(fragment);
  if (target == fragment){
    return true;
  }
  else {
    return false;
  }
}


/////// MORE CONCISE: 

function confirmEnding(str, target) {
  if (target == str.slice(str.length - target.length)){
    return true;
  }
  else {
    return false;
  }
}




///////// TERNARY OPERATOR: 

function confirmEnding(str, target) {
  return (target == str.slice(str.length - target.length)) ?
    true : false
  }




// TESTS:
console.log(confirmEnding("Bastian", "n")); // true 
console.log(confirmEnding("Congratulation", "on")); // true
console.log(confirmEnding("Connor", "n"));  // false
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")); // false
console.log(confirmEnding("He has to give me a new name", "name")); // true
console.log(confirmEnding("Open sesame", "same")); // true
console.log(confirmEnding("Open sesame", "sage")); // false
console.log(confirmEnding("Open sesame", "game")); // false
console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")); // false
console.log(confirmEnding("Abstraction", "action")); //true
