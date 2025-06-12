/* A dog’s age can be calculated in “dog years” to account 
for their growth compared to a human of the same age. */

/* To convert your age from “human years” to “dog years”:
1. The first two years of a dog’s life count as 10.5 dog years each.
2. Each year following equates to 4 dog years.
*/


let myAge= 18;
console.log(`Human age: ${myAge}`);
let earlyYears= 2;

let laterYears = myAge - earlyYears;
//console.log(laterYears); 
 // The first two years are accounted for in variable earlyYears

/* The first two years of a dog’s life count as 10.5 dog years each. 
Multiply the value saved to earlyYears by 10.5 and reassign it to earlyYears.*/
earlyYears *= 10.5;
//console.log(earlyYears); // prints 21

//  Each year after the first two years equates to 4 dog years.
laterYears *= 4;
//console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears;
console.log(`Your age in dog years is: ${myAgeInDogYears}`);

const myName = 'Emma Fitipalderson'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
