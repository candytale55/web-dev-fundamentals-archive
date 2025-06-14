/*
ometimes whitespace characters around strings are not wanted but are there. Typical processing of strings is to remove the whitespace at the start and end of it.

Note: The String.prototype.trim() method would work here, but you'll need to complete this challenge using regular expressions.
*/


let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;; 
let result = hello.replace(wsRegex, ""); 
console.log(result); //Hello, World!