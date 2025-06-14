/*
For loops are declared with three optional expressions separated by semicolons:

for ([initialization]; [condition]; [final-expression])

initialization statement is executed one time only before the loop starts. Typically used to define and setup your loop variable.

condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When condition is false at the start of the iteration, the loop will stop executing. This means if condition starts as false, your loop will never execute.

The final-expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.
*/


var myArray = [];

for (var i =1; i <= 5 ; i++){
  myArray.push(i);
}

console.log(myArray);
