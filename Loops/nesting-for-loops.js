// Nesting For Loops

function multiplyAll(arr) {
  var product = 1;
  for (var i=0; i<arr.length; i++){
    for (var j=0;  j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
// it returns the product of all the numbers in the sub-arrays of arr
console.log(multiplyAll([[1,2],[3,4],[5,6,7]])); // 5040






var arr2 = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr2.length; i++) {
  for (var j=0; j < arr2[i].length; j++) {
    console.log(arr2[i][j]); 
  }
}
// This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array.