/*
If we consider that a person’s number of imaginary friends are always 
33% of their total friends, function numImaginaryFriends(), 
that takes in the total number of friends a person has, 
returns the number of imaginary friends they have in integers (rounded).
*/



const numImaginaryFriends = (totalFriends) => {
  let numImaginaryFriends = Math.round(totalFriends * .33);
  return numImaginaryFriends;
}


// TEST
console.log(numImaginaryFriends(18));  // 6
console.log(numImaginaryFriends(16));  // 5
console.log(numImaginaryFriends(3));  // 1
console.log(numImaginaryFriends(4));  // 1

