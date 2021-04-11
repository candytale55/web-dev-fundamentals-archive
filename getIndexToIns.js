/*
function _getIndexToIns_ takes two parameters, an array _arr_ and an integer _num_ and 
must return the lowest index at which _num_ should be inserted into array _arr_ once it has been sorted. 
The returned value should be a number (because it is an index).
*/


// Using SORT and comparing num to sorted array.

function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
    });
    //console.log(arr, num); // For Testing
   for (let a = 0; a < arr.length; a++){
     if (arr[a] >= num) return a;
     }
    return arr.length;
} // function






// Counting numbers in the array that are less than num

function getIndexToIns(arr, num) {
  let count = 0;
  for (let x=0; x<arr.length; x++){
    if (arr[x] < num) {
      count++;
    }
  }
  return count;
}




// Using filter

function getIndexToIns(arr, num) {
  return  arr.filter(val => num > val).length;
}






// Sorting the array and looping until num isn’t bigger than i. Return the last i of element checked

function getIndexToIns(arr, num) {
  arr.sort(
    function(a,b) {
      return a-b;
    });

    let i = 0;
    while (num > arr[i]){
      i++;
    }
    return i;
}




// Pushing num into the array, sorting and then returning the index of num.

function getIndexToIns(arr, num) {
  arr.push(num)
  arr.sort(
    function(a,b) {
      return a-b;
    }
  );
  return arr.indexOf(num);
}






// TESTS:
console.log(getIndexToIns([40, 60], 50)); // 1
console.log(getIndexToIns([20,3,5], 19)); // 2
console.log(getIndexToIns([10, 20, 30, 40, 50], 35))  // 3
console.log(getIndexToIns([10.2, 10.3, 9.99, 10.1, 10.1, 10.15], 10)); // 1
console.log(getIndexToIns([2, 5, 10], 15)); // 3
console.log(getIndexToIns([], 1)); //0
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); //2


// CHECK OTHER SOLUTIONS: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-where-do-i-belong/16094
// Exercise : https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong
