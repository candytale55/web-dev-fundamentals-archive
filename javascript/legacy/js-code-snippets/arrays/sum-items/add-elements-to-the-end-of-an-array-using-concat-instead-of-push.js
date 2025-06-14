/*
The concat method is a way to combine arrays into a new one without mutating the original arrays. Compare concat to the push method. push adds an item to the end of the same array it is called on, which mutates */

var arr = [1, 2, 3];
console.log(arr); // [ 1, 2, 3 ]

arr.push([4, 5, 6])
console.log(arr); // [ 1, 2, 3, [ 4, 5, 6 ] ]




/*
This is not the functional programming way.

concat offers a way to add new items to the end of an array without any mutating side effects.


Change the nonMutatingPush function so it uses concat to add newItem to the end of original instead of push. The function should return an array.
 */



function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}

var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);

console.log(first); // [ 1, 2, 3 ]
console.log(nonMutatingPush(first, second)); // [ 1, 2, 3, 4, 5 ]
