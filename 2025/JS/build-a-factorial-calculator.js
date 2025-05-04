/*A factorial is the product of an integer and all the integers below it. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.*/

let num = 7;

function factorialCalculator(num) {
  let result =1;
  for (let i=num; i>1; i--){
    result *= i;
    //console.log(i,"*",i-1,"=",result);
  }
  return result;
}

 
let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);
