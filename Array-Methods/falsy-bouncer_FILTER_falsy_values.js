/*
Remove all falsy values from an array.  Hint: Try converting each value to a Boolean

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/


function bouncer(arr) {
  let newArr = arr.filter( word => word);
  return newArr;
}


// TESTS
console.log(bouncer([7, "ate", "", false, 9])); // [ 7, 'ate', 9 ]
console.log(bouncer([false, null, 0, NaN, undefined, ""])); // []







// OTHE FORM USING Boolean type
function bouncerBool(arr) {
  let newArr = arr.filter(Boolean);
  return newArr;
}

console.log(bouncerBool([null, NaN, 1, 2, undefined])); // [ 1, 2 ]



// Long form with for loop:
function bouncerFor(arr) {
  let newArr = [];
  for (let i=0; i<arr.length; i++){
    if (arr[i]){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(bouncerFor(["a", "b", "c"])); // ["a", "b", "c"]
console.log(bouncerFor([false, null, 0, NaN, undefined, "", ";P"])); // [ ';P' ]