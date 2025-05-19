/*
In order to count backwards by twos, we'll need to change our initialization, condition, and final-expression.
We'll start at i = 10 and loop while i > 0. We'll decrement i by 2 each loop with i -= 2.
*/

// Even numbers:
var evenNumbers = [];
for (var i = 10; i > 0; i -= 2) {
  evenNumbers.push(i);
}



// Odd numbers:
var myArray = [];
for (var i=9; i>0; i-=2){
  myArray.push(i);
}



console.log(evenNumbers);  // [ 10, 8, 6, 4, 2 ]
console.log(myArray);      // [ 9, 7, 5, 3, 1 ]
