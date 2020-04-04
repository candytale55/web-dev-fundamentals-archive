
//   IF Statements
/* If statements checks a condition and if it evaluates to true, it will execute a task.
- if keyword + set of parentheses (). Inside () is the condition to be evaluated. 
- followed by curly braces {} with a code block or statement that will run if the condition is true. 
*/

let sale = true;
sale = false; 

if (sale){
  console.log('Time to buy!');
}

if (!sale){   /* ! switches truthiness/falsiness of a value, it's the same as to say, "if sale is false" */
  console.log('Wait a few days');
}




// IF ... ELSE Statements
/* We can add an "else" to add a default behavior - to execute certain code if the condition is false.*/

if (false) {
  console.log('This block will not run.');
} else {
  console.log('But this code will because the condition evaluates to true!');
}


let newSale = true;
newSale = false;

if(newSale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.');
}


