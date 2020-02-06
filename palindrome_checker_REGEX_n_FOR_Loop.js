// Palindrome Checker using Regex + FOR Loop

// First we set the string toLowerCase() and get rid of symbols and whitespace using REGEX.

var mySentence = "JEJE89098E_Jejej";
mySentence = mySentence.toLowerCase().replace(/[\W_]/g,"");
console.log(mySentence); //jeje89098ejejej


//We set a FOR loop with index i that increments after every loop i++. The escape sequence will be when i is greater than the length of the string divided by 2 (the loop will stop after the halfway point of the string).  

var myString ="myString"

for (var i = 0, stringLength = myString.length -1; 
     i < stringLength / 2; 
     i++ ) {
       console.log("loop testing " +i);
     }


// Inside the FOR loop we will check that each letter in element[i] is the same than the letter in the lenght of the string minus i [myString.length - i] - That is, if the letter is the same at the opposite position on the other half of the string. 

// The loop will check the first and last letters moving closer to the center of the string, at that point all leters will have been checked. If in a check it turns out the letters aren't a match, the loop will return false.  If the loop completes, it will return true, which means the string is a palindrome.


function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, "");
  for (var i = 0, len = str.length - 1; 
       i < len / 2; 
       i++) {
    if (str[i] !== str[len - i]) {
      return false;
    }
  }
  return true;
}


console.log(palindrome("eye")); //true
console.log(palindrome("_ eye*")); // true
console.log(palindrome("anita lava la tina")); //true
console.log(palindrome("0dlllld 99e")); // false
