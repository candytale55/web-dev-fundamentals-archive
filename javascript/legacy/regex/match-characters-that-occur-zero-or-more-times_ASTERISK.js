// There's also an option that matches characters that occur zero or more times: the asterisk or star: *.

let goRegex = /go*/;
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
console.log(soccerWord.match(goRegex)); //goooooooo
console.log(gPhrase.match(goRegex)); // g
console.log(oPhrase.match(goRegex)); // null


/*
chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes. Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero or more lowercase a characters in chewieQuote. Your regex does not need flags or character classes, and it should not match any of the other quotes.
 */

let chewieRegex = /Aa*/; 

let result = chewieQuote.match(chewieRegex);

console.log(result) // Aaaaaaaaaaaaaaaa