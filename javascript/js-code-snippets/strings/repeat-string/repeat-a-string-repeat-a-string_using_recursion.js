
// Using Recursion


function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
    } 
  else {
    return str + repeatStringNumTimes(str, num-1);
  }
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

