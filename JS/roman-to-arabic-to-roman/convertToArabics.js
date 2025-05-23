function convertToArabics(num) {

// Converts num to UpperCase and splits it into array _romanNum_
let romanNum = num.toUpperCase().split("");
let toArabics = [];

// Depending on the letter it pushes its value into array _to Arabics_
for (let i=0; i<romanNum.length; i++){
switch(romanNum[i]){
  case "I":
    toArabics.push(1);
    break;
  case "V":
    toArabics.push(5);
    break;
  case "X":
    toArabics.push(10);
    break;
  case "L":
    toArabics.push(50);
    break;
  case "C":
    toArabics.push(100);
    break;
  case "D":
    toArabics.push(500);
    break;
  case "M":
    toArabics.push(1000);
    break;
 } // switch
} // for


// It sums up the values into toArabics arrays, except when the value to the left is smaller, because this means it should be substracted. For example IV = [1,5] 
let sum = 0;
for (let j=0; j<toArabics.length; j++ ){
  if (toArabics[j+1]>toArabics[j]){
    sum -= toArabics[j];
  }
  else {
    sum += toArabics[j];
  }
}
return sum;
} // function


// TESTS
console.log(convertToArabics("XXXIV"));
console.log(convertToArabics("MXXXV"));
console.log(convertToArabics("DXXV"));
console.log(convertToArabics("DCCXXV"));
console.log(convertToArabics("XIX"));
console.log(convertToArabics("iv"));
console.log(convertToArabics("CM"));
