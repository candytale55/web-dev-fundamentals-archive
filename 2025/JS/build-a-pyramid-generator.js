
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
// Check 70, 75 on 
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/#learn-introductory-javascript-by-building-a-pyramid-generator

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
  
