
// User can enter his or her name in between the quotation marks.
let userName = "Bob";


// variable userQuestion holds the question the user wants to ask the Magic Eight Ball (string)
let userQuestion = "Will I die tomorrow?";

// Condition IF - ELSE
/*
if (userName !== ""){
  console.log(`Hello, ${userName}!`);
} else {
  console.log("Hello!");
}
*/

//Ternary Operator:
userName !== "" ?
   console.log(`Hello, ${userName}! Your question to the Magic Eight Ball is "${userQuestion}".`)
:  console.log(`Hello! Your question to the Magic Eight Ball is "${userQuestion}".`);

// randomNumber returns a value between 0 (inclusive) and 1 (exclusive). If we want a range from 0 (inclusive) to 8 (exclusive) we multiply the returned value by 8 and we round down to whole numbers using Math.floor() 
let randomNumber = Math.floor(Math.random()*8);


// eightBall will save a value in the next steps, depending on the value of randomNumber
let eightBall = "";

// IF-ELSE control flow that assigns eightBall a reply depending on the value of randomNumber.
if (randomNumber === 0){
  eightBall = 'It is certain';
} else if (randomNumber === 1) {
  eightBall = 'It is decidedly so';
} else if (randomNumber === 2) {
  eightBall = 'Reply hazy try again';
} else if (randomNumber === 3) {
  eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
  eightBall = 'Do not count on it';
} else if (randomNumber === 5) {
  eightBall = 'My sources say no';
} else if (randomNumber === 6) { 
  eightBall = 'Outlook not so good';
} else {
  eightBall = 'Signs point to yes';
}

  // console.log(randomNumber); // for testing
  console.log();
  console.log("The Magic Eight Ball answer is:");
  console.log(eightBall);
