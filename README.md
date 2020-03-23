# choore_door_game




playDoor() 
decreases the numClosedDoors variable each time you click a door and checks if the game-winning condition (numClosedDoors === 0) has been met and if so, calls a gameOver() function

isClicked(door) 
prevents players to click the same door multiple times to decrease the numClosedDoors value to a winner 0 = cheating. It returns a boolean value after comparing if path is the same as Closed_Door

isBot(door) 
takes door as argument and return a boolean value.  True if it matches botDoorPath or false if it was spacePath or beachPath. True = determines if you lost.

randomChoreDoorGenerator() 
generates the door that hides the ChoreBot randomly

door.onclick = () => 
Runs when each of the door images are clicked. 
  If the door hasn't been clicked before: !isClicked(door1) 
  and if the Bot hasn't been found yet (&& currentlyPlaying)
It changes the image behind the closed door(ChoreBot, Space Beach)
Executes playDoor(door) that decreases the numClosedDoors value. 


startRound() 
Resets variables to original values and assigns new doors by calling randomChoreDoorGenerator()


gameOver(status)
if status is'win' it will display 'You WIN! Play Again?' if it is 'lose' it will display "Game Over! Play Again?". Currently playing will change to false. 

