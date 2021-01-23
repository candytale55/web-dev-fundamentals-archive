/*
smallestPowerOfTwo(), takes in an array and should return an array with the power of two which is
greater than the value of each number element in the array provided as argument.

The function creates a new array, loop through the argument array and
push in the smallest power of two which is greater than the current element.

The 'outer' for loop - loops through each element in the array.
The 'inner' while loop - searches for smallest power of 2 greater than the given number
*/

const smallestPowerOfTwo = arr => {
      let results = [];
      //'outer' for loop
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];
            // 'inner' while loop
            let j = 1;
            while ( j < number) {
                  j = j * 2;
            } 
            results.push(j); 
      }
      return results
}

// TESTS:
const numbers = [5, 3, 9, 30];
console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ].

