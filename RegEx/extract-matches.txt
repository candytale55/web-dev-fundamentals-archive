/*
You can extract the actual matches you found with the .match() method. Apply the .match() method on a string and pass in the regex inside the parentheses.

Note that the .match syntax is the "opposite" of the .test method:

'string'.match(/regex/);
/regex/.test('string');

*/


console.log("Hello, World!".match(/Hello/));
// [ 'Hello', index: 0, input: 'Hello, World!', groups: undefined ]

let ourStr = "Regular expressions";
let ourRegex = /expressions/;
console.log(ourStr.match(ourRegex));
/*
[ 'expressions',
  index: 8,
  input: 'Regular expressions',
  groups: undefined ]
*/



let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex); 
console.log(result)
/*
[ 'coding',
  index: 18,
  input: 'Extract the word \'coding\' from this string.',
  groups: undefined ]
*/