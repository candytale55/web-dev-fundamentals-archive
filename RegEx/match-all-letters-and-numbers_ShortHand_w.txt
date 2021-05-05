/*
You were able to search for all letters of the alphabet with [a-z]. This kind of character class is common enough that there is a shortcut for it, although with a few extra characters as well.

The closest character class in JavaScript to match the alphabet is \w. These shortcuts are known as shorthand character classes.

This shortcut is equal to [A-Za-z0-9_]. 

It matches upper and lowercase letters plus numbers AND the underscore character (_).
*/


let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";

// All these return true:
console.log(longHand.test(numbers));
console.log(shortHand.test(numbers));
console.log(longHand.test(varNames));
console.log(shortHand.test(varNames));



// Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; 
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result); // 31
console.log(quoteSample.match(alphabetRegexV2));
