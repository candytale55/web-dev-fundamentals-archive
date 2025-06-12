// Setup
var myArray = [];
var i = 10;

do{
myArray.push(i);
  i++;
} while (i < 5);
console.log(myArray); // 10

// do...while loops will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true.






//  This behaves similar to other types of loops, and the resulting array will look like [0, 1, 2, 3, 4].
var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
console.log(ourArray); // [ 0, 1, 2, 3, 4 ]



// what makes the do...while different from other loops is how it behaves when the condition fails on the first check. Let's see this in action: Here is a regular while loop that will run the code in the loop as long as i < 5

var ourArray = []; 
var i = 5;
while (i < 5) {
  ourArray.push(i);
  i++;
}
console.log(ourArray); // []




// Difference with a Do...While loop: When we get to the next line, there is no condition to evaluate, so we go to the code inside the curly braces and execute it. We will add a single element to the array and then increment i before we get to the condition check. When we finally evaluate the condition i < 5 on the last line, we see that i is now 6, which fails the conditional check, so we exit the loop and are done.

var ourArray = []; 
var i = 5;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
console.log(ourArray); // [5]
