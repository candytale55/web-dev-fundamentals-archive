/*  
Recursion is a function that can be expressed in terms of itself */

var arr = [3,4,7,2,1];

function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
  }
 
console.log("multiply: " +multiply(arr, arr.length)); // 168

/*
notice that: 
multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. You can rewrite multiply in terms of itself:
*/

function multiplyRec(arr,n){
  if (n<=0){  // the base case
    return 1;  
  } else {  // For larger values of n, it calls itself, but with n - 1, and keeps doing it until n<=0. At this point all the functions can return, and the original multiply returns the answer :P
    return  multiply(arr, n - 1) * arr[n - 1];
  }
}
console.log("multiplyRec: " + multiplyRec(arr, arr.length)); // 168 


/*
Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.
*/



/*Sum of the first n elements of an array*/
function sum(arr, n) {
  if (n<=0){  // base case
    return 0;
  } else {
    return sum(arr, n-1) + arr[n-1]; 
  }
}

var arr = [3,4,7,2,1];
console.log("sum: " + sum(arr, 2));        //7
console.log("sum: " + sum([1], 0));        //0 
console.log("sum: " + sum([2, 3, 4], 1));  //2
console.log("sum: " + sum([2, 3, 4, 5], 3)); //9





