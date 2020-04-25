

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





/*
The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.
It will convert data types of values while comparing.

Examples

5   >  3   // true
7   > '3'  // true
2   >  3   // false
'1' >  9   // false
*/



function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

console.log(testGreaterThan(10));  //10 or Under
console.log(testGreaterThan("10")); // 10 or Under
console.log(testGreaterThan(100)); //Over 10
console.log(testGreaterThan(50)); //Over 10 
console.log(testGreaterThan("150")); //Over 100



/*
(>=) 
If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.  It will convert data types while comparing.

*/




function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

console.log(testGreaterOrEqual(10)); // 10 or Over
console.log(testGreaterOrEqual("10")); // 10 or Over
console.log(testGreaterOrEqual(9));  // Less than 10
console.log(testGreaterOrEqual("11")); // 10 or Over
console.log(testGreaterOrEqual("20")); // 20 or Over




/* less than operator (<)

If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. It converts data types while comparing.
*/


function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

console.log(testLessThan(10)); //  Under 25
console.log(testLessThan("10")); //  Under 25
console.log(testLessThan(55)); //  55 or Over
console.log(testLessThan("57")); //  55 or Over






than or equal to operator (<=)
If the number to the left is less than or equal to the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false.
Less than or equal operator converts data types.
*/


function testLessOrEqual(val) {
  if (val <= 12) {  
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  
    return "Smaller Than or Equal to 24";
  }
  return "More Than 24";
}

console.log(testLessOrEqual(10)); //Smaller Than or Equal to 12
console.log(testLessOrEqual("11")); // Smaller Than or Equal to 12
console.log(testLessOrEqual(12)); //Smaller Than or Equal to 12
console.log(testLessOrEqual(13)); //Smaller Than or Equal to 24
console.log(testLessOrEqual(5*5)); // More Than 24
console.log(testLessOrEqual("100")); // More Than 24




// Logical And Operator
/*  The logical and operator (&&) returns true if and only if the operands to the left and right of it are true. */

function testLogicalAnd(val) {
  
  if (val <= 50 && val >= 25) {
      return "Yes";
  }
  return "No";
}

console.log(testLogicalAnd(26));  // Yes
console.log(testLogicalAnd(10));  // No

/* NOTE: It's the same than nesting an if statement inside another if statement:  */

function withIfs(val) {
  if (val <= 50) {
    if (val >= 25) {
      return "Yes";
    }
  }
  return "No";
}

console.log(withIfs(26)); // Yes
console.log(withIfs(10)); // No
