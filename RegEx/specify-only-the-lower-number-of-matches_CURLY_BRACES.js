/*
You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want to specify the lower number of patterns with no upper limit.

To only specify the lower number of patterns, keep the first number followed by a comma.

For example, to match only the string hah with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.
*/

let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
console.log(multipleA.test(A4)); //true
console.log(multipleA.test(A2)); // false
console.log(multipleA.test(A100)); // true



// Regex haRegex matches the word Hazzah only when it has four or more letter z's.


let haStr = "Hazzzzah";
let haRegex = /haz{4,}ah/i; 
let result = haRegex.test(haStr);

console.log(result); // true

// More tests:
console.log(haRegex.test("Hazzah")); // false
console.log(haRegex.test("Hazzzzzzah")); // true