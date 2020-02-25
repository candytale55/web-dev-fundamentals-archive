/*
THIS HAS AN ISSUE WITH THE VOWELS FOR LOOP THAT NEEDS FIXING.  I ALWAYS F** THIS AND AFTER I SOLVE IT, I DO IT AGAIN THE NEXT TIME. NOTE TO ME - ONCE FIXED WRITE WHY DOWN SO I FINALLY GET IT.
*/


/*
Simple rules for translating text to whale language:
- There are no consonants. Only vowels excluding “y”.
- The u‘s and e‘s are extra long, so we must double them in our program.

Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.
*/

let input = "Hello, my whale. I'm not sure if this is the right outcome";

// You need an array of vowels to be extracted from the input variable.
let vowels = ["a","e","i","o","u"];

// resultArray serves as a place to store the vowels from the input string.
let resultArray = [];

// This loop will iterate through each letter of the input variable text to compare each letter with the vowels array.
for (let i = 0; i<=input.length-1; i++){
  // console.log("Input: " + input[i]); // testing for input loop DELETE

  for (let v=0; v<=vowels.length-1; v++){
      // console.log(vowels[v]); // testing for input vowels loop Delete
       // console.log(v); // testing with numbers DELETE 
  
  if (input[i] === "y"){
    resultArray.push("i");
  } else if (input[i] ===" ") {
    resultArray.push(input[i]);
  }else if (input[i] === vowels[v]){
    // console.log("match " + input[i] + " and "+ vowels[v]); // Testing matches DELETE
    resultArray.push(input[i]);
} else if (input[i] === "e" || input[i] === "u"){
      resultArray.push(input[i]); // Whales double their e‘s and the u‘s in their language, so if input[i] is 'e' or 'u'. an extra input[i]must be pushed to the resultArray.
     }
    
    
    } // second for loop v=0  
} // first for loop  i=0

    
console.log(resultArray.join("").toUpperCase());
