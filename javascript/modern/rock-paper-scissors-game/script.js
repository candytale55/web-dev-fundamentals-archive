// This function randomly selects and returns "Rock", "Paper", or "Scissors" for the computer
function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"]; // Available choices
  const randomIndex = Math.floor(Math.random() * options.length); // Random index from 0 to 2
  return options[randomIndex]; // Return a random option
}

// This function checks if the player has won the round based on traditional RPS rules
function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}

// These variables hold the current score for the player and computer
let playerScore = 0;
let computerScore = 0;

// This function handles the logic of one round and updates the score
function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult(); // Get computer's choice

  // If player wins
  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++; // Increase player score
    return `Player wins! ${userOption} beats ${computerResult}`;
  } 
  // If it's a tie
  else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } 
  // If computer wins
  else {
    computerScore++; // Increase computer score
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

// Select DOM elements that will be updated during the game
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

// This function updates the UI after each round and checks if the game is over
function showResults(userOption) {
  // Display result message and update scores on screen
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  // Check if someone has won the game (reached 3 points)
  if (playerScore === 3 || computerScore === 3) {
    // Show winner message
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "Player" : "Computer"
    } has won the game!`;

    // Show reset button and hide the game buttons
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
}

// This function resets all scores and UI elements so the player can start over
function resetGame() {
  playerScore = 0;
  computerScore = 0;

  // Reset score display
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;

  // Clear result messages
  winnerMsgElement.innerText = "";
  roundResultsMsg.innerText = "";

  // Show game buttons and hide reset button
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
}

// Event listeners for each option button
document.getElementById("rock-btn").addEventListener("click", () => showResults("Rock"));
document.getElementById("paper-btn").addEventListener("click", () => showResults("Paper"));
document.getElementById("scissors-btn").addEventListener("click", () => showResults("Scissors"));

// Event listener for reset button
resetGameBtn.addEventListener("click", resetGame);












// OTHER OPTIONS FOR function hasPlayerWonTheRound(player, computer)

// 1st try. 
/*
function hasPlayerWonTheRound(player, computer) {
  if (player === "Rock") return computer === "Scissors";
  if (player === "Scissors") return computer === "Paper";
  if (player === "Paper") return computer === "Rock";
}
*/



// clean, scalable version using an object lookup table.  
  /*
const winRules = {
  Rock: "Scissors",
  Paper: "Rock",
  Scissors: "Paper"
};

function hasPlayerWonTheRound(player, computer) {
  return winRules[player] === computer;
}

*/

  
// Easier to expand, like this: 
/*
const winRules = {
  Rock: ["Scissors", "Lizard"],
  Paper: ["Rock", "Spock"],
  Scissors: ["Paper", "Lizard"],
  Lizard: ["Spock", "Paper"],
  Spock: ["Scissors", "Rock"]
};

function hasPlayerWon(player, computer) {
  return winRules[player]?.includes(computer);
}

*/
