// Using WHILE Loop and NOT having to go over the whole palindrome (Better performance for bigger input). It uses two variable indexes, one from the begining of the string and the other at the end, as it goes comparing letters to the center. 



function palindrome(str) {

  // front and back indexes:
  let front = 0;
  let back = str.length - 1;
 
  // because front and back pointers may not meet in the middle ("back === front"), we use "back > front". 

  while (back > front) {
    // These skip the character if it doesn't met the requirements (blank space, symbol) and reduce/add the indexes. 
    if (str[front].match(/[\W_]/)) { front++; continue;}
    if (str[back].match(/[\W_]/)) {  back--; continue; }

    //does the comparison of current character and returns false if characters are not the same
    if (str[front].toLowerCase() !== str[back].toLowerCase()) return false;
    front++;
    back--;
  } // end of while loop

  //if the string has been compared without returning false, then returns true = is a palindrome.
  return true;
}

console.log(palindrome("eye")); //true
console.log(palindrome("RaceCar")); //true
console.log(palindrome("903_aa309")); //true
console.log(palindrome("2_A3*3#A2")); //true
console.log(palindrome("anita lava la tina")); //true
console.log(palindrome("ddfjakm,f..aie")); //false
