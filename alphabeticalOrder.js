/*
The sort method sorts the elements of an array according to a callback function.

JavaScript's default sorting method is by string Unicode point value, which may return unexpected results. 
For this reason, it is better encouraged to provide a callback function to specify how to sort the array items. 

When the callback function (normally called compareFunction)is used, 
the array elements are sorted according to the return value of the compareFunction.

If compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come before b. 
If compareFunction(a,b) returns a value greater than 0 for two elements a and b, then b will come before a. 
If compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged.
*/


function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
//console.log(ascendingOrder([1, 5, 2, 3, 4]));
// [1, 2, 3, 4, 5].



function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}
//console.log(reverseAlpha(['l', 'h', 'z', 'b', 's']));
// ['z', 's', 'l', 'h', 'b'].


function orderStuff(arr){
  return arr.sort(
    function (a,b) {
      return a > b ? 0 : a < b ? 1 : -1;
    }
  );
}
//console.log(orderStuff([7, '/', ')', 'a', 0, '?']));
// [ 0, '/', ')', 'a', '?', 7 ]


/*
Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.
*/






function alphabeticalOrder(arr) {
  return arr.sort(
    function (a,b) {
      return a === b ? 0: a > b ? 1 : -1;
    }
  );
}

// TESTS
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
console.log(alphabeticalOrder(["x", "h", "a", "m", "n", "m"]));
console.log(alphabeticalOrder(["a", "a", "a", "a", "x", "t"]));
