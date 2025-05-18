/* 
USING MAP and Math.max

Built-in map() method creates a new array populated with the results of executing a callback function on each element in an array. It returns a new array made up of the return values from the callback function.

The original array does not get altered, and the returned array may contain different values.

In this function we will make another array, made from the lengths of each element of the str.split(" ") array with map() and then pass these elements to Math.max to return the highest value (which is the lenght of the longest word).
*/

function findLongestWordLength(str) {
  let lengthsArray = str.split(" ").map(
    word => word.length
  );
return Math.max(...lengthsArray);
}


// TESTS: 
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); //6
console.log(findLongestWordLength("May the force be with you")); // 5
console.log(findLongestWordLength("Google do a barrel roll")); // 6
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow")); // 8
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")); // 19
