
function factorialize(num) {
  for (var result = 1; num > 0 ; num--){
    result *= num;
  }
  return result;
}



// TESTS
console.log(factorialize(1));  // 1
console.log(factorialize(0));  // 1
console.log(factorialize(3));  // 6
console.log(factorialize(5));  // 120
console.log(factorialize(10)); // 3628800
console.log(factorialize(20)); // 2432902008176640000
