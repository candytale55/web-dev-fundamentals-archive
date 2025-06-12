/* Because Math.random() can never quite return a 1. We round down with Math.floor() and we multiply by the next whole number to the maximum value that we want in the range.*/

// For a range between 0 and 9, we multiply by 10. 

function randomWholeNum() {

  return Math.floor(Math.random() * 10); 
}

console.log(randomWholeNum());
