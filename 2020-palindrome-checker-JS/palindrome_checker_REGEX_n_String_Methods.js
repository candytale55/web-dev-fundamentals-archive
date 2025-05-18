// PROBLEM TO SOLVE:
/* We are getting a string and we should confirm it is or not a palindrome (a word or phrase that reads the same forward or backward). We are going to ignore punctuation and case (upper/lowercase).  */



// PROCESS:

// First we remove white-space and non-alphanum values using a REGEX expression "/[\W_]/g" and set it to lowercase so that A and a are not different characters.

var strRegexTest ="9  hOObooh _9";
console.log(strRegexTest.replace(/[\W_]/g, "")); //returns 9hOObooh9

console.log(strRegexTest.replace(/[\W_]/g, "").toLowerCase()); // returns 9hoobooh9  
// NOTE: Don't forget () after .toLowerCase()


// Then, we take the string, ".split-it" so that elements are individual elements in an array, then ".reverse-it", and finally ".join-it" back together. Look how it goes:

var stringModify = "8hOObo1h8";
console.log(
  stringModify
    .replace(/[\W_]/g, "")
    .toLowerCase()             // 8hoobo1h8
    .split("")                 // [ '8', 'h', 'o', 'o', 'b', 'o', '1', 'h', '8' ]
    .reverse()                 // [ '8', 'h', '1', 'o', 'b', 'o', 'o', 'h', '8' ]
    .join("")                  //8h1obooh8
    ); 

// Then we need to compare the result with the original palindrome candidate (already cleaned and in lowercase) using the === operator and return the result, which will be either true or false. 




// SOLUTION:

function palindrome(str) {
  return (
    str.replace(/[\W_]/g, "").toLowerCase() ===
    
    str
      .replace(/[\W_]/g, "")
      .toLowerCase()
      .split("")
      .reverse()
      .join("")

  );
}


// TESTS
console.log(palindrome("eye")); // Returns true
console.log(palindrome("Eye")); // Returns true
console.log(palindrome("8hOObo1h8")); // Returns false
console.log(palindrome("1B3 *3b1")); // Returns true
console.log(palindrome("anita lava la tina")); // Returns true
console.log(palindrome("9  hOObooh _9")); // Returns true
