let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
console.log(testStr.match(ourRegex)); // Repeat
/*
[ 'Repeat',
  index: 0,
  input: 'Repeat, Repeat, Repeat',
  groups: undefined ]
*/

// To search or extract a pattern more than once, you can use the g flag.

let repeatRegex = /Repeat/g;
console.log(testStr.match(repeatRegex)); // ["Repeat", "Repeat", "Repeat"]


// Find and extract both Twinkle words from the string twinkleStar.

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; 
let result = twinkleStar.match(starRegex); 
console.log(result) // ['Twinkle', 'twinkle' ]