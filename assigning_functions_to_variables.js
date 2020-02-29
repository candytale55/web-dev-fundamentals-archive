// ASIGNING FUNCTIONS TO VARIABLES


const anoyingLongFunctionChecksTwoPlusTwoEqualsFourAThousandTimes = () => {
  for(let i = 1; i <= 1000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Oh No! something is very wrong');
    } else {
      console.log('Checked! 2 + 2 are still 4')
    }
  }
}   

/* "anoyingLongFunctionChecksTwoPlusTwoEqualsFourAThousandTimes" is an annoyingly long function name that will hurt the readability of the code in which it’s used. Let’s pretend we need to keep the name and that the function does important work. It needs to be called repeatedly! */

// We can rename this function without sacrificing the source code by re-assign the function to a variable with a short name

let is2p2still4 = anoyingLongFunctionChecksTwoPlusTwoEqualsFourAThousandTimes; // Notice we asign it with NO PARENTHESIS at the end. We want to assign the value of the function itself, not the value the function returns when invoked. 

// is2p2still4 holds a reference to the original function (they would point to the same place if it were possible to check their address in memory.
//is2p2still4() can be invoked with parentheses AS IF that was the name we originally gave our function

is2p2still4(); // It will print 'Checked! 2 + 2 are still 4' a thousand times.

console.log(is2p2still4.name); // prints anoyingLongFunctionChecksTwoPlusTwoEqualsFourAThousandTimes


