
function factorialize(num) {
  if (num === 1 || num === 0){
    return 1;
  }
  var counter = num;
  while (counter > 1){
      counter--;
      num *= counter;
    }
  return num;
}



// TESTS
console.log(factorialize(1));  // 1
console.log(factorialize(0));  // 1
console.log(factorialize(3));  // 6
console.log(factorialize(5));  // 120
console.log(factorialize(10)); // 3628800
console.log(factorialize(20)); // 2432902008176640000
