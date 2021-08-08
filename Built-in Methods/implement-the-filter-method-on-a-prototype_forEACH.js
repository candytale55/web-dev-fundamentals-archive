/*
Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter() without using the built-in filter method. The Array instance can be accessed in the myFilter method using this.
*/




// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  let newArray = [];
  this.forEach(function(x){
    if (callback(x) == true)
    newArray.push(x);
  })
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

console.log(new_s)   // [ 23, 65, 5 ]