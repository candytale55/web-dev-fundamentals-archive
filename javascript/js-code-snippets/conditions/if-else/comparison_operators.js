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

different types of operators to compare values. These operators are called comparison operators.

helpful to think of comparison statements as questions. When the answer is “yes”, the statement evaluates to true, and when the answer is “no”, the statement evaluates to false.

he identity operator (===) to check if the string 'apples' is the same as the string 'oranges'. Since the two strings are not the same, the comparison statement evaluates to false.

All comparison statements evaluate to either true or false and are made up of:

Two values that will be compared.
An operator that separates the values and compares them accordingly (>, <, <=,>=,===,!==).

*/


let hungerLevel = 7;

if (hungerLevel > 7){
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}
