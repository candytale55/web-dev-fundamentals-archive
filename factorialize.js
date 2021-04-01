





function factorialize_while_loop(num) {
  let result = 1;
  if (num === 0 || num === 1){
    return 1
  }
  else {
    while (num > 0){
      result *= num;
      num--;
    } 
  }
  return result;
}

// TESTS
console.log(factorialize_while_loop(1));  // 1
console.log(factorialize_while_loop(3));  // 6
console.log(factorialize_while_loop(5));  // 120
console.log(factorialize_while_loop(10)); // 3628800
console.log(factorialize_while_loop(20)); // 2432902008176640000
console.log(factorialize_while_loop(0));  // 1
