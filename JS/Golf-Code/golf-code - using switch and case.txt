var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  switch (true){
    case (strokes == 1):
      return names[0];
      break;
    case (strokes <= par - 2):
      return names[1];
      break;
    case (strokes == par - 1):
      return names[2];
      break;
    case (strokes == par):
      return names[3];
      break;
    case (strokes ==par + 1):
      return names[4];
      break;
    case (strokes == par + 2):
      return names[5];
      break;
    case (strokes >= par + 3):
      return names[6];
      break;
    default:
      return "nope, your numbers have a mistake, check them"
  }

  
}

// Tests

console.log(golfScore(5, "a")); // nope, your numbers have a mistake, check them

console.log(golfScore(4, 1)); //  should return "Hole-in-one!"

console.log(golfScore(4, 2)); //  should return "Eagle"

console.log(golfScore(5, 2)); //  should return "Eagle"

console.log(golfScore(4, 3)); //  should return "Birdie"

console.log(golfScore(4, 4)); //  should return "Par"

console.log(golfScore(1, 1)); //  should return "Hole-in-one!"

console.log(golfScore(5, 5)); //  should return "Par"

console.log(golfScore(4, 5)); //  should return "Bogey"

console.log(golfScore(4, 6)); //  should return "Double Bogey"

console.log(golfScore(4, 7)); //  should return "Go Home!"

console.log(golfScore(5, 9)); // should return "Go Home!"
