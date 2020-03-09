/* The .reduce() method returns a single value after iterating through the elements of an array and applying a callback function.  
   The callback function has two parameters, an accumulator (starts on the first element value) and the currentValue (the second element). 
   Each loop the return value of the callback function becomes the accumulator for the next iteration and currentValue is the current element's value.
*/

const numbers = [0,10,20,30,40];

const sumNumbers = numbers.reduce(
  (accumulator, currentValue) => {
    return accumulator + currentValue;
  }
);
console.log(sumNumbers); // 100
console.log(0+10+20+30+40); // 100

/*
.reduce() can also take an optional second parameter to set an initial value for accumulator. Remember that the first argument is the callback function. 
*/

const biggerNumbers = [100, 200, 300, 400];

const summedBiggerNumbers = biggerNumbers.reduce(
  (accumulator, currentValue) => {
    return accumulator + currentValue; 
  }
,1000); // <-- the 1000 is the second argument of biggerNumbers.reduce(). 

console.log(summedBiggerNumbers); // 2000 (The sum of the array's numbers is 1000 but it started counting at 1000).
console.log(100+200+300+400); // 1000




const newNumbers = [1, 3, 5, 7];

//  Checks the value being used as we iterate through the array
const newSum = newNumbers.reduce(
  (accumulator, currentValue) => {
    console.log('The value of the accumulator is: ' + accumulator);
    console.log('The value of current value is: ' + currentValue);
    return accumulator + currentValue;
  }
);

console.log("newSum final value is: " + newSum);

/*
The value of the accumulator is: 1
The value of current value is: 3
The value of the accumulator is: 4
The value of current value is: 5
The value of the accumulator is: 9
The value of current value is: 7
newSum final value is: 16
*/


//  Checks the value being used as we iterate through the array
const newSumAccu10 = newNumbers.reduce(
  (accumulator, currentValue) => {
    console.log('The value of the accumulator is: ' + accumulator);
    console.log('The value of current value is: ' + currentValue);
    return accumulator + currentValue;
  }
, 10);

console.log("newSumAccu10 final value is: " + newSumAccu10);

/*
The value of the accumulator is: 10
The value of current value is: 1
The value of the accumulator is: 11
The value of current value is: 3
The value of the accumulator is: 14
The value of current value is: 5
The value of the accumulator is: 19
The value of current value is: 7
newSumAccu10 final value is: 26
*/
