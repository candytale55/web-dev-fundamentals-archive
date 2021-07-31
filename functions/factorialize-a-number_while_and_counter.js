
function factorialize(num) {
  if (num === 1 || num === 0){
    return 1;
  }
  var counter = num-1;
  while (counter >= 1){
      num *= counter;
      counter--;
    }
  return num;
}



// TESTS
//console.log(factorialize(1));  // 1
console.log(factorialize(3));  // 6
console.log(factorialize(5));  // 120
console.log(factorialize(10)); // 3628800
console.log(factorialize(20)); // 2432902008176640000
console.log(factorialize(0));  // 1