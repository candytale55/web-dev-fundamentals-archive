

 function quickCheck(arr, elem) {
  if (arr.indexOf(elem) != -1) {
    return true;
  } else {
    return false;
  }
  
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); // returns false.

console.log(quickCheck(['squash', 'onions', 'shallots'], 'squash')); // returns true.


/*
quickCheck takes an array and an element as arguments. It returns true if the passed element exists on the array, and false if it does not.
*/



/*
Since arrays can be changed, or mutated, at any time, there's no guarantee about where a particular piece of data will be on a given array, or if that element even still exists. 

JavaScript provides us with another built-in method, indexOf(), that allows us to quickly and easily check for the presence of an element on an array. indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.
*/

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
console.log(fruits.indexOf('dates')); // returns -1
console.log(fruits.indexOf('oranges')); // returns 2
console.log(fruits.indexOf('pears')); // returns 1, the first index at which the element exists
