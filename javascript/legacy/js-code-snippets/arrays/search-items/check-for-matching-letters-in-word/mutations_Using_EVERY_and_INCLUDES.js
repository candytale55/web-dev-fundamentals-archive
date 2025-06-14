/*
JS6.
function _mutation_ returns true if the string in the first element of an array contains all of the letters of the string in the second element of the array.
*/




function mutationFirstTry(arr) {
  let refWord = arr[0].toLowerCase().split("");
  // console.log(refWord); // test
  let letters = arr[1].toLowerCase().split("");
  // console.log(letters); // test
  for (let i=0; i<letters.length; i++){
    if (!refWord.includes(letters[i])){
      return false;
    }
  } 
  return true;
}




// Using EVERY
/* 
Here we lowercase and turn it into an array the second string; then make sure every one of its letters is a part of the lowercased first string.

indexOf will give you -1 if the current letter is missing. We check that not to be the case, for if this happens even once every will be false.
*/

function mutation(arr) {
  return arr[1].toLowerCase().split("").every(
    function(letter){
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });
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


