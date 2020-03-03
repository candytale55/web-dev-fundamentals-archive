/* NOTE: most modern languages, including JS start counting at 0 instead of 1 (zero-based indexing) */


// Get FIRST character in a string:

var firstName = "CandyTale";
console.log(firstName[0]) // C
var firstLetterOfFirstName = "";
firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName); // C

var lastName = "Lovelace";
console.log(lastName[0]); //L
var firstLetterOfLastName = "";
firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName); // L


// Find the Nth Character in a String
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

var lastName = "CandyTale";
var thirdLetterOfLastName = lastName[2];
var secondLetterOfFirstName = lastName[1];

console.log("second letter is : " + secondLetterOfFirstName); // a
console.log("third letter is: " + thirdLetterOfLastName); // n 



// Find the LAST Character in a String

var firstName = "Aretha";
var lastLetterOfFirstName = firstName[firstName.length - 1];
console.log(lastLetterOfFirstName);         // a
console.log(firstName[firstName.length-1]); //a

var lastName = "Franklin";
console.log(lastName[lastName.length-1]); //n
var lastLetterOfLastName = lastName[lastName.length-1]; 
console.log(lastLetterOfLastName); // n




// Find the Nth-TO-LAST Character in a String

var firstName = "Alice";
console.log(firstName[firstName.length-3]); // i
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];
console.log(thirdToLastLetterOfFirstName); // i

// If you ask for a character that does not exist:
console.log(firstName[firstName.length-7])// undefined




// Change one value in a string - CAN'T BE DONE WITH INDEXES - String values cannot be altered individually once created. 

var myStr = "Jello World";
//myStr[0] = "H"; // TypeError: Cannot assign to read only property '0' of string 'Jello World'

// To change strings re-assign the complete new string
myStr= "Hello World"; 
console.log(myStr); // Hello World


