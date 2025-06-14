/*
Write a JavaScript program to get the first n Fibonacci numbers.
The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.
*/

function fibonacci(n){ //n represents how many numbers in the fibonacci series will be printed.
    if (n===1){
        return [0,1];
    } else {
        let arr = fibonacci(n-1);
        arr.push(arr[arr.length-1] + arr[arr.length-2]);
        return arr;
    }
}

console.log("fibonacci(8)= " +fibonacci(8));

console.log("fibonacci(15)= " +fibonacci(15));

console.log("fibonacci(100)= " +fibonacci(100));