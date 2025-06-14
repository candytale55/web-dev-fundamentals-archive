// FUNCTION DECLARATION is bound to an identifier, or name and uses the "function" keyword + name +  parenthesis (empty or with parameters) + curly brackets {}.


function getReminder() {
  console.log("Water the plants.")
}

getReminder();



function greetInSpanish(){
  console.log("Buenas Tardes");
}

greetInSpanish();



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

/////////////////////////////////////////
