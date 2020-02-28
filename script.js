
/////////// /* GLOBAL VARIABLES */ /////////////////

//  JavaScript DOM methods assigns HTML element w/id door1 to doorImage1.
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

// variables containing a string with the ChoreBot, Beach and Space Door paths.
let botDoorPath = "img/robot.svg"; 
let beachDoorPath = "img/beach.svg";
let spaceDoorPath = "img/space.svg";

const numClosedDoors = 3; // amount of doors in the game

let openDoor1, openDoor2, openDoor3 ; //They’ll be assigned values within randomChoreDoorGenerator()


///////////////////////////////////////////////////////////

// doorImage1.onclick run when door images are clicked. 
doorImage1.onclick = () => {
  doorImage1.src = botDoorPath;   // when you click on the door, the closed door changes to the ChoreBot
};

doorImage2.onclick = () => {
  doorImage2.src= beachDoorPath;  
};

doorImage3.onclick = () => {
  doorImage3.src = spaceDoorPath;
};

  
  
  /* NOT WORKING - IF I UNCOMMENT, THE DOORS CAN'T BE CHOSEN
  // randomly generates the door that hides the ChoreBot.
  const randomChoreDoorGenerator = () => {
      let choreDoor = Math.floor(Math.random() * numClosedDoor; // Will randomly generate a whole number between 0 and 2.

      if (choreDoor === 0) {

        } else if (choreDoor === 1){
    
        } else { // choreDoor === 2 }
        
  };

  //randomChoreDoorGenerator();

  */