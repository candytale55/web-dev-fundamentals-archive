/*
Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.
*/

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;
console.log(result);

// More tests: 
console.log("9".match(noNumRegex)); // null
console.log("cui cui cui cu1".match(noNumRegex).length); // 14
console.log("18 and live".match(noNumRegex).length); // 9
console.log("Catch 22".match(noNumRegex).length);  // 6
console.log("101 Dalmatians".match(noNumRegex).length); // 11
console.log("One, Two, Three".match(noNumRegex).length); // 15
console.log("21 Jump Street".match(noNumRegex).length); // 12

