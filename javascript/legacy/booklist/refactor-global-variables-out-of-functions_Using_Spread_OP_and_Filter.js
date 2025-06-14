/*
The global array bookList should not be changed inside either function. The add function should add the given bookName to the end of the array passed to it and return a new array (list). The remove function should remove the given bookName from the array passed to it.

Note: Both functions should return an array, and any new parameters should be added before the bookName parameter.
*/




// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];


function add (arr, bookName) {
  return [...arr, bookName];
}


function remove (arr, bookName) {
  return arr.filter( 
    book => book !== bookName
    );
}



// TESTS: 

//console.log(bookList);

var newBookList = add(bookList, 'A Brief History of Time');
console.log(newBookList);

var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
console.log(newerBookList);

var newestBookList = remove(
    add(bookList, 'A Brief History of Time'), 
    'On The Electrodynamics of Moving Bodies');
console.log(newestBookList);

console.log(bookList);
