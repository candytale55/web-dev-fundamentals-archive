// rollTheDice() simulate two dice being rolled and totalled.



const rollTheDice = () => {
    let die1 = Math.floor(Math.random()* 6 + 1) ;
    let die2 = Math.floor(Math.random()* 6 + 1) ;
    console.log("First dice: "+die1+" Second dice: " + die2) // testing individual dice values
    return die1 + die2;
}

/* Math.random() gives us a random number from 0 up to, but not including 1. 
We multiplied by 6 to get a number between 0 and up to, but not including, 6
But since we actually wanted numbers from 1 to 6, inclusive, we added 1 */

// TESTING
console.log(rollTheDice());
console.log(rollTheDice());
console.log(rollTheDice());
