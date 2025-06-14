// TERNARY OPERATOR
//  short-hand syntax to simplify an if...else statement.

let isNightTime = true;

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

// With ternary operator: 

isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

//   Condition + ? + Expression1 + : + Expression2 + ;

/*  
A condition followed by a "?"
Two expressions follow separated by a colon (:).

If the condition evaluates true , the first expression executes. If not (false), the second expression executes.
*/



let isLocked = false;

if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}

// As ternary operator
isLocked ?
  console.log('You will need a key to open the door.') : 
  console.log('You will not need a key to open the door.');


let isCorrect = true;

if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

isCorrect ? console.log('Correct!') : console.log('Incorrect!');


/* Using single quotes in a falsy expression: use the escape character (\) or use double quotes ("")*/


let favoritePhrase = 'Love That!';

if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}


favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");



