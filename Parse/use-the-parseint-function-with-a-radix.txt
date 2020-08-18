/*
The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

parseInt(string, radix);

Check: https://es.wikipedia.org/wiki/Sistema_binario and https://en.wikipedia.org/wiki/Binary_number
*/

console.log(parseInt("11", 2)); // 3
/*The radix says that "11" is in binary system (base 2) and it will convert it to decimal.*/



function convertToInteger(str) {
  return parseInt(str,2);
}

console.log(convertToInteger("10011")); //19
console.log(convertToInteger("10111")); //23
console.log(convertToInteger("11111")); //31

console.log(convertToInteger("100000")); //32
console.log(convertToInteger("00000"));  //0
console.log(convertToInteger("111"));    //7