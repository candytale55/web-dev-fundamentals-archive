
// FOR REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length); //prints 24

//Use an array method to remove the last string of the array secretMessage
console.log(secretMessage.pop());  // prints JavaScript
console.log(secretMessage.length); // prints 23

// Use an array method to add the words to and Program as separate strings to the end of the secretMessage array.
secretMessage.push('to', 'Program');
//console.log(secretMessage);
console.log(secretMessage.length); // prints 25



// Change the word easily to the word right by accessing the index and replacing it.
/*  // TESTING INDEX:
let index = secretMessage.indexOf('easily');
console.log(index); // Prints 7
*/ 
secretMessage[secretMessage.indexOf('easily')] = 'right';
//console.log(secretMessage); //prints 'right' instead of 'easily' 



//Use an array method (.shift) to remove the first string of the array.
console.log(secretMessage.shift()); // Prints Learning
//console.log(secretMessage); // Prints message without 'Learning'


//Use an array method (.unshift) to add the string Programming to the beginning of the array.
console.log(secretMessage.unshift('Programming')); // Prints 25. ?????
// console.log(secretMessage); // Prints array with first word 'Programming'

//console.log(secretMessage);

// Use an array method (.splice) to remove the strings get, right, the, first, time, and replace them with the single string know,
/*  // TESTING:
console.log(secretMessage.indexOf('get')); //6
console.log(secretMessage.indexOf('right')); //7
console.log(secretMessage.indexOf('the')); //8
console.log(secretMessage.indexOf('first')); //9
console.log(secretMessage.indexOf('time,')); //10
*/

console.log(secretMessage.splice(secretMessage.indexOf('get'),5, 'know')); // Prints [ 'get', 'right', 'the', 'first', 'time,' ]
//splice works like this: splice(indexToStart, numberOfIndices, 'stringToAdd');
//console.log(secretMessage); Prints the message without spliced strings and 'know' instead


// Use an array method (.join) to print the secret message as a sentence
console.log(secretMessage.join(' ')); // Prints: "Programming is not about what you know it is about what you can figure out. -2015, Chris Pine, Learn to Program"
