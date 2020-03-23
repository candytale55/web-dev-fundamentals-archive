# choore_door_game

JS, html & css single-page website with fully-functional game. Three doors, you have to chose and open one, and you lose if you get the chore bot on the first or second try. You win if you get to the third.

Third commit - Added html instructions section and CSS for styling. Re-did the function randomChoreDoorGenerator and the if-else loop inside it. 

There's an ERROR : The img are not loading correctly (broken image). I already tested using the relative paths directly in randomChoreDoorGenerator and the results are the same. It works when the variable e.g. spaceDoorPath are used directly, but not when it is assigned inside randomChoreDoorGenerator. 

2020-03.05 -  ERROR : The img are still not loading. I already tested using the relative paths directly in randomChoreDoorGenerator and the results are the same. It works when the variable e.g. spaceDoorPath are used directly, but not when it is assigned inside randomChoreDoorGenerator. I tried different syntaxis for the paths without any changes.

Fourth Commit: 2020.03.07 - 
I added the URL to image links to see if that was the issue - It also got broken images. 
I finaly checked my Dev Tools. IT WAS A STUPID STUPID ERROR. I got:

    script.js:57 Uncaught ReferenceError: numClosedDoor is not defined
    at randomChoreDoorGenerator (script.js:57)
    at script.js:106"

    I had my variables with different names - just set all of them to numClosedDoors.

    Next errors: 

    script.js:104 Uncaught TypeError: Assignment to constant variable.
    at playDoor (script.js:104)
    at HTMLImageElement.doorImage2.onclick (script.js:59)

    solved declaring numClosedDoors with let instead of const.

    Error free !!! 

I kept all the notes just in case. For the fifth commit I will have a clean-from-silly-error-notes version.


Fifth Commit: 2020.03.10 - Doors aren't opening anymore. I think the error is with the !isClicked(doorImage1) - Added Start-Button + gameOver() code. 

Pre-sixth commit: I fixed the !isClicked(doorImage1) part and it still didn't work. I checked the video and it turns out the code seems OK. I tried the code in CodeCademy page and it works there. ¿Why it doesn't work here?

Sixth commit 2020.03.15 : The logic works except the start button. When clicked it doesn't produce a new game. The previous issue with the paths described in the fifth commit is not happening anymore but I substituted all the paths with URLs. It still has to be solved. 

Seventh Commit 2020.04.22: I still can't make the start button work. I've reviewed the logic against the working game but I can't find where the error is. I will probably start from scratch and check against commented code to find where I missed. I'm also turning this README.md into a working_log.md and make a real README page, but not until next commit. 

Eight Commit 2020.04.23: I'm still stuck and a went over all the code. PUAG