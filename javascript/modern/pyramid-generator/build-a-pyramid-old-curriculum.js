
// Exercise from: // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/#learn-introductory-javascript-by-building-a-pyramid-generator

const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// i++, i+= 1, i = i +1  work the same  
for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}
// Check Steps 70 - 75 on 

/*
// Does the same, check 75 i <=:
for (let i = 0; i < count; i ++) { 
  rows.push(padRow(i + 1, count));
}
*/


let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);
  
// ---------------------------- With WHILE LOOP ------------------------

/* REMOVE THIS
// See Step 91 - 92
// let continueLoop = false;
let done = 0;

while (done <= count) { // 91- parameter continueLoop Step 94
  done++;
  rows.push(padRow(done, count));
  //if (done === count) {
  //  continueLoop = false;
  // } 
}
REMOVE THIS  */  
// -------------------------- USING ARRAY METHODS AND PROPERTIES -----------------------

// Step 95 - 98

while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}

// --------------- - UPSIDE DOWN PYRAMID WITH BACKWARDS LOOP ------------------------------

// Steps 100 - 105
// conditions that also work for the iteration:  i = i-1, i -= 1, 

for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));  // the loop needs to run while i is greater than 0.
}


// -------------- UPSIDE DOWN PYRAMID WITH unshift() ----------------------------------

// Step 111 
for (let i = 1; i <= count; i++) {
  rows.unshift(padRow(i, count));  // To make it regular, just use .push() instead of .unshift()
}


// ------------------------ TOGGLE THE PYRAMID ----------------------------------
// Steps 116

let inverted = true;

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

// -------------------- END PYRAMID - TOGGLE WITH ! --------------
// Cleaned

const character = "!";
const count = 10;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);



