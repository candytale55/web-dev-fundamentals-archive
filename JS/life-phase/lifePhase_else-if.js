/* lifePhase() takes in a person’s age, as a number, and returns which phase of life they are in.
0-3 should return 'baby'
4-12 should return 'child'
13-19 should return 'teen'
20-64 should return 'adult'
65-140 should return 'senior citizen'
If the number is less than 0 or greater than 140, the program returns 'This is not a valid age'
*/




const lifePhase = (age) => {
  age = Math.floor(age);
  if (age >= 0 && age <=3){
    return "baby";
  } else if (age >= 4 && age <= 12){
    return "child";
  } else if (age >= 13 && age <= 19){
    return "teen";
  } else if (age >= 20 && age <= 64){
    return "adult";
  } else if (age >= 65 && age <= 140){
    return "senior citizen";
  } else {
    return "This is not a valid age";
  }
}


// TESTS
console.log(lifePhase(5)) //should print 'child'

console.log(lifePhase(0)) //should print 'baby'
console.log(lifePhase(2)) //should print 'baby'
console.log(lifePhase(3)) //should print 'baby'

console.log(lifePhase(4)) //should print 'child'
console.log(lifePhase(8)) //should print 'child'
console.log(lifePhase(12)) //should print 'child'

console.log(lifePhase(13)) //should print 'teen'
console.log(lifePhase(15)) //should print 'teen'
console.log(lifePhase(19)) //should print 'teen'

console.log(lifePhase(20)) //should print 'adult'
console.log(lifePhase(45)) //should print 'adult'
console.log(lifePhase(64)) //should print 'adult'

console.log(lifePhase(65)) //'senior citizen'
console.log(lifePhase(78)) //'senior citizen'
console.log(lifePhase(140)) //'senior citizen'

console.log(lifePhase(165)) //should print not valid
console.log(lifePhase(-2))  //should print not valid

console.log(lifePhase(64.3)) //'adult'
console.log(lifePhase(0.2)) // 'baby'
