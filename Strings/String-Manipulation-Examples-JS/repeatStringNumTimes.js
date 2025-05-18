/*
Function repeatStringNumTimes repeats a given string str (first argument) 
for num times (second argument) without using the built-in .repeat() method. 
Return an empty string if num is not a positive number.
*/


// IF and FOR Loops

function repeatStringNumTimes(str, num) {
  let newStr = "";
  if (num < 0){
    return ""
  }
  for (let i=0; i<num; i++){
    newStr += str;
  } 
  return newStr
}



// Using REPEAT:

function repeatStringNumTimes(str, num) {
  if (num < 0){
    return ""
  }
  return str.repeat(num);
}






// Using CONCAT and a While loop

function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "empty";
    }
  let fragm = str;
  let i=1;
  while (i <= num-1){
    str = str.concat(fragm);
    i++;
  }
  return str;
}



// Using Recursion


function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
    } 
  else {
    return str + repeatStringNumTimes(str, num-1);
  }
}







// Using Recursion and Ternary Operator

function repeatStringNumTimes(str, num) {
  return (num < 1) ? "" : str + repeatStringNumTimes(str, num-1)
}




// TESTS: 
console.log(repeatStringNumTimes("abc", 3));
//abcabcabc

console.log(repeatStringNumTimes("abc", 4));
// abcabcabcabc

console.log(repeatStringNumTimes("abc", 1));
// abc

console.log(repeatStringNumTimes("*", 8));
// ********

console.log(repeatStringNumTimes("abc", -2));
// empty

console.log(repeatStringNumTimes("abc", 0));
// empty

console.log(repeatStringNumTimes("abccba", 3)); 
// abccbaabccbaabccba

