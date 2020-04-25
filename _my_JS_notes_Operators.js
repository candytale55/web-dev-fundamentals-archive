

/* equality operator (==)*/
/* Type Coercion: In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. */

function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(10)); // Not Equal
console.log(testEqual(12)); // Equal
console.log(testEqual("12")); // Equal


/* Strict equality (===) */
/*If the values being compared have different types, they are considered unequal,*/

function testVeryEqual(val) {
  if (val === 12) { 
    return "Equal";
  }
  return "Not Equal";
}

console.log(testVeryEqual(10)); // Not Equal
console.log(testVeryEqual(12)); // Equal
console.log(testVeryEqual("12")); // Not Equal



/*
The inequality operator (!=) is the opposite of the equality operator. It means "Not Equal" and returns false where equality would return true and vice versa.
1 !=  2     // true
1 != "1"    // false
1 != '1'    // false
1 != true   // false
0 != false  // false
*/

function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqual(10)); // Not Equal
console.log(testNotEqual(99)); // Equal
console.log(testNotEqual("99")); // Equal




/*
The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. Strict inequality will not convert data types.

Examples

3 !==  3   // false
3 !== '3'  // true
4 !==  3   // true

*/

function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

console.log(testStrictNotEqual(10));   // Not Equal
console.log(testStrictNotEqual("17")); // Not Equal
console.log(testStrictNotEqual(17));   //Equal

