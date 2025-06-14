/*
If statements checks a condition and if it evaluates to true, it will execute a task.
- if keyword + set of parentheses (). Inside () is the condition to be evaluated. 
- followed by curly braces {} with a code block or statement that will run if the condition is true. 
*/

let sale = true;
sale = false; 

if (sale){
  console.log('Time to buy!');
}

if (!sale){
  console.log('Wait a few days');
}

// There shouldn’t be anything that is printed to console after you reassign sale to false.
