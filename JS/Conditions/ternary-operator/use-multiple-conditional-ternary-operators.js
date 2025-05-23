// Use Multiple Conditional (Ternary) Operators

// Without ternary: 
function checkSignwithIfs(num) {
  if (num>0){
    return 'positive';
  } else if (num==0){
    return "zero";
  } else {
    return "negative";
  }
}


console.log("checkSignwithIfs(10)= "+checkSignwithIfs(-10)); //negative
console.log("checkSignwithIfs(10)= "+checkSignwithIfs(0)); // zero
console.log("checkSignwithIfs(10)= "+checkSignwithIfs(10)); // positive


/* It is considered best practice to format multiple conditional operators such that each condition is on a separate line. */


function checkSign(num) {
  return (num>0) ? 'positive' 
  : (num==0) ? 'zero' 
  : 'negative'
}
console.log("checkSign(-10)= "+checkSign(-10)); // negative
console.log("checkSign(0)= "+checkSign(0)); // zero
console.log("checkSign(10)= "+checkSign(10)); // positive
