// The parseInt() function parses a string and returns an integer.

function convertToInteger(str) {
  return parseInt(str);
}

console.log(convertToInteger("56")); //56 

// If the first character in the string can't be converted into a number, then it returns NaN.
console.log(convertToInteger("route 66")); //NaN
console.log(convertToInteger(".00956"));   //NaN