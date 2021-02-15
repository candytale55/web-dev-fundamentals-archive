const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

//  Will return undefined
cities.forEach(
  city => 
  console.log('Have you visited ' + city + '?')
);
/*
Have you visited Orlando?
Have you visited Dubai?
Have you visited Edinburgh?
Have you visited Chennai?
Have you visited Accra?
Have you visited Denver?
Have you visited Eskisehir?
Have you visited Medellin?
Have you visited Yokohama?
*/





// return a new array with only those elements longer than 7 characters.
const longCities = cities.filter(city => city.length > 7);
console.log("Cities with long names: " + longCities); /* Prints:
Cities with long names: Edinburgh,Eskisehir,Medellin,Yokohama
*/



// take the first letter of each element in an  array and return a single value (word) starting with C.
const word = cities.reduce(
  (accumulator, currentValue) => {
   return accumulator + currentValue[0]; 
  }, "C");

console.log(word); // CODECADEMY




const nums = [1, 50, 75, 200, 350, 525, 1000];

// Choose a method that will return a new array of numbers returned from the function
const smallerNums = nums.map(
  num => {
    return num - 5;
  }
);
console.log("smallerNums array: " + smallerNums);
// prints: smallerNums array: -4,45,70,195,345,520,995


// Choose a method that will return a boolean value
console.log(nums.every(
  num => num < 0
)); 
