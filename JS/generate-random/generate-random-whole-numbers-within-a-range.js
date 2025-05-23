/* Generate Random Whole Numbers within a Range :
   Math.floor(Math.random() * (max - min + 1)) + min
 */

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
  
}

console.log(randomRange(2,8));

console.log(randomRange(9,100)); 
// Range between 9 and 100 inclusive
