/*
The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

condition ? statement-if-true : statement-if-false;
*/

function checkEqualwithIf(a, b) {
  if (a == b){
    return "Equal";
  } else {
    return "Not Equal"
  }
}

console.log("checkEqualwithIf(1, 2) = " +checkEqualwithIf(1, 2));  // Not Equal
console.log("checkEqualwithIf(2, 2) = " +checkEqualwithIf(2, 2));  // Equal



function checkEqual(a, b) {
  return (a == b) ? "Equal" : "Not Equal";
}

console.log("checkEqual(1, 2) = " +checkEqual(1, 2)); // Not Equal
console.log("checkEqual(2, 2) = " +checkEqual(2, 2)); // Equal
