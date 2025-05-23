// SWITCH Statement

let groceryItem = 'papaya';

if (groceryItem === 'tomato') {
  console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
  console.log('Papayas are $1.29');
} else {
  console.log('Invalid item');
}
// Imagine if we had 100 different values =  many else if statements. 


/*  Switch statement has a syntax that is easier to read and write when writing multiple else if statements. 

 switch keyword followed by ( ... ) that contains the value each case will compare. 
 
 +  block, { ... } with multiple cases that contain
 
    + case keyword  + possible value to be checked + : +  code that will run if true + "break;"
    .
    .
    .

+ default statement 


*/

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default: // If no case is true.
    console.log('Invalid item');
    break;
}

/*
There must always be a break keyword after each case to. It exits the block and do not execute more code, or check other cases. Without it the program would execute the code for all cases + default code. 
*/



let athleteFinalPosition = 'first place';

switch (athleteFinalPosition){
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default: 
    console.log('No medal awarded.');
    break;
}
