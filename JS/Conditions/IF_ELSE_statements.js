
//   IF Statements
/* If statements checks a condition and if it evaluates to true, it will execute a task.
- if keyword + set of parentheses (). Inside () is the condition to be evaluated. 
- followed by curly braces {} with a code block or statement that will run if the condition is true. 
*/


/*
if (condition is true) {
  statement is executed
}
*/

function trueOrFalse(AmITrue) {
  if (AmITrue){
    return("Yes, that was true");
  } else {
    return ("No, that was false");
  }

}
console.log(trueOrFalse(true));
console.log(trueOrFalse(false));





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



// ELSE ... IF Statements
/*
Allow different possible outcomes. The first condition that evaluates true from TOP to BOTTOM gets executed.

The else if always comes after the if statement and before an else statement. */

let stopLight = 'yellow';

if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}


// Program that keeps track of the way the environment changes with the seasons.

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if(season === 'fall'){
  console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer'){
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}


/* Careful what statement comes first. Function is executed top to bottom */

function largerFirst(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

console.log(largerFirst(10)); // Greater than or equal to 10
console.log(largerFirst(8));  //Less than 10
console.log(largerFirst(4));  // Less than 10 - NOTICE IT SHOULD HAVE BEEN Less than 5.

function smallerFirst(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

console.log(smallerFirst(10)); //Greater than or equal to 10
console.log(smallerFirst(8));  // Less than 10
console.log(smallerFirst(4));  // Less than 5






// Chained if/else if statements

function testSize(num) {
  if (num < 5){
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20){
    return "Huge"; 
  }
}

console.log(testSize(20));
console.log(testSize(15));
console.log(testSize(10));
console.log(testSize(7));
console.log(testSize(4));
