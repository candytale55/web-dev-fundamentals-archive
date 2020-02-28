/* IN THIS VERSION THE WORDS ARE KEPT SEPARATED BY A BLANK SPACE, THE "Y" IS TRANSFORMED TO "ii" AND THE "W" TO "uu"*/

/*
Simple rules for translating text to whale language:
- There are no consonants. Only vowels excluding “y”.
- The u‘s and e‘s are extra long, so we must double them in our program.

Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.
*/

const input = "Hello, my yellow whale. I'm not sure if this is the right outcome";

// You need an array of vowels to be extracted from the input variable.
const vowels = ["a","e","i","o","u","y","w"];

// resultArray serves as a place to store the vowels from the input string.
let resultArray = [];


// SOLUTION WITH BLANK SPACES, "Y" TRANSFORMATION TO "ii" and "W" TRANSFORMATION TO "uu"

// This loop will iterate through each letter of the input variable text to compare each letter with the vowels array.
for (let i = 0; i<input.length; i++){
  // console.log("Input: " + i + " " +input[i]); // testing for input loop DELETE
  
  if (input[i]===" "){  //separates words
     resultArray.push(input[i]);  
     }
      

  for (let v=0; v<vowels.length; v++){
    //  console.log(v + " " + vowels[v]); // testing for input vowels loop Delete
      
    if (input[i] === vowels[v]) { // FIRST IF . comparing to vowel array
    // console.log("match " + input[i] + " and "+ vowels[v]); 
      
      if (input[i] === "y"){
       resultArray.push("ii");        
      }
     
      else if (input[i] === "e") { // doubling "e"s
        resultArray.push("ee");
      }  
      
      else if (input[i] === "u") { // doubling "u"s
        resultArray.push("uu");
      }  
      
      else if(input[i]==="w"){
        resultArray.push("uu");
      }
      else {
        resultArray.push(input[i]);
      }  
      

      
    } // FIRST IF
        
      
    } // second for loop v=0  
} // first for loop  i=0

    
    

console.log(resultArray.join("").toUpperCase());
