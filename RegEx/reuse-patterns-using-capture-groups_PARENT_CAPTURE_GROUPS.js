/*
You can search for repeat substrings using capture groups. Parentheses, ( and ), are used to find repeat substrings. You put the regex of the pattern that will repeat in between the parentheses.

To specify where that repeat string will appear, you use a backslash (\) and then a number. This number starts at 1 and increases with each additional capture group you use. An example would be \1 to match the first group.
*/

let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
//console.log(repeatRegex.test(repeatStr));  // true
//console.log(repeatStr.match(repeatRegex)); // ["regex regex", "regex"]  - Using the .match() method on a string will return an array with the string it matches, along with its capture group.



/*
Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times separated by single spaces.
 */

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; 
let result = reRegex.test(repeatNum);
console.log(result);  // true 

// More tests:
console.log(reRegex.test("100 100 100")); // true
console.log(reRegex.test("42 42 42 42")); // false
console.log(reRegex.test("42 42"));  // false
console.log(reRegex.test("101 102 103")); // false
console.log(reRegex.test("1 2 3"));    // false
console.log(reRegex.test("10 10 10")); // true


// Must check: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-reuse-patterns-using-capture-groups/301364