// Check "Get Help" >> "watch a video" here: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion


/*
Recursion is the concept that a function can be expressed in terms of itself. 
MUST have a base case when they return without calling the function again, otherwise they can never finish executing. */


var arr = [3,4,5,6,7];

function sumNoRec(arr,n){
  var sum = 0;
  for(var i = 0; i<n; i++) {
    sum += arr[i];
    }
  return sum;
}

console.log("Suma sin recursión: " + sumNoRec(arr, arr.length));

/*
If you do accidentally run code with an infinite loop you can press “Ctrl-C” to kill your script. (Or, if you sometimes use CodePen, you have to add “?turn_off_js=true” to the end of the URL.)
*/







var arr = [3,4,5,6,7];

function sum(arr, n) {
  if(n <= 0) {  // Base case
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

console.log("Suma con recursión: " + sum(arr, arr.length));


