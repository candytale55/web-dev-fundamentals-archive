/*
This function returns an array of consecutive integers starting with 1 through the number passed to the function.

The base case tells the recursive function when it no longer needs to call itself. This time it's a simple case where the return value is already known. 

The recursive call executes the original function with different arguments. If the function is written correctly, eventually the base case will be reached.

If you want to write a recursive function that returns an array containing the numbers 1 through n (the final number)

It will need to call itself with progressively smaller values of n until it reaches 1 as follows:
*/

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log("countup: "+ countup(5)); // [ 1, 2, 3, 4, 5 ]

/*
this seems counterintuitive since the value of n decreases, but the values in the final array are increasing. This happens because the push happens last, after the recursive call has returned. At the point where n is pushed into the array, countup(n - 1) has already been evaluated and returned [1, 2, ..., n - 1].
*/




function countdown(n){
  if(n<=0){
    return [];
  } else {
    const countArray = countdown(n-1);
    countArray.unshift(n);
    return countArray;
  }
}

console.log("countdown: " + countdown(5)); // 5,4,3,2,1
