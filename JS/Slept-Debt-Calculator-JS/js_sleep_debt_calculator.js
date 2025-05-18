/* The program will determine the actual and ideal hours of sleep for each night of the last week and it will calculate, in hours, how far you are from your weekly sleep goal. */


/** THE FOLLOWING MUST BE CORRECTED - I DID IT ACCORDING TO THE EXAMPLE, BUT I DON'T THINK ITS RIGHT **/
// Gets the number of hours you should have slept depending on the day of the week.
const getSleepHours = (day) =>{
  day = day.toLowerCase();
  if (day === 'monday'){
    return 8;
  } else if (day === 'tuesday'){
    return 16;
  } else if (day === 'wednesday'){
    return 24;
  } else if (day === 'thursday'){
    return 32;
  } else if (day === 'friday'){
    return 40;
  } else if (day === 'saturday'){
    return 48;
  } else {
    return 56;
  }
} // end getSleepHours

/*
console.log(getSleepHours('Monday')); //testing
console.log(getSleepHours('Friday')); //testing
console.log(getSleepHours('Tuesday')); //testing
*/


//Get the total sleep hours that you actually slept
const getActualSleepHours = () => {
   return getSleepHours('Monday') +
   getSleepHours('Tuesday') +
   getSleepHours('Wednesday') +
   getSleepHours('Thursday') +
   getSleepHours('Friday') +
   getSleepHours('Saturday') +
   getSleepHours('Sunday');
}
//console.log(getActualSleepHours("Tuesday")); // testing

/***
PENDING: 
getActualSleepHours() could be implemented without calling getSleepHours(). Use literal numbers and the + operator to rewrite getActualSleepHours(). It should still return the total actual hours slept in the week.
***/


//Get the ideal sleep hours that you prefer


const getIdealSleepHours = (val) => {
  let idealHours = val; 
  return idealHours *= 7; // 7 days x week.
}

//console.log(getIdealSleepHours()); // Testing



//Calculate the sleep debt, if any.

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(6);
  
  if (actualSleepHours === idealSleepHours) {
    console.log("You are sleeping exactly the right amount of hours.");
  } else if (actualSleepHours < idealSleepHours){
    console.log("You should get some rest, you slept " + (idealSleepHours - actualSleepHours) +" less hours than you should.")
  } else {
    console.log("You overslept " + (actualSleepHours - idealSleepHours) + " hour(s).");
  }
}

calculateSleepDebt();
