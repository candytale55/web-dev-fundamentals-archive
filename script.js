
/////////// /* GLOBAL VARIABLES */ /////////////////

//  JavaScript DOM methods assigns HTML element w/id door1 to doorImage1.
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

// variables containing a string with the ChoreBot, Beach and Space Door paths.
const botDoorPath = "img/robot.svg"; 
const beachDoorPath = "img/beach.svg";
const spaceDoorPath = "img/space.svg";

const numClosedDoors = 3; // amount of doors in the game

let openDoor1, openDoor2, openDoor3 ; //They’ll be assigned values within randomChoreDoorGenerator()


///////////////////////////////////////////////////////////

// doorImage1.onclick run when door images are clicked. 
doorImage1.onclick = () => {
  doorImage1.src = openDoor1;   // when you click on the door, the closed door changes to the ChoreBot or to the Space or Beach landscapes.
};
///////// ERROR : The img are not loading. I already tested using the relative paths directly in randomChoreDoorGenerator and the results are the same. It works when the variable e.g. spaceDoorPath are used directly, but not when it is assigned inside randomChoreDoorGenerator. 
doorImage2.onclick = () => {
  doorImage2.src= spaceDoorPath;  
};

doorImage3.onclick = () => {
  doorImage3.src = openDoor3;
};



  
  // generates the door that hides the ChoreBot.
const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoor); // Will randomly generate a whole number between 0 and 2. 

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


/* function playDoor() decreases the numClosedDoors variable each time you click a door and checks if the game-winning condition (numClosedDoors === 0) has been met and if so, calls a gameOver() function
*/



randomChoreDoorGenerator();

      
