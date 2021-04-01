

function factorialize_for_loop(num) {
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
console.log(factorialize_for_loop(1));  // 1
console.log(factorialize_for_loop(3));  // 6
console.log(factorialize_for_loop(5));  // 120
console.log(factorialize_for_loop(10)); // 3628800
console.log(factorialize_for_loop(20)); // 2432902008176640000
console.log(factorialize_for_loop(0));  // 1






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









function factorialize_setting_an_array(num) {
  let array = [];
  let result = 1;
  for (let i = 0; i<num; i++){
    array.push(num-i);
  }
  for (let i=0; i<array.length; i++){
    result = result * array[i];
  }
  return result;
}


// TESTS
console.log(factorialize_setting_an_array(1));  // 1
console.log(factorialize_setting_an_array(3));  // 6
console.log(factorialize_setting_an_array(5));  // 120
console.log(factorialize_setting_an_array(10)); // 3628800
console.log(factorialize_setting_an_array(20)); // 2432902008176640000
console.log(factorialize_setting_an_array(0));  // 1
