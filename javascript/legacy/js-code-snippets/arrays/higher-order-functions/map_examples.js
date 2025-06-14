/*  When the .map() method is called on an array, it takes a callback function as argument and returns a new array.*/

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





const nums = [1, 50, 75, 200, 350, 525, 1000];

// Choose a method that will return a new array of numbers returned from the function
const smallerNums = nums.map(
  num => {
    return num - 5;
  }
);
console.log("smallerNums array: " + smallerNums);
// prints: smallerNums array: -4,45,70,195,345,520,995

