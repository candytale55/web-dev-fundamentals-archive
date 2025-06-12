/* 
greetAliens() takes in an array of strings and uses a for loop to print a greeting with each string in the array in the following format:
“Oh powerful [stringElement], we humans offer our unconditional surrender!”

It would be convenient to use .forEach(), but you’re not allowed to use it here. 
 */


// Write your code here:


const greetAliens = (array) => {
  for (let x = 0; x < array.length; x++){
    console.log(`Oh powerful ${array[x]}, we humans offer our unconditional surrender!`)
  } 

}


// TEST:

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);

