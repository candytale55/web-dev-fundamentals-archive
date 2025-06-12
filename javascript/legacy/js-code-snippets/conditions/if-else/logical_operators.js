/*

An if statement checks a condition and will execute a task if that condition evaluates to true.
if...else statements make binary decisions and execute different code blocks based on a provided condition.
We can add more conditions using else if statements.
Comparison operators, including <, >, <=, >=, ===, and !== can compare two values.
The logical and operator, &&, or “and”, checks if both provided expressions are truthy.
The logical operator ||, or “or”, checks if either provided expression is truthy.
The bang operator, !, switches the truthiness and falsiness of a value.
The ternary operator is shorthand to simplify concise if...else statements.
A switch statement can be used to simplify the process of writing multiple else if statements. The break keyword stops the remaining cases from being checked and executed in a switch statement.

In JavaScript, there are operators that work with boolean values known as logical operators. We can use logical operators to add more sophisticated logic to our conditionals. There are three logical operators:

the and operator (&&) - both conditions must evaluate to true for the entire condition to evaluate to true
the or operator (||) - only one of the conditions must evaluate to true for the overall statement to evaluate to true
the not operator, otherwise known as the bang operator (!) - The ! not operator reverses, or negates, the value of a boolean - the ! operator will either take a true value and pass back false, or it will take a false value and pass back true.
*/

let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel >8){
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
} // not bed time yet




if (mood === 'sleepy' || tirednessLevel >8){
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
} // time to sleep
