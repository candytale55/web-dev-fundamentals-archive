/*
A side effect of the sort method is that it changes the order of the elements in the original array. In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted (remember that slice and concat return a new array), then run the sort method.

Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.
*/

var globalArray= [5, 6, 3, 2, 9];
function nonMutatingSortFirstTry(arr) {
  let newArray = arr.sort(
    function(a,b){return a-b}
  );
  return newArray;
  }



// USING CONCAT instead of creating a new array
function nonMutatingSort(arr) {
  return [].concat(arr).sort(
    function(a,b){return a-b}
  );
  }


console.log(nonMutatingSort(globalArray));

// More tests: 
console.log(nonMutatingSort([1, 30, 4, 21, 100000]));
console.log(nonMutatingSort([140000, 104, 99]));


/*
By default, the sort() method sorts the values as strings in alphabetical and ascending order.  This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1". So you have to use a _compareFunction_ that should return a negative, zero, or positive value, depending on the arguments, like function(a, b){return a-b} 

When the sort() method compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
 */
