/*
When the .map() method is called on an array, it takes a callback function as argument and returns a new array.
*/

const numbers = [1,2,3,5,7,8,10];

const numberTimes2 = numbers.map(
  number => {
    return number * 2;
  }
); //numberTimes 2 stores the new array.

console.log(numberTimes2); // [ 2, 4, 6, 10, 14, 16, 20 ]




const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(
  firstChar => {
    return firstChar[0];
  }
);
console.log(secretMessage.join(''));
// prints: HelloWorld



const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map(
  halfNumber => {
    return halfNumber / 100;
  }
);
console.log(smallNumbers); // [ 1, 2, 3, 4, 5 ]

