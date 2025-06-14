/*
You learned how to match literal patterns (/literal/) and wildcard character (/./). Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes.

You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u.
*/


let bgRegex = /b[aiu]g/;
console.log("big".match(bgRegex)); // big
console.log("bag".match(bgRegex)); // bab
console.log("bug".match(bgRegex)); // bug
console.log("bog".match(bgRegex)); // null




// Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
let result = quoteSample.match(vowelRegex); 
console.log(result)
/*
[ 'e',
  'a',
  'e',
  'o',
  'u',
  'i',
  'e',
  'a',
  'o',
  'e',
  'o',
  'e',
  'I',
  'a',
  'e',
  'o',
  'o',
  'e',
  'i',
  'o',
  'e',
  'o',
  'i',
  'e',
  'i' ]

*/