
/////////// /* GLOBAL VARIABLES */ /////////////////

//  JavaScript DOM methods assigns HTML element w/id door1 to doorImage1.
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

// variables containing a string with the project path for Closed, ChoreBot, Beach and Space Door paths.
const botDoorPath = 'img/robot.svg'; 
const beachDoorPath = 'img/beach.svg';
const spaceDoorPath = 'img/space.svg';
const closedDoorPath = 'img/closed_door.svg';

// Online images - to test the rest of the code while I solve the error of the broken images below.
// IT ALSO GENERATES THE BROKEN IMAGES
/*
const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg'; 
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
*/


let numClosedDoors = 3; // amount of doors in the game

let openDoor1, openDoor2, openDoor3; //They’ll be assigned values within randomChoreDoorGenerator()


///////////////////////////////////////////////////////////

// doorImage1.onclick run when door images are clicked. 
doorImage1.onclick = () => {
  doorImage1.src = openDoor1;  // click on the door = img changes to a landscape (ChoreBot, Space Beach)
  playDoor();
};

///////// ERROR : The img are not loading. I already tested using the relative paths directly in randomChoreDoorGenerator and the results are the same. It works when the variable e.g. spaceDoorPath are used directly, but not when it is assigned inside randomChoreDoorGenerator. 
// It isn't fixed by changing the relative path variables (const botDoorPath = 'img/robot.svg';)
// It isn't fixed by adding '' ("'img/robot.svg'")
// It isn't fixed by adding ./ to the path ("./img/robot.svg")
// It isn't fixed by adding both ("'./img/space.svg'";)

/* I finaly checked my Dev Tools. I got an "
    script.js:57 Uncaught ReferenceError: numClosedDoor is not defined
    at randomChoreDoorGenerator (script.js:57)
    at script.js:106"

    IT WAS A STUPID STUPID ERROR, I had my variables with different names - just set all of them to numClosedDoors.

    Next error: 

    script.js:104 Uncaught TypeError: Assignment to constant variable.
    at playDoor (script.js:104)
    at HTMLImageElement.doorImage2.onclick (script.js:59)

    solved declaring numClosedDoors with let instead of const.

    Error free !!! 
*/

doorImage2.onclick = () => {
  doorImage2.src= openDoor2;
  playDoor();  
};

doorImage3.onclick = () => {
  doorImage3.src = openDoor3;
  playDoor();
};

  
  // generates the door that hides the ChoreBot randomly.
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


/* function isClicked() prevents players to click the same door (even if it’s opened) multiple times to decrease the numClosedDoors value down to 0 and cheat to become a winner. It returns a boolean value after comparing if path is the same as Closed_Door */
const isClicked = (door) => {
  if (door.src === closedDoorPath){
    return true;
  } else {
    return false;
  }
} // isClicked function


/* function playDoor() decreases the numClosedDoors variable each time you click a door and checks if the game-winning condition (numClosedDoors === 0) has been met and if so, calls a gameOver() function
*/
const playDoor = () => {
  numClosedDoors--;

  if (numClosedDoors === 0){ // Winning condition
    gameOver();
   }
} // playDoor 



const gameOver = () => {

}



randomChoreDoorGenerator();

      
