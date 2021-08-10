/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog.

Strings are immutable, you will need to save the edits on another variable, even if you must reuse the same one just to make it look like the changes where done using just that one variable.
*/



function myReplace(str, before, after) {
  let beforeRegExp = new RegExp(before);
  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.substring(1);
    } 
  if (before[0] === before[0].toLowerCase()) {
    after = after[0].toLowerCase() + after.substring(1);
    }
  return str.replace(beforeRegExp, after);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped")); 
//



// TESTS

console.log(myReplace("Let us go to the store", "store", "mall")); 
//Let us go to the mall.

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); 
//He is Sitting on the couch.

console.log(myReplace("I think we should look up there", "up", "Down")); 
//I think we should look down there.

console.log(myReplace("This has a spellngi error", "spellngi", "spelling")); 
//This has a spelling error.

console.log(myReplace("His name is Tom", "Tom", "john")); 
//His name is John.

console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")); 
//Let us get back to more Algorithms.
