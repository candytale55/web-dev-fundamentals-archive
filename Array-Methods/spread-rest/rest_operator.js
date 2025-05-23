//  REST OPERATOR (...)

// The rest operator looks the same as the spread operator, buy what it does is condense multiple elements (variables, arguments) in an array element. NOTE: Because it is an array, array methods like map(), filter() and reduce() can be used with it. 

//1. Multiplying function with REST operator.

function multiplyMyArray(multiplier, ...multipliedNumbers){
  return multipliedNumbers.map(function(element){
    return multiplier * element;
  })};

var myArray = multiplyMyArray(2, 1, 2, 3, 4, 5, 6);
console.log(myArray); // The first value of the parameters "2" is the multiplier, and the rest of the numbers are the multipliedNumbers. This prints: [ 2, 4, 6, 8, 10, 12 ]



// 2. How many arguments has this function with REST operator

function howManyArgs(...args){
  return "You have passed " + args.length + " arguments in this function";
}
console.log(howManyArgs("one","two","three")); //You have passed 3 arguments in this function
console.log(howManyArgs(0,1,2,3,4,5,6,7,8,9));//You have passed 10 arguments in this function


//3.  SUM function that can take any number of arguments.

//3.  SUM function that can take any number of arguments.

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3));  //  6
console.log(sum(10,20,30)); // 60
console.log(sum(0,1,2));    //  3
console.log(sum(1,2,3,4));  // 10
console.log(sum(5));        //  5
console.log(sum());         //  0
console.log(sum(1,2,3,4,5,6,7,8,9)); // 45
