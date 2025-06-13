/*
Function _factorilize()_ takes one integer _num_ as parameter.  It returns the factorial of the provided integer.  Only integers greater than or equal to zero will be supplied to the function.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/

function factorialize(num) {
  let result = 1;
  if (num === 0 || num === 1){
    return 1
  }
  else {
    for (let i=1; i<=num ;i++){
      result*= i;
    } 
  }
  return result;
}


// TESTS
console.log(factorialize(1));  // 1
console.log(factorialize(3));  // 6
console.log(factorialize(5));  // 120
console.log(factorialize(10)); // 3628800
console.log(factorialize(20)); // 2432902008176640000
console.log(factorialize(0));  // 1
