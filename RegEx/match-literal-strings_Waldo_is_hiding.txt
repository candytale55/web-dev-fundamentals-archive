
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
console.log(testRegex.test(testStr)); // true

/*
Any other forms of Kevin will not match, like /Kevin/  or KEVIN.
*/

let wrongRegex = /kevin/;
console.log(wrongRegex.test(testStr)); // false




let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
console.log(result) // true