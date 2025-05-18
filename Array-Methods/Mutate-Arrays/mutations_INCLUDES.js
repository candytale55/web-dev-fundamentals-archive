/*
function _mutation_ returns true if the string in the first element of an array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case. 

["Alien", "line"], should return true because all of the letters in line are present in Alien.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
*/

function mutation(arr) {
  let refWord = arr[0].toLowerCase();
  refWord = refWord.split("");
  // console.log(refWord); // test
  let letters = arr[1].toLowerCase();
  letters = letters.split("");
  // console.log(letters); // test
  for (let i=0; i<letters.length; i++){
    if (!refWord.includes(letters[i])){
      return false;
    }
  } 
  return true;
}


// TESTS
console.log(mutation(["Mary", "Aarmy"])); // true
console.log(mutation(["Noel", "Ole"])); // true
console.log(mutation(["ate", "date"])); // false
console.log(mutation(["floor", "for"])); // true
console.log(mutation(["hello", "neo"])); // false
console.log(mutation(["Mary", "Army"])); // true
console.log(mutation(["hello", "Hello"])); // true
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // true
console.log(mutation(["hello", "Hey"]));  // false
console.log(mutation(["hello", "olleh"])); // true


