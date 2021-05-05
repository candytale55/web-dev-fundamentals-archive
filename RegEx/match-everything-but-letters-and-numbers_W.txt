/*
You can use a shortcut to match alphanumerics [A-Za-z0-9_] using \w. A natural pattern you might want to search for is the opposite of alphanumerics.

You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].
*/


let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
console.log(numbers.match(shortHand));  // %
console.log(sentence.match(shortHand)); // !


// Use the shorthand character class \W to count the number of non-alphanumeric characters 
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; 
let result = quoteSample.match(nonAlphabetRegex).length;  // 1
console.log(quoteSample.match(nonAlphabetRegex)); // [ ' ', ' ', ' ', ' ', ' ', '.' ]