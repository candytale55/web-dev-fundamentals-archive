/*
In this project we will build the Magic Eight Ball using control flow in JavaScript. The user will be able to input a question, then our program will output a random fortune.
*/

let userName="Gaby";

// ternary expression that decides what to do if the user enters a name or not.
userName ? console.log(`Hello ${userName}!`): console.log("Hello!");

//  Variable userQuestion: should be a string that is the question the user wants to ask the Magic Eight Ball.

let userQuestion="Can you answer my question?";
console.log(`${userName}'s question is ${userQuestion}`);

// Generate a random number between 0 and 20.
let randomNumber = Math.floor(Math.random()* 20);

/*Math.random() returns a value between 0 (inclusive) and 1 (exclusive).  To make this set of numbers range from 0 (inclusive) to 20 (exclusive) we multiple the returned value by n.  To ensure we only have whole numbers we can round down using Math.floor().*/


// Variable eightBall set to empty string. We will save a value to this variable next, depending on the value of randomNumber.
let eightBall="";


// Control flow that takes in the randomNumber we made in step 4, and then assigns eightBall to a reply that a Magic Eight Ball would return.
switch (randomNumber){
  case 0:
    eightBall="It is certain.";
    break;
  case 1:
    eightBall ="It is decidedly so.";
    break;
  case 2:
    eightBall ="Without a doubt.";
    break;
  case 3:
    eightBall ="Yes - definitely.";
    break;
  case 4:
    eightBall="You may rely on it.";
    break;
  case 5:
    eightBall="As I see it, yes.";
    break;
  case 6:
    eightBall="Most likely.";
    break;
  case 7:
    eightBall="Outlook good.";
    break;
  case 8:
    eightBall="Yes";
    break;
  case 9:
    eightBall="Signs point to yes.";
    break;
  case 10:
    eightBall="Reply hazy, try again.";
    break;
  case 11:
    eightBall="Ask again later.";
    break;
  case 12:
    eightBall="Better not tell you now.";
    break;
  case 13:
    eightBall="Cannot predict now.";
    break;
  case 14:
    eightBall="Concentrate and ask again.";
    break;
  case 15:
    eightBall="Don't count on it.";
    break;
  case 16:
    eightBall="My reply is no.";
    break;
  case 17:
    eightBall="My sources say no.";
    break;
  case 18:
    eightBall="Outlook not so good.";
    break;
  case 19:
    eightBall="Very doubtful.";
    break;
}

console.log(eightBall)
