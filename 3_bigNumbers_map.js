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




/*
create a new array that contains the first character of each string in the animals array and save it to a const variable named secretMessage.
*/

const secretMessage = animals.map(
  firstChar => {
    return firstChar[0];
  }
);
console.log(secretMessage.join(''));
// prints: HelloWorld




/* Divide all the numbers in bigNumbers by 100 and save the returned values to a variable declared with const called smallNumbers. */

const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map(
  halfNumber => {
    return halfNumber / 100;
  }
);

console.log(smallNumbers);


/*
When .map() is called on an array, it takes an argument of a callback function and returns a new array.

numbers is an array of numbers.

bigNumbers will store the return value of calling .map() on numbers.

numbers.map will iterate through each element in the numbers array and pass the element into the callback function.

return number * 10 is the code we wish to execute upon each element in the array. This will save each value from the numbers array, multiplied by 10, to a new array.
*/
