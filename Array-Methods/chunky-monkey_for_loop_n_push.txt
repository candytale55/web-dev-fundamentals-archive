function chunkArrayInGroups(arr, size) {
  let finalArray = [];
  let array = [];
  
  for (let i=0; i<arr.length; i++){
    if (i % size !== size -1) array.push(arr[i]);
    else {
      array.push(arr[i]);
      finalArray.push(array);
      array = [];
    }
  }
    if (array.length !==0) finalArray.push(array);
    
    return finalArray;
  }
    


console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)); 
// [[0, 1, 2], [3, 4, 5]].

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)); 
// [[0, 1], [2, 3], [4, 5]].

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); 
// [[0, 1, 2, 3], [4, 5]].

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)); 
// [[0, 1, 2], [3, 4, 5], [6]].

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)); 
//[[0, 1, 2, 3], [4, 5, 6, 7], [8]].

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); 
//[[0, 1], [2, 3], [4, 5], [6, 7], [8]].
