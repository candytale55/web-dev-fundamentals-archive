function sequentialSizes(val) {
  var answer = "";
  // If you have multiple inputs with the same output, you can represent them in a switch statement like this:
  switch(val){
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;
}

console.log(sequentialSizes(1)); // Low
console.log(sequentialSizes(2));
console.log(sequentialSizes(3));

console.log(sequentialSizes(4)); // Mid
console.log(sequentialSizes(5));
console.log(sequentialSizes(6));

console.log(sequentialSizes(7)); // High
console.log(sequentialSizes(8));
console.log(sequentialSizes(9));
