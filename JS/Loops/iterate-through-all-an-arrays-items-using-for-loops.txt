/*
Sometimes it is very handy to be able to iterate through each item of an array to find one or more elements that we might need, or to manipulate an array based on which data items meet a certain set of criteria. 

JavaScript offers several built in methods that each iterate over arrays in slightly different ways to achieve different results (such as every(), forEach(), map(), etc.)

But the most flexible technique that also offers the greatest amount of control is a simple for loop.
*/


/*
greaterThanTen(arr) iterates through each element of an array, and test if it's greater than 10. It returns a new array, [12, 14, 80], containing those items
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





/*
justFiltersElem takes a nested array _arr_, and _elem_ as arguments, and returns a new array. _elem_ is an element that may or may not be present on one or more of the nested arrays. The function uses a for loop to return an array where  _elem_ is removed from all nested arrays.
*/


function justFiltersElem(arr, elem) {
  let newArr = [];
  for (let i= 0; i<arr.length; i++){
    if (newArr[i]=== undefined){
      newArr.push([]);
    }
    for (let j=0; j<arr[i].length; j++){
      if (arr[i][j] !== elem){
        newArr[i].push(arr[i][j]);
      }
    }
  }
  return newArr;
}




/*
filteredArray takes a nested array _arr_, and _elem_ as arguments, and returns a new array. _elem_ is an element that may or may not be present on one or more of the nested arrays. The function uses a for loop to return an array where ANY ARRAY containing _elem_ is removed from _arr_.

The code: 

if (arr[i].indexOf(elem) == -1) 
This checks every parameter for the element and if is NOT there continues the code
*/



function filteredArray(arr, elem) {
  let newArr = [];
  for (let i= 0; i<arr.length; i++){
    if (arr[i].indexOf(elem) == -1){
        newArr.push(arr[i]);
      }
    }
  return newArr;
}





console.log(justFiltersElem([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
// [ [ 2 ], [ 1, 6 ], [ 13, 26 ], [ 19, 9 ] ]

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
// []



console.log(justFiltersElem([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
// [ [ 10, 8, 3 ], [ 14, 6, 23 ], [ 3, 6 ] ]

console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
// [ [ 10, 8, 3 ], [ 14, 6, 23 ] ]



console.log(justFiltersElem([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2));
// [ [ 'trumpets' ], [ 'flutes', 4 ], [ 'saxophones' ] ]

console.log(filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2));
// [ [ 'flutes', 4 ] ]



console.log(justFiltersElem([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
// [ [ 2 ], [ 1, 6 ], [ 13, 26 ], [ 19, 9 ] ]

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
// []
