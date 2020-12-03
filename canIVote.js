// Write your function here:

const canIVote = (number) => {
  if (number >= 18){
    return true;
  } else {
    return false;
  }
};




// Uncomment the line below when you're ready to try out your function
console.log(canIVote(19)) // Should print true
console.log(canIVote(18)) // Should print true
console.log(canIVote(17)) // Should print true
// We encourage you to add more function calls of your own to test your code!
