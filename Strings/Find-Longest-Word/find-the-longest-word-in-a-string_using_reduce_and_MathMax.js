/* 
USING REDUCE and Math.max: 

built-in .reduce() method iterates through an array and returns a single value.  It takes a callback function with two parameters (accumulator, currentValue) as arguments. 

On each iteration, accumulator is the value returned by the last iteration, and the currentValue is the current element. Optionally, a second argument can be passed which acts as the initial value of the accumulator.

Math.max() function returns the largest of the zero or more numbers given as input parameters, or NaN if any parameter isn't a number and can't be converted into one.

In this function, the 0 after the callback function is used to give an initial value to the longest, so that Math.max will know where to start. longestSoFar is the accumulator and word is the currentValue;
*/

function findLongestWordLength(str) {
  let longest = str.split(" ").reduce(function(longestSoFar, word){
  return Math.max(longestSoFar, word.length)
}, 0);
  return longest; 
}


// TESTS: 
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); //6
console.log(findLongestWordLength("May the force be with you")); // 5
console.log(findLongestWordLength("Google do a barrel roll")); // 6
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow")); // 8
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")); // 19
