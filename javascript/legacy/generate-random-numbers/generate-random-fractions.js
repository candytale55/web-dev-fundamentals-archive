/*
Math.random() generates a random decimal number between 0 (inclusive) and not quite up to 1 (exclusive). Thus Math.random() can return a 0 but never quite return a 1
*/

function randomFraction() {
  return Math.random();
}


console.log(randomFraction());
