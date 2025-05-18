
function factorialize_shortest(num) {
  for (var result = 1; num > 0 ; num--){
    result *= num;
  }
  return result;
}

// The return values for the function will always be greater than or equal to 1, so result is initialized at one. 

// TESTS
console.log(factorialize_shortest(1));  // 1
console.log(factorialize_shortest(0));  // 1
console.log(factorialize_shortest(3));  // 6
console.log(factorialize_shortest(5));  // 120
console.log(factorialize_shortest(10)); // 3628800
console.log(factorialize_shortest(20)); // 2432902008176640000








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



/* MORE COMPACTED: */


function factorialize(num) {
  if (num === 1 || num === 0){
    return 1;
  }
  for (var i= num-1; i>=1 ; i--){
      num *= i;
    }
  return num;
}



// TESTS
console.log(factorialize(1));  // 1
console.log(factorialize(3));  // 6
console.log(factorialize(5));  // 120
console.log(factorialize(10)); // 3628800
console.log(factorialize(20)); // 2432902008176640000
console.log(factorialize(0));  // 1












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


// MORE COMPACT: 


function factorialize_while_with_counter(num) {
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
console.log(factorialize_while_with_counter(1));  // 1
console.log(factorialize_while_with_counter(3));  // 6
console.log(factorialize_while_with_counter(5));  // 120
console.log(factorialize_while_with_counter(10)); // 3628800
console.log(factorialize_while_with_counter(20)); // 2432902008176640000
console.log(factorialize_while_with_counter(0));  // 1




// EVEN BETTER: 

function factorialize_while(num) {
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
console.log(factorialize_while(1));  // 1
console.log(factorialize_while(0));  // 1
console.log(factorialize_while(3));  // 6
console.log(factorialize_while(5));  // 120
console.log(factorialize_while(10)); // 3628800
console.log(factorialize_while(20)); // 2432902008176640000


















// FIRST TRY - It's weird I did it so complicated.
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








////// RECURSIVE SOLUTIONS

/*
In traditional head recursion, you perform your recursive calls first, 
and then you take the return value of the recursive call and calculate the result. 
In this manner, you don’t get the result of your calculation 
until you have returned from every recursive call.

In tail recursion, you perform your calculations first, 
and then you execute the recursive call, passing the results 
of your current step to the next recursive step. 
This results in the last statement being in the form of 
(return (recursive-function params)).
*/

// HEAD RECURSION
function factorialize_recursion(num) {
  if (num === 0){
    return 1;
  }   
  return num * factorialize(num-1);
}

/* The terminal condition is the if statement "If(num === 0)". 
When this is true we return 1, ending the recursion and 
informing the stack to propagate this value to the upper levels. 
*/

// TESTS
console.log(factorialize_recursion(1));  // 1
console.log(factorialize_recursion(0));  // 1
console.log(factorialize_recursion(3));  // 6
console.log(factorialize_recursion(5));  // 120
console.log(factorialize_recursion(10)); // 3628800
console.log(factorialize_recursion(20)); // 2432902008176640000




// TAIL RECURSION

/*
In this solution, with each evaluation of the recursive call, the factorial is updated. 
This is different from the head-recursive solution where all evaluation calculations 
are stored on the stack until the base case is reached.
*/


function factorialize_tail_recursion(num, factorial = 1) {
  if (num === 0){
    return factorial; // base case
  } else {
    return factorialize(num-1, factorial * num);
  }   
}



// TESTS
console.log(factorialize_tail_recursion(1));  // 1
console.log(factorialize_tail_recursion(0));  // 1
console.log(factorialize_tail_recursion(3));  // 6
console.log(factorialize_tail_recursion(5));  // 120
console.log(factorialize_tail_recursion(10)); // 3628800
console.log(factorialize_tail_recursion(20)); // 2432902008176640000
