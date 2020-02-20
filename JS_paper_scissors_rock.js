/*
Rock paper scissors is two player game where each player chooses either rock, paper, or scissors. The items are compared, and the one with the more powerful item wins.
- Rock beats scissors.
- Scissors cut paper.
- Paper covers rock.
If there’s a tie, then the game ends in a draw.
*/


// Get the user’s choice when the game starts.
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  
  //make sure the userInput 'rock', 'paper', or 'scissors'
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    //console.log(userInput); //testing
    return userInput;
  } else {
    console.log("That's not a valid input, enter paper, scissors or rock");
  }
}

/*
// Testing getUserChoice by calling valid and invalid input.
getUserChoice("rock");
getUserChoice("Rock");
getUserChoice("rocky mountains");
getUserChoice("");
*/


// Get the computer’s choice by producing a random whole number between 0 and 2. Then, depending on the number, return either 'rock', 'paper', or 'scissors'.
const getComputerChoice = () => {
  let value = Math.floor(Math.random() * 3);
  if (value === 2){
    return 'rock';
  } else if (value === 1){
    return 'scissors';
  } else {
    return 'paper';
  }
}
// console.log(getComputerChoice()); // Testing




// Compare the two choices and return if the human player won, lost, or tied.
const determineWinner = (userChoice, computerChoice) =>{
  
  if (userChoice === 'bomb'){
    return "Cheat Code! Cheat Code! B O O O O O O O M B !. The USER is the winner!"  
  }
  
  if (userChoice === computerChoice){
    return "It's a tie!";
  
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper'){
      return "Paper covers rock. The COMPUTER is the winner!";
    } else { // 'scissors'
      return "Rocks destroys scissors. The USER is the winner!";
    } 
}
  
  else if (userChoice === 'paper'){
    if (computerChoice === 'rock'){
      return "Paper covers rock. The USER won!";
    } else { // 'scissors'
      return "Scissors cut paper. The COMPUTER won!";
    }
    
  } else { // userChoice === scissors
    if (computerChoice === 'paper'){
      return "Scissors cuts paper. Sorry the COMPUTER is the winner!";
    } else { // rock
      return "Rock is covered by paper. The USER is the winner!";
    }
  }
} // determineWinner

/*
// Testing determineWinner
console.log(determineWinner('paper', 'scissors')); // computer is the winner
console.log(determineWinner('paper', 'paper')); //  'The game is a tie!'
console.log(determineWinner('paper', 'rock')); // user is the winner
*/



// Start the program and display the results.

const playGame = (value) => {
  let userChoice = getUserChoice(value); 
  let computerChoice = getComputerChoice();
  
  console.log("You choose " + userChoice);
  console.log("The computer choose " + computerChoice);
  
  console.log(determineWinner(userChoice, computerChoice));
}

playGame('bomb');
