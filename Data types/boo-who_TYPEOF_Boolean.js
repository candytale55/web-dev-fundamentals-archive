// Check if a value is classified as a boolean primitive. Return true or false.


function booWhoLong(bool) {
  if (typeof bool === "boolean"){
    return true;
  } else {
    return false;
  }
}


function booWho(bool) {
  return (typeof bool === "boolean") ? true: false;
}


// TESTS
console.log(booWho(null)); // false
console.log(booWho(true)); // true
console.log(booWho(false)); // true
console.log(booWho([1, 2, 3])); // false
console.log(booWho([].slice)); // false
console.log(booWho("true")); // false
console.log(booWho({ "a": 1 })); // false
console.log(booWho(NaN)); // false




