// .substr() returns characters in a string beginning at a specified location.
console.log("hello".substr(1)); // "ello"

// .charAt() returns a specified character from a string.
console.log("hello".charAt(0)); // "h"



function reverseString(str) {
  // terminal case: 
  if (str === ""){
    return "";
  }
  else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}



console.log(reverseString("hello"));
console.log(reverseString("Anita lava la tina"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));

/*
The depth of the recursion is equal to the length of the String. This solution will be really slow if the String is very long and the stack size is of major concern.
*/
