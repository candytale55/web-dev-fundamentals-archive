/*
Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses ().  If you want to find either Penguin or Pumpkin in a string, you can use the following Regular Expression: 

/P(engu|umpk)in/g 

Then check whether the desired string groups are in the test string by using the test() method.
*/

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
console.log(testRegex.test(testStr));  // true


/*
myRegex checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.
*/



let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin).*Roosevelt/i; 
let result = myRegex.test(myString);

console.log(myRegex.test(myString)); // true
console.log(myRegex.test("EleanorRoosevelt")); // true
console.log(myRegex.test("Franklin Delano Roosevelt")); // true
console.log(myRegex.test("Ara Roosevelt")); // false
