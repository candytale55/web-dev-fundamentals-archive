/*
Copy each element of the first array into the second array, in order. Begin inserting elements at index n of the second array. Return the resulting array. The input arrays should remain the same after the function runs.
 */


function frankenSplice(arr1, arr2, n) {
  let arr3 = arr2.slice();
  arr3.splice(n, 0, ...arr1)
  return arr3;
}


// TESTS:
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
// [ 'head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes' ]
console.log(frankenSplice([1, 2], ["a", "b"], 1));
// [ 'a', 1, 2, 'b' ]
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
// [ 4, 1, 2, 3, 5, 6 ]



/*
Since the splice() function will mutate (alter) arrays and can be used to add new elements we will use it to add the contents of arr1 into localArr. n is the starting position where our content will be inserted. We won’t be deleting any elements so the next argument is 0. Then we add the entire contents of arr1 using spread syntax ....
 */