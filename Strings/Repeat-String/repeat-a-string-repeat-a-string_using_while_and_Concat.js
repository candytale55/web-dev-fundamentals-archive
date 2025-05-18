


function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
    }
  let fragm = str;
  let i=1;
  while (i <= num-1){
    str = str.concat(fragm);
    i++;
  }
  return str;
}


console.log(repeatStringNumTimes("abc", 3));
//abcabcabc
//console.log(repeatStringNumTimes("abc", 4));
//console.log(repeatStringNumTimes("abc", 1));
//console.log(repeatStringNumTimes("abc", 1));
//console.log(repeatStringNumTimes("*", 8));
console.log(repeatStringNumTimes("abc", -2));
//console.log(repeatStringNumTimes("abc", 0));
//console.log(repeatStringNumTimes("abc", 0));
console.log(repeatStringNumTimes("abccba", 3)); 
// abccbaabccbaabccba

