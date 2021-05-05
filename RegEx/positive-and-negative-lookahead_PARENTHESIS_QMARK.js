/*
Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.

There are two kinds of lookaheads: positive lookahead and negative lookahead.

A positive lookahead will look to make sure the element in the search pattern IS there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.
*/

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
console.log(quit.match(quRegex)); // q
console.log(noquit.match(qRegex));  // q


/*
A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:
*/

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
console.log(checkPass.test(password)); // true


/*
Regex pwRegex matches passwords that are greater than 5 characters long, and have two consecutive digits.
*/

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\w*\d{2})/; 
let result = pwRegex.test(sampleWord);
console.log(result); // false


// MORE TESTS
console.log(pwRegex.test("astronaut98")); //true
console.log(pwRegex.test("bana12")); // true
console.log(pwRegex.test("abc123")); // true
console.log(pwRegex.test("12345")); // false 
console.log(pwRegex.test("8pass99")); // true
console.log(pwRegex.test("1a2bcde"));  // false
console.log(pwRegex.test("astr1on11aut")); // true
