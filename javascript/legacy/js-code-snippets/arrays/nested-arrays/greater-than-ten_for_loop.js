/*
greaterThanTen(arr) iterates through each element of an array, and test if it's greater than 10. 
It returns a new array, [12, 14, 80], containing those items
*/




function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]));
// [ 12, 14, 80 ]


