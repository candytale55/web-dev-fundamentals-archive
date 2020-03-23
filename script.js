
                                  /* VARIABLES */

//  assigns HTML element by id to each door.
let door1 = document.getElementById('door1');
let door2 = document.getElementById('door2');
let door3 = document.getElementById('door3');
let startButton = document.getElementById('start-button');

let currentStreak = document.getElementById('current-streak');
let bestStreak = document.getElementById('best-streak');

// paths for door images
/* // The relative paths are not working - WHY?
const botDoorPath =  'img/robot.svg' 
const beachDoorPath = 'img/beach.svg';
const spaceDoorPath = 'img/space.svg';
const closedDoorPath = 'img/closed_door.svg';
*/
const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg'; 
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';


let numClosedDoors = 3;  //  decreases as we open doors.

let openDoor1, openDoor2, openDoor3; //’ll be assigned image paths in randomChoreDoorGenerator()

let currentlyPlaying = true; // when you find the Bot, gameOver() changes it to false making sure  additional doors can’t be clicked

let score = 0;
let bestScore = 0; 
currentStreak.innerHTML = score;
bestStreak.innerHTML = bestScore;




                                       /*  FUNCTIONS */


                                       


const isClicked = (door) => {
  if (door.src == closedDoorPath) { ////////NOTE IT IS ONLY == vs my original ===
    return false; // still closed
  } else {
    return true;  // door opened
  }
}



const isBot = (door) => {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
}


  const playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) { // Winning condition
      gameOver('win');
    } else if (isBot(door)) { // if isBot returns true
      gameOver('lose');
    }
  }
  
      


/*   
// ORIGINAL VERSION - Only three choices
  const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors); // Will randomly generate a whole number between 0 and 2. 

  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = beachDoorPath;

  } else if (choreDoor === 1){
    openDoor2 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor3 = beachDoorPath;

  } else if (choreDoor === 2){  
    openDoor3 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor1 = beachDoorPath;
  } // End if-else loop

};  //randomChoreDoorGenerator
*/

const randomChoreDoorGenerator = () => {
  choreDoor = Math.floor(Math.random() * 6);
  switch (choreDoor) {
    case 0:
      openDoor1 = botDoorPath;
      openDoor2 = beachDoorPath;
      openDoor3 = spaceDoorPath;
      break;
    case 1:
      openDoor1 = botDoorPath;
      openDoor2 = spaceDoorPath;
      openDoor3 = beachDoorPath;
      break;
    case 2:
      openDoor2 = botDoorPath;
      openDoor1 = beachDoorPath;
      openDoor3 = spaceDoorPath;
      break;
    case 3:
      openDoor2 = botDoorPath;
      openDoor1 = spaceDoorPath;
      openDoor3 = beachDoorPath;
      break;
    case 4:
      openDoor3 = botDoorPath;
      openDoor1 = beachDoorPath;
      openDoor2 = spaceDoorPath;
      break;
    case 5:
      openDoor3 = botDoorPath;
      openDoor1 = spaceDoorPath;
      openDoor2 = beachDoorPath;
      break;
  }
}





  door1.onclick = () => {
    if(!isClicked(door1) && currentlyPlaying){ 
        door1.src = openDoor1; 
        playDoor(door1); 
      }
    } 
      
    door2.onclick = () => {
      if(!isClicked(door2) && currentlyPlaying){
        door2.src= openDoor2;
        playDoor(door2);    
      }
    }

  door3.onclick = () => {
    if(!isClicked(door3) && currentlyPlaying){
      door3.src = openDoor3;
      playDoor(door3);  
    }
  }
 


startButton.onClick = () =>{
  startRound();  
}


const startRound = () => {
  door1.src = closedDoorPath;
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML = 'Good luck!';
  randomChoreDoorGenerator();
}



const gameOver = (status) => {
  if(status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
    getYourScore();
  } else {
    startButton.innerHTML = "Game over! Play again?"
    score = 0;
    currentStreak.innerHTML = score;
  }
  currentlyPlaying = false;
}



const getYourScore = () => {
  score++;
  currentStreak.innerHTML = score;
  if (score > highScore) {
    highScore = score;
    bestStreak.innerHTML = highScore;
  }
}

startRound(); 
