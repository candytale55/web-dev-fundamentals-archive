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

/* 
USING REDUCE and Math.max:  Simplify
*/

function findLongestWordLength_reduce_MathMax_shorter(str) {
  return str.split(" ").reduce(function(longestSoFar, word){
  return Math.max(longestSoFar, word.length)
}, 0);}


// TESTS: 
console.log(findLongestWordLength_reduce_MathMax_shorter("The quick brown fox jumped over the lazy dog")); //6
console.log(findLongestWordLength_reduce_MathMax_shorter("May the force be with you")); // 5
console.log(findLongestWordLength_reduce_MathMax_shorter("Google do a barrel roll")); // 6
console.log(findLongestWordLength_reduce_MathMax_shorter("What is the average airspeed velocity of an unladen swallow")); // 8
console.log(findLongestWordLength_reduce_MathMax_shorter("What if we try a super-long word such as otorhinolaryngology")); // 19








/* 
USING MAP and Math.max and Spread Operator
Built-in map() method creates a new array populated with the results 
of executing a callback function on each element in an array. 
It returns a new array made up of the return values from the callback function.
The original array does not get altered, and the returned array may contain different values.
In this function we will make another array, made from the lengths of each element 
of the str.split(" ") array with map() and then pass these elements to Math.max 
to return the highest value (which is the lenght of the longest word).
It uses the spread operator to pass the info to Math.max
*/

function findLongestWordLength_Map_MathMax_Spread(str) {
  let lengthsArray = str.split(" ").map(
    word => word.length
  );
return Math.max(...lengthsArray);
}


// Making it simpler
function findLongestWordLength_Map_MathMax_Spread_Simpler(str) {
  return Math.max( ...str.split(" ").map(
    word => word.length));}

// TESTS: 
console.log(findLongestWordLength_Map_MathMax_Spread_Simpler("The quick brown fox jumped over the lazy dog")); //6
console.log(findLongestWordLength_Map_MathMax_Spread_Simpler("May the force be with you")); // 5
console.log(findLongestWordLength_Map_MathMax_Spread_Simpler("Google do a barrel roll")); // 6
console.log(findLongestWordLength_Map_MathMax_Spread_Simpler("What is the average airspeed velocity of an unladen swallow")); // 8
console.log(findLongestWordLength_Map_MathMax_Spread_Simpler("What if we try a super-long word such as otorhinolaryngology")); // 19





/* USING RECURSION 
An array words contains the words splitted from str. 
We do recursion: base case is When words only has 1 element left. If so, then that is the longest element and we return it. 
Otherwise, we remove the first element and recursively call the function, returning the maximum between the length of the first result and the recursive call 
*/


function findLongestWordLength_Rec(str) {
  const words = str.split(" ");
  //console.log(words);
  // base case: There's only one element left that is the longest (although it could be a tie - let's not think that way now) 
  if (words.length === 1){
    return words[0].length;
  }

  /* Use recursive call to call this function on words array */  
  return Math.max(words[0].length, findLongestWordLength_Rec(words.slice(1).join(" "))
  );
}



// TESTS: 
console.log(findLongestWordLength_Rec("The quick brown fox jumped over the lazy dog")); //6
console.log(findLongestWordLength_Rec("May the force be with you")); // 5
console.log(findLongestWordLength_Rec("Google do a barrel roll")); // 6
console.log(findLongestWordLength_Rec("What is the average airspeed velocity of an unladen swallow")); // 8
console.log(findLongestWordLength_Rec("What if we try a super-long word such as otorhinolaryngology")); // 19



/*Check these
https://www.youtube.com/watch?v=R8SjM4DKK80
https://www.youtube.com/watch?v=k7-N8R0-KY4
*/
