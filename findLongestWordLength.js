// Returns the length of the longest word in string

/* Return the length of the longest word in the provided sentence.*/



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
