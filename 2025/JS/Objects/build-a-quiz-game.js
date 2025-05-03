const questions = [];

const question1 = {
  category: "Syntax Showdown",
  question: "Which of these is valid Python syntax?",
  choices: ["let x = 5;","x := 5","var x = 5;"],
  answer: "x := 5"
};

const question2 = {
  category: "Indentron's Emotional Baggage",
  question: "Why does Indentron secretly cry at night?",
  choices: ["Because JavaScript uses curly braces","Because Python has no switch statement","Because semicolons are mandatory friends"],
  answer: "Because JavaScript uses curly braces"
};

const question3 = {
  category: "The Great Print-Off",
  question: "What will print('Hello') do in Python?",
  choices: ["Print 'Hello' and make Indentron proud","Throw a semicolon error","Crash the server (probably)"],
  answer: "Print 'Hello' and make Indentron proud"
};

const question4 = {
  category: "Variable Insanity",
  question: "Which of these is NOT a valid way to declare a variable in JavaScript?",
  choices: ["let x = 10;","const y = 5;","var z: int = 3"],
  answer: "var z: int = 3"
};

const question5 = {
  category: "Error Messages That Haunt Me",
  question: "Which of these is a real Python error message?",
  choices: ["Unexpected 'fun' in line 42","IndentationError: unexpected indent","Brace YourselfException"],
  answer: "IndentationError: unexpected indent"
};

questions.push(question1,question2,question3,question4,question5);

function getRandomQuestion(arr){
  let chosenQuestion = arr[Math.round(Math.random()*(arr.length)-1)+1];
  return chosenQuestion;
}

function getRandomComputerChoice(arr){

  let randomComputerChoice = arr[Math.round(Math.random()*(arr.length)-1)+1];
  return randomComputerChoice;
}

console.log(getRandomComputerChoice(question1.choices));


function getResults(qObj,compChoice){
  if (qObj.answer==compChoice){
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${qObj.answer}`
  }
}

console.log(getResults(question1, question1.choices[2]));
