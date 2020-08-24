/*
Write a JavaScript program to compute the sum of an array of integers.
Example : var array = [1, 2, 3, 4, 5, 6]
Expected Output : 21
*/

function sumArray(arr){
    if (arr.length === 1){
        return arr[0];
    } else {
        return arr.pop() + sumArray(arr);      
    }
};

console.log("[1,2,3,4,5,6] = " + sumArray([1,2,3,4,5,6]));

console.log("[21,7,2,39,20] = " + sumArray([21,7,2,39,20]));