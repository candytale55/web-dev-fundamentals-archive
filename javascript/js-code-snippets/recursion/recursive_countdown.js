
let finalCountdown = [];

function countdown(myArray, n){
  if (n <=0){
  finalCountdown = myArray;
  //console.log(myArray); //[10,9,8,7,6,5,4,3,2,1]
  return finalCountdown;
  } else {
   myArray.push(n);
   countdown(myArray, n-1);
  }
}

countdown(finalCountdown,10);
console.log(finalCountdown); [10,9,8,7,6,5,4,3,2,1]
//console.log(countdown(finalCountdown,10)); //returns undefined  
