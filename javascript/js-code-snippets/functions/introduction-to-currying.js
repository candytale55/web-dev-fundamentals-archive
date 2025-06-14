/*
The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.

In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.

function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

const curried = x => y => x + y

curried(1)(2)
curried(1)(2) would return 3.

This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. Here's an example using the curried function in the example above:

var funcForY = curried(1);
console.log(funcForY(2)); // 3
Similarly, partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments. 

For reference: 
https://www.jondjones.com/frontend/javascript/functional-programming/javascript-currying-what-is-the-point-of-currying-javascript-functions/
https://www.dottedsquirrel.com/currying-javascript/
*/





function add(x) {
  return function (y) {
    return function (z) {
      return x + y +z;
    }
  }
}


console.log(add(10)(20)(30));

