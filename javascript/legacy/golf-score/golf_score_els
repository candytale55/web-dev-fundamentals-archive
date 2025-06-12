/* In the game of golf each hole has a par meaning the average number of strokes a golfer 
is expected to make in order to sink the ball in a hole to complete the play. 
Depending on how far above or below par your strokes are, there is a different nickname.

The function is passed "par" and "strokes" as arguments. 
Return the correct string according to the following list using the strings in the array "names"

No. of strokes
1	          "Hole-in-one!"
<= par - 2	"Eagle"
par - 1	    "Birdie"
par	        "Par"
par + 1	    "Bogey"
par + 2	    "Double Bogey"
>= par + 3	"Go Home!"
*/



var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];


function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3 ){
    return names[6];
  } else {
    return "Something is wrong, check the inputs";
  }
}


// TESTS:
console.log(golfScore(5, 4)); // "Birdie"
console.log(golfScore(4, 1)); // "Hole-in-one!"
console.log(golfScore(4, 2)); // "Eagle"
console.log(golfScore(5, 2)); // "Eagle"
console.log(golfScore(4, 3)); // "Birdie"
console.log(golfScore(4, 4)); // "Par"
console.log(golfScore(1, 1)); // "Hole-in-one!"
console.log(golfScore(5, 5)); // "Par"
console.log(golfScore(4, 5)); // "Bogey"
console.log(golfScore(4, 6)); // "Double Bogey"
console.log(golfScore(4, 7)); // "Go Home!"
console.log(golfScore(5, 9)); // "Go Home!"
console.log(golfScore(5, "A")); // "Something is wrong, check the inputs"
