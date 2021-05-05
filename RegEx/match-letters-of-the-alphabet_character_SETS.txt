/*
Inside a character set, you can define a range of characters to match using a hyphen character: -.

For example, to match lowercase letters a through e you would use [a-e].
*/

let bgRegex = /[a-e]at/;
console.log("cat in the craddle".match(bgRegex)); // cat
console.log("bat in the sky".match(bgRegex)); // bat
console.log("mat in my house".match(bgRegex)); // null



// Match all the letters in the string quoteSample.

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; 
let result = quoteSample.match(alphabetRegex); 
console.log(result);