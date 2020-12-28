// Using Multiple Conditional (Ternary) Operators

/* In the game of golf each hole has a par meaning the average number of strokes a golfer 
is expected to make in order to sink the ball in a hole to complete the play. 
Depending on how far above or below par the strokes are, there is a different nickname.

The function golfScore will be passed par and strokes arguments and must return 
the correct string according to the following list:

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
  return strokes == 1
  ? names[0]
  : strokes <= par - 2	
  ? names[1]
  : strokes == par - 1
  ? names[2]
  : strokes == par 
  ? names[3]
  : strokes == par + 1
  ? names[4]
  : strokes == par + 2
  ? names[5]
  : strokes >= par + 3
  ? names[6]
  : "Something is wrong, check the inputs"           
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
