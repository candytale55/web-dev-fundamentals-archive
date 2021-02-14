// Accessing Elements

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

let listItem = famousSayings[0];
console.log(listItem);

console.log(famousSayings[2]);

// what happens if you try to access an index that is beyond the last element?

console.log(famousSayings[3]); // undefined.
// When you try to access an index in an array that does not contain an element you will get a value of undefined.



/*
Each element in an array has a numbered position known as its index. 
We can access individual items using their index, which is similar to referencing an item in a list based on the item’s position.

Arrays in JavaScript are zero-indexed, meaning the positions start counting from 0 rather than 1. 
Therefore, the first item in an array will be at position 0. 

We’re using bracket notation, [] with the index after the name of the array to access the element.

cities[0] will access the element at index 0 in the array cities. 
You can also access individual characters in a string using bracket notation and the index.
*/

const hello = 'Hello World';
console.log(hello[6]);
// Output: W - The console will display W since it is the character that is at index 6.
