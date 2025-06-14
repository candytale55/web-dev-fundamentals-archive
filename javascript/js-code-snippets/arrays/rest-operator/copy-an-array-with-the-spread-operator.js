
// spread operator allows us to easily copy all of an array's elements, in order, with a simple and highly readable syntax.

// The function returns a new array made up of num copies of arr
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr = [...newArr , [...arr]]
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
// newArr = [...newArr , ...arr]
// [ true, false, true, true, false, true ]


// newArr = [...newArr , [...arr]]
// [ [ true, false, true ], [ true, false, true ] ]
