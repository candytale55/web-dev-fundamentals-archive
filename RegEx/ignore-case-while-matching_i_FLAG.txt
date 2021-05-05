
/*
Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. Uppercase are A, B, and C. Lowercase are a, b, and c.

You can match both cases using what is called a flag that ignores case - the i flag.  You can use it by appending it to the regex like this: 

/ignorecase/i. 

This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.
*/



// Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations or variations with spaces.

let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; 

let result = fccRegex.test(myString);
console.log(result) // true



console.log(fccRegex.test("freecodecamp")); // true
console.log(fccRegex.test("FreeCodeCamp")); // true
console.log(fccRegex.test("freecodeCAMP")); // true

console.log(fccRegex.test("free code CAMP")); // false
