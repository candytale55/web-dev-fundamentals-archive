// FUNCTION DECLARATION is bound to an identifier, or name and uses the "function" keyword + name +  parenthesis (empty or with parameters) + curly brackets {}.

function getReminder() {
  console.log("Water the plants.")
}

getReminder();



function greetInSpanish(){
  console.log("Buenas Tardes");
}

greetInSpanish();  // Calling the function will execute the code inside.



// JS HOISTING feature allows access to function declarations before they’re defined. NOTE IT IS NOT GOOD PRACTICE. 

console.log(greetWorld()); // Output: Hello, World!

function greetWorld() {
  console.log('Hello, World!');
}


//The output of these functions are: 

/*
Water the plants.
Buenas Tardes
Hello, World!
undefined
*/
// WHY UNDEFINED?  must check





// PARAMETERS AND ARGUMENTS
/* Functions can take inputs and use them to perform a task. We can specify parameters within the parenthesis. 
Function's parameters are placeholders for information that will be passed to the function when called. When called they are arguments.*/

// You manage an online store. When a customer places an order, you send them a thank you note. 
function sayThanks(name) {
  console.log('Thank you for your purchase '+ name +'! We appreciate your business.');
}

sayThanks('Thomas'); // Thomas is an argument

sayThanks('Cole'); // Cole is an argument
