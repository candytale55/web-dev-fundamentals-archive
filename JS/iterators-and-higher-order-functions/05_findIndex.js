/* The method .findIndex() will return the index of the FIRST element of an array that evaluates to true in the callback function*/

const numbers = [123, 789, 78, 72, 34, 50];

const indexNumbersLess100 = numbers.findIndex(
  number =>{
    return number < 100;
  }
);

console.log(indexNumbersLess100); // Returns 2 because 78 is the first number smaller than 100 and that returns true.




const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

//  Find the index of the element that has the value 'elephant'
const foundAnimal = animals.findIndex(
  animal =>{
    return animal === 'elephant';
  }
);

console.log(foundAnimal); // Returns 7 (the index of the word 'elephant')


// find the index of the first animal that starts with the letter 's'
const startsWithS = animals.findIndex(
  animal => {
    return animal[0] === 's';
  }
);

console.log(startsWithS);
