// Arrays have zero-based indexing, which means the last index of the array is length - 1. Our condition for these loops are i < arr.length, which stops the loop when i is equal to length.




var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for (var i=0; i< myArr.length; i++){
  total += myArr[i];
}
console.log(total); // 20




var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
