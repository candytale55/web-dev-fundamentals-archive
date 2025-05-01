/*
A leap year is a year that is divisible by 4, except for years that are divisible by 100 and not divisible by 400. For example, 2000 is a leap year, but 1900 is not. Also, a leap year has an extra day in February, which is the 29th day of the month.
*/

let year = 2024;

function isLeapYear(num){
  // by 4, 100, 400 = Leap Year
  if (num % 4 == 0 && num % 100 == 0 && num % 400 == 0 ){
    return `${num} is a leap year.`;
  } else if (num % 4 == 0 && num % 100 != 0){
    // by 4 = Leap Year
    return `${num} is a leap year.`;
  } else if (num % 4 == 0 && num % 100 == 0){
    // by 4 and 100 = NOT Leap Year
    return `${num} is not a leap year.`;
  } else {
    return `${num} is not a leap year.`;
  }
}

let result = isLeapYear(year);
console.log(result);
