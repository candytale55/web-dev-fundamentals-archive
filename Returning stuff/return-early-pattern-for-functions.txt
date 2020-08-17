// Setup
function abTest(a, b) {
  
  if (a < 0 || b <0){
    return undefined;
  }
  // if a or b are less than 0 the function will immediately exit with a value of undefined

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2,2));  // 8
console.log(abTest(2,-2)); // undefined
console.log(abTest(-2,2)); // undefined
console.log(abTest(0,2));  // 2
console.log(abTest(0,0));  // 0


