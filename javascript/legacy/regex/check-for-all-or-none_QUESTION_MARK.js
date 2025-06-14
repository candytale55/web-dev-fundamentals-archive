/*
Sometimes the patterns you want to search for may have parts of it that may or may not exist. However, it may be important to check for them nonetheless.

You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.

For example, there are slight differences in American and British English and you can use the question mark to match both spellings.
*/

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
console.log(rainbowRegex.test(american)); // true
console.log(rainbowRegex.test(british));  // true

let favWord = "favorite";
let favRegex = /favou?rite/; 
let result = favRegex.test(favWord);
console.log(result); // true

console.log(favRegex.test("favourite")); // true
