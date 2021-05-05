/*
There is also a way to search for patterns at the end of strings using the dollar sign character $ at the end of the regex.
*/

let theEnding = "This is a never ending story";

let storyRegex = /story$/;
console.log(storyRegex.test(theEnding)); // true

let noEnding = "Sometimes a story will have to end";
console.log(storyRegex.test(noEnding));  //false


// Use the anchor character ($) to match the string caboose at the end of the string caboose.

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
let result = lastRegex.test(caboose);
console.log(result) // true

