


function getIndexToIns(arr, num) {
  arr.sort(
    function(a,b) {
      return a-b;
    });

    let i = 0;
    while (num > arr[i]){
      i++;
    }
    return i;
}


console.log(getIndexToIns([40, 60], 50)); // 1
console.log(getIndexToIns([20,3,5], 19)); // 2
console.log(getIndexToIns([10, 20, 30, 40, 50], 35))  // 3
console.log(getIndexToIns([10.2, 10.3, 9.99, 10.1, 10.1, 10.15], 10)); // 1
console.log(getIndexToIns([2, 5, 10], 15)); // 3
console.log(getIndexToIns([], 1)); //0
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); //2