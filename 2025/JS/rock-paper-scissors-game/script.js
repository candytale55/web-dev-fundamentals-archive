function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "Player" : "Computer"
    } has won the game!`;

    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }

};
function resetGame() {
  playerScore = 0;
  computerScore = 0; 
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  winnerMsgElement.innerText ="";
  roundResultsMsg.innerText="";
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";

};








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
