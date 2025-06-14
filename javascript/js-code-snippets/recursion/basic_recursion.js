
/*Returns an array containing numbers 1 to n, you are given n as an argument*/

function count(n) {
  if (n === 1) {
    return [1];
  } else {
    var numbers = count(n - 1);
    numbers.push(n);
    return numbers;
  }
}

console.log(count(20));

/* Returns array of integers begining with startNum and ending in endNum*/

function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0){
  return [startNum];
} else {
  var numbers = rangeOfNumbers(startNum, endNum -1);
  numbers.push(endNum);
  return numbers;
}};

console.log(rangeOfNumbers(50, 100));
