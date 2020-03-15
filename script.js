
/////////// /* GLOBAL VARIABLES */ /////////////////

//  JavaScript DOM methods assigns HTML element w/id door1 to doorImage1.
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

// variables containing a string with the project path for Closed, ChoreBot, Beach and Space Door paths.
/*
const botDoorPath = 'img/robot.svg'; 
const beachDoorPath = 'img/beach.svg';
const spaceDoorPath = 'img/space.svg';
const closedDoorPath = 'img/closed_door.svg';
*/


// URL paths for online images 
const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg'; 
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';


let numClosedDoors = 3; // amount of doors in the game - It will decrease as we open doors.

let openDoor1, openDoor2, openDoor3; //They’ll be assigned values within randomChoreDoorGenerator()

let startButton = document.getElementById('start-button');

let currentlyPlaying = true; // when you find the Bot, gameOver() changes it to false making sure  additional doors can’t be clicked

 /////////////  FUNCTIONS ///////////////

/*isBot() takes door as argument and return a boolean value, true if it matches botDoorPath or false. - This determines if you lost*/
const isBot = (door) => {
  if (door.src === botDoorPath){
    return true;
  } else {
    return false;
  }
}


/* function isClicked() prevents players to click the same door (even if it’s opened) multiple times to decrease the numClosedDoors value down to 0 and cheat to become a winner. It returns a boolean value after comparing if path is the same as Closed_Door */
const isClicked = (door) => { 
  if ( door.src === closedDoorPath){
    return false; // The door is still closed
  } else {
    return true; // The door has opened
  }
} // isClicked function


///////////////////////////////////////////////////////////
   
    doorImage1.onclick = () => {//doorImage1.onclick run when door images are clicked.
      if(!isClicked(doorImage1) && currentlyPlaying){ //determines if the isClicked() function has not happened yet.
        doorImage1.src = openDoor1;  // click on the door = img changes to a landscape (ChoreBot, Space Beach)
        playDoor(doorImage1); // The 3 .onclick() functions are where a door is opened, so it is where the playDoor() function that decreases the numClosedDoors must be.  
      }
    } // End doorImage1.onclick = () =>

      
    doorImage2.onclick = () => {
      if(!isClicked(doorImage2) && currentlyPlaying){
        doorImage2.src= openDoor2;
        playDoor(doorImage2);    
      }
    }

  doorImage3.onclick = () => {
    if(!isClicked(doorImage3) && currentlyPlaying){
      doorImage3.src = openDoor3;
      playDoor(doorImage3);  
    }
  }
 
  
   // randomChoreDoorGenerator() generates the door that hides the ChoreBot randomly.
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


const startRound = () => {
  // Resets variables to original values
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  // Assigns new doors: 
  randomChoreDoorGenerator();
}


startButton.onClick = () =>{ // CLICK HANDLER function
  startRound();  
}


const gameOver = (status) => {
  if (status === 'win'){
    startButton.innerHTML = 'You WIN! Play Again?';
  } else {
    startButton.innerHTML = "Game Over! Play Again?"; 
    currentlyPlaying = false;
  }
}


  
 


/* function playDoor() decreases the numClosedDoors variable each time you click a door and checks if the game-winning condition (numClosedDoors === 0) has been met and if so, calls a gameOver() function*/
const playDoor = (door) => {
  numClosedDoors--;

  if (numClosedDoors === 0){ // Winning condition
    gameOver('win');
   } else if (isBot(door)) { // Losing condition
     /*if isBot returns true*/
     gameOver();
   }   
  
} // playDoor 



startRound(); // Formerly just randomChoreDoorGenerator() - startRound calls it after reseting the variables.