function reverseString_with_charAt(str) {
  let newString = "";
  for (let i = 0; i < str.length; i++){
    newString = str.charAt(i) + newString;
  }  
  return newString;
}

console.log(reverseString_with_charAt("hello"));
console.log(reverseString_with_charAt("Anita lava la tina"));
console.log(reverseString_with_charAt("Howdy"));
console.log(reverseString_with_charAt("Greetings from Earth"));








function reverseString_with_split(str) {
  let splittedString = str.split("");
  let newString = "";
  for (let i = 0; i < str.length; i++){
    newString = splittedString[i] + newString;
  } 
  return newString;
}

console.log(reverseString_with_split("hello"));
console.log(reverseString_with_split("Anita lava la tina"));
console.log(reverseString_with_split("Howdy"));
console.log(reverseString_with_split("Greetings from Earth"));









function reverseString_with_reverse(str) {
  let splittedString = str.split("");
  let newString = splittedString.reverse();
  return newString.join("");
}

console.log(reverseString_with_reverse("hello"));
console.log(reverseString_with_reverse("Anita lava la tina"));
console.log(reverseString_with_reverse("Howdy"));
console.log(reverseString_with_reverse("Greetings from Earth"));








function reverseString_chained(str) {
  let newString = str.split("").reverse().join("");
  return newString;
}

console.log(reverseString_chained("hello"));
console.log(reverseString_chained("Anita lava la tina"));
console.log(reverseString_chained("Howdy"));
console.log(reverseString_chained("Greetings from Earth"));









function reverseString_inv_for_loop(str) {
  let newString = "";
  for (let i = str.length-1; i >=0; i--){
    newString += str[i];
  }
  return newString;
}

console.log(reverseString_inv_for_loop("hello"));
console.log(reverseString_inv_for_loop("Anita lava la tina"));
console.log(reverseString_inv_for_loop("Howdy"));
console.log(reverseString_inv_for_loop("Greetings from Earth"));








function reverseString_with_array_push(str) {
  let newString = [];
  for (let i = str.length-1; i >=0; i--){
    newString.push(str[i]);
  }
  return newString.join("");
}

console.log(reverseString_with_array_push("hello"));
console.log(reverseString_with_array_push("Anita lava la tina"));
console.log(reverseString_with_array_push("Howdy"));
console.log(reverseString_with_array_push("Greetings from Earth"));









// .substr() returns characters in a string beginning at a specified location.
console.log("hello".substr(1)); // "ello"
// .charAt() returns a specified character from a string.
console.log("hello".charAt(0)); // "h"

function reverseString_recursive(str) {
  // terminal case: 
  if (str === ""){
    return "";
  }
  else {
    return reverseString_recursive(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseString_recursive("hello"));
console.log(reverseString_recursive("Anita lava la tina"));
console.log(reverseString_recursive("Howdy"));
console.log(reverseString_recursive("Greetings from Earth"));

/*
The depth of the recursion is equal to the length of the String. 
This solution will be really slow if the String is very long and the stack size is of major concern.
*/



// REFORMULATED WITH TERNARY OPERATOR: 

function reverseString_rec_Ternary(str) {
  return (str === "") ? "": reverseString_rec_Ternary(str.substr(1)) + str.charAt(0);
}

console.log(reverseString_rec_Ternary("hello"));
console.log(reverseString_rec_Ternary("Anita lava la tina"));
console.log(reverseString_rec_Ternary("Howdy"));
console.log(reverseString_rec_Ternary("Greetings from Earth"));
