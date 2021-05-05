/*
Sometimes you won't (or don't need to) know the exact characters in your patterns. 

The wildcard character "." will match any one character. It is also called dot and period. 

You can use the wildcard character just like any other character in the regex. 

If you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.
*/

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
console.log(huRegex.test(humStr)); // true
console.log(huRegex.test(hugStr)); // true



//  unRegex should match the strings run, sun, fun, pun, nun, and bun. 

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; 
let result = unRegex.test(exampleStr);
console.log(result) // true


// More tests
console.log("Let us go on a run".match(unRegex)); // run
console.log("The sun is out today.".match(unRegex)); // sun
console.log("Coding is a lot of fun.".match(unRegex)); // fun
console.log("Seven days without a pun makes one weak.".match(unRegex)); // pun
console.log("One takes a vow to be a nun.".match(unRegex)); // nun
console.log("She got fired from the hot dog stand for putting her hair in a bun.".match(unRegex)); // bun
console.log("Catch me if you can.".match(unRegex)); // null


