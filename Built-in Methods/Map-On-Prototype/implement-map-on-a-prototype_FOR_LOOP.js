/*
The map method returns an array of the same length as the one it was called on. It also doesn't alter the original array, as long as its callback function doesn't.

map is a pure function, and its output depends solely on its inputs. Plus, it takes another function as its argument.

Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You should not use the built-in map method. The Array instance can be accessed in the myMap method using this.

It is recommended you use a for loop or Array.prototype.forEach()
*/




// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];

  for (let i=0; i<this.length; i++){
    newArray.push(callback(this[i]));
  }

  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});

console.log(new_s); // [ 46, 130, 196, 10 ]
