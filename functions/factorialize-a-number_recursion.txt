/*
HEAD RECURSION
*/


function factorialize(num) {
  if (num === 0){
    return 1;
  }   
  return num * factorialize(num-1);
}


// The terminal condition is the if statement "If(num === 0)". When this is true we return 1, ending the recursion and informing the stack to propagate this value to the upper levels. 

// TESTS
console.log(factorialize(1));  // 1
console.log(factorialize(0));  // 1
console.log(factorialize(3));  // 6
console.log(factorialize(5));  // 120
console.log(factorialize(10)); // 3628800
console.log(factorialize(20)); // 2432902008176640000
