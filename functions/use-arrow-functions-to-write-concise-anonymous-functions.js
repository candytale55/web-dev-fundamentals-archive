
/*
In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.
*/

const myFunc = function() {
  const myVar = "value";
  return myVar;
}

/*
ES6 syntactic sugar makes possible to use arrow function syntax:
*/

const myFatArrowFunc1 = () => {
  const myVar = "value";
  return myVar;
}

/*
When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:
*/

const myFatArrowFunc2 = () => "value"; // This code will still return value by default.




const magic = () => {
  "use strict";
  return new Date();
};

console.log(magic());
// Mon Aug 24 2020 22:59:28 GMT+0200 (hora de verano de Europa central)