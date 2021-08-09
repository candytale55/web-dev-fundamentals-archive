/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/




// WHAT NOT TO DO: 

function sumAll_NOT_MIN_MAX(arr) {
  let sum = 0;
  arr.sort()
  for (let i= arr[0]; i<= arr[1]; i++){
    sum += i;
  }
  return sum;
}

console.log(sumAll_NOT_MIN_MAX([4, 1])); // 10
console.log(sumAll_NOT_MIN_MAX([5, 10])); // *** THIS WILL BE 0
console.log(sumAll_NOT_MIN_MAX([1, 4])); // 10
console.log(sumAll_NOT_MIN_MAX([10, 5]));  // *** THIS WILL BE 0 
console.log(sumAll_NOT_MIN_MAX([10, 15]));  // 75 







function sumAll(arr) {
  let sum = 0;
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);
  for (let i= min; i<= max; i++){
    sum += i;
  }
  return sum;
}


console.log(sumAll([4, 1]));  // 10
console.log(sumAll([5, 10])); // 45
console.log(sumAll([1, 4]));  // 10
console.log(sumAll([10, 5]));  // 45 
console.log(sumAll([10, 15])); // 75 
