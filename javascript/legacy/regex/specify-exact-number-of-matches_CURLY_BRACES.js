/*
You can specify the lower and upper number of patterns with quantity specifiers using curly brackets with just that one number between the curly brackets.

For example, to match only the word hah with the letter a 3 times, your regex would be /ha{3}h/.
*/

let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
console.log(multipleHA.test(A4)); // false
console.log(multipleHA.test(A3)); // true
console.log(multipleHA.test(A100)); // false


//  regex timRegex matches the word Timber only when it has four letter m's.

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
console.log(result); // true

// More tests
console.log(timRegex.test("Timmmber")); // false
console.log(timRegex.test("Timmmmmber")); // false
