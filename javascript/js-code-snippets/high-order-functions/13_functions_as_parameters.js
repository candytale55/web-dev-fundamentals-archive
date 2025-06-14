/*
A higher-order function either accepts functions as parameters, returns a function, or both. 
We call the functions that - get passed in as parameters and invoked  = CALLBACK FUNCTIONS  
because they get called during the execution of the higher-order function.
*/


/* When we pass a function as an argument to another function, we don’t invoke it >> 
by typing the function name WITHOUT the parentheses (evaluates to the result of calling the function)
Invoking the function with the parenthesis would evaluate to the return value of that function call. */


const timeFuncRuntime = funcParameter => {
   let t1 = Date.now();
   funcParameter();
   let t2 = Date.now();
   return t2 - t1;
}  // It says how long the callback function takes to execute.

const addOneToOne = () => 1 + 1;
console.log(timeFuncRuntime(addOneToOne)); // 0

/*function timeFuncRuntime saves a starting time, invokes the callback function (funcParameter), 
records the time after the function was called, and returns the time the function took to run (t2-t1).
It can be used with any callback function. Note that we didn't invoke the function, just passed it (no parenthesis) 
*/



timeFuncRuntime(() => {
  for (let i = 10; i>0; i--){
    console.log(i);
  }
});  // Counts backwards from 10 to 1

/* We we invoked timeFuncRuntime() with an anonymous function that counts backwards. */


const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;



const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);
//console.log(time2p2); // 3



/* function checkConsistentOutput() has two parameters: a function and a value. 
It calls the argument function with the value two times. 
If the callback function produces the same result twice, it should return the result of the function call, 
if not it should return 'Inconsistent results' */

const checkConsistentOutput = (fun, val) => {
  let firstTime = fun(val);
  let secondTime = fun(val);
  if (firstTime === secondTime){
    return firstTime;
  } else {
    return 'This function returned inconsistent results';
  }
};

checkConsistentOutput(timeFuncRuntime, checkThatTwoPlusTwoEqualsFourAMillionTimes); 
