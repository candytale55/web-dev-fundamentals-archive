// Returns the length of the longest word in string




/* Return the length of the longest word in the provided sentence. This keeps the word and returns its length*/
function findLongestWordLength_Arr_For_loop(str) {
  let longest = "";
  let array = str.split(" ");
  for (let i=0; i<array.length; i++){
    if (array[i].length >= longest.length){
      longest = array[i];
      console.log(longest);
    }
  }
  return longest.length;
}
// TESTS: 
console.log(findLongestWordLength_Arr_For_loop("The quick brown fox jumped over the lazy dog")); //6
console.log(findLongestWordLength_Arr_For_loop("May the force be with you")); // 5
console.log(findLongestWordLength_Arr_For_loop("Google do a barrel roll")); // 6
console.log(findLongestWordLength_Arr_For_loop("What is the average airspeed velocity of an unladen swallow")); // 8
console.log(findLongestWordLength_Arr_For_loop("What if we try a super-long word such as otorhinolaryngology")); // 19






/* Returns only the length of the longest word in the string. */

function findLongestWordLength_split_arr(str) {
  let array = str.split(" ");
  let longest = 0;
  for (let i=0; i<array.length; i++){
    if (array[i].length >= longest){
      longest = array[i].length;
    }
  }
  return longest;
}

// TESTS: 
console.log(findLongestWordLength_split_arr("The quick brown fox jumped over the lazy dog")); //6
console.log(findLongestWordLength_split_arr("May the force be with you")); // 5
console.log(findLongestWordLength_split_arr("Google do a barrel roll")); // 6
console.log(findLongestWordLength_split_arr("What is the average airspeed velocity of an unladen swallow")); // 8
console.log(findLongestWordLength_split_arr("What if we try a super-long word such as otorhinolaryngology")); // 19









/* 
USING REDUCE and Math.max: 

built-in .reduce() method iterates through an array and returns a single value.  
It takes a callback function with two parameters (accumulator, currentValue) as arguments. 

On each iteration, accumulator is the value returned by the last iteration, 
and the currentValue is the current element. 
Optionally, a second argument can be passed which acts as the initial value of the accumulator.

Math.max() function returns the largest of the zero or more numbers given as input parameters, 
or NaN if any parameter isn't a number and can't be converted into one.

In this function, the 0 after the callback function is used to give an initial value 
to the longest, so that Math.max will know where to start. 
longestSoFar is the accumulator and word is the currentValue;
*/

function findLongestWordLength_reduce_MathMax(str) {
  let longest = str.split(" ").reduce(function(longestSoFar, word){
  return Math.max(longestSoFar, word.length)
}, 0);
  return longest; 
}

// TESTS: 
console.log(findLongestWordLength_reduce_MathMax("The quick brown fox jumped over the lazy dog")); //6
console.log(findLongestWordLength_reduce_MathMax("May the force be with you")); // 5
console.log(findLongestWordLength_reduce_MathMax("Google do a barrel roll")); // 6
console.log(findLongestWordLength_reduce_MathMax("What is the average airspeed velocity of an unladen swallow")); // 8
console.log(findLongestWordLength_reduce_MathMax("What if we try a super-long word such as otorhinolaryngology")); // 19

