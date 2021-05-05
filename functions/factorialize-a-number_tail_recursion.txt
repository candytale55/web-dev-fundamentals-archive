/*
In tail recursion, you perform your calculations first, and then you execute the recursive call, passing the results of your current step to the next recursive step. This results in the last statement being in the form of (return (recursive-function params)).

In this solution, with each evaluation of the recursive call, the factorial is updated. This is different from the head-recursive solution where all evaluation calculations are stored on the stack until the base case is reached.

Note that in traditional head recursion, you perform your recursive calls first, and then you take the return value of the recursive call and calculate the result. In this manner, you don’t get the result of your calculation until you have returned from every recursive call.
*/


function factorialize(num, factorial = 1) {
  if (num === 0){
    return factorial; // base case
  } else {
    return factorialize(num-1, factorial * num);
  }   
}



// TESTS
console.log(factorialize(1));  // 1
console.log(factorialize(0));  // 1
console.log(factorialize(3));  // 6
console.log(factorialize(5));  // 120
console.log(factorialize(10)); // 3628800
console.log(factorialize(20)); // 2432902008176640000
