/* USING RECURSION 
An array words contains the words splitted from str. 

We do recursion: base case is When words only has 1 element left. If so, then that is the longest element and we return it. 

Otherwise, we remove the first element and recursively call the function, returning the maximum between the length of the first result and the recursive call 
*/


function findLongestWordLength(str) {
  const words = str.split(" ");
  //console.log(words);
  // base case: There's only one element left that is the longest (although it could be a tie - let's not think that way now) 
  if (words.length === 1){
    return words[0].length;
  }

  /* Use recursive call to call this function on words array */  
  return Math.max(words[0].length, findLongestWordLength(words.slice(1).join(" "))
  );
}



// TESTS: 
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); //6
console.log(findLongestWordLength("May the force be with you")); // 5
console.log(findLongestWordLength("Google do a barrel roll")); // 6
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow")); // 8
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")); // 19
