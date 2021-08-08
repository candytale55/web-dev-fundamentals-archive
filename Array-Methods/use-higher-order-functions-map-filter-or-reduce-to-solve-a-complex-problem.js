/*
Complete the code for the squareList function using any combination of map(), filter(), and reduce(). DO NOT USE any kind of for or while loops or the forEach() function.

The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

*/



const squareList = arr => {
  
  return arr
  .filter( num => num % parseInt(num) === 0 ) // takes out non-integers
  .filter(num => num > 0) // only positive numbers
  .map( num => num * num);
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers); 
// [ 25, 9 ]

console.log(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]));  
// [ 16, 1764, 36 ]

console.log(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]));
// [ 9, 100, 49 ]
