/*
tipCalculator() takes two parameters, a string representing 
the quality of the service received and a number representing
the total cost. Depending on a set quality service ranges, 
returns the tip that is deserved, as a number.

‘bad’ should return a 5% tip
‘ok’ should return a 15% tip
‘good’ should return a 20% tip
‘excellent’ should return a 30% tip
all other inputs should default to 18%
*/




const tipCalculator = (quality, total) =>{
  switch(quality){
    case "bad":
      return total * .05;
      break;
    case "ok":
      return total * .15;
      break;
    case "good":
      return total * .20;
      break;
    case "excellent":
      return total * .30;
      break;
    default: 
      return total * .18;
  }
}




// TESTING:
console.log(tipCalculator('excellent', 100)); // 30
console.log(tipCalculator('good', 100)); // 20
console.log(tipCalculator('ok', 100));   // 15
console.log(tipCalculator('bad', 100));  //  5
console.log(tipCalculator("It is what it is (Default)",100)); // 18
