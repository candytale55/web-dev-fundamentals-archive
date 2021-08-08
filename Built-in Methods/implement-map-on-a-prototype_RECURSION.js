/*
Recursive Solution

Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map() without using the built-in map method. The Array instance can be accessed in the myMap method using this.

Check: https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/
*/


// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback, arr = [], i = 0) {
  return i < this.length
    ? this.myMap(callback, arr.concat(callback(this[i])), i + 1)
    : arr;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});

console.log(new_s); // [ 46, 130, 196, 10 ]