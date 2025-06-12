/*
Function with 3 string parameters that returns the a silly sentence
with the blanks filled in by the arguments passed into the function.
*/


const sillySentence = (adjective, verb, noun) => {
  return "I am so " + adjective + " because I " + verb + " coding! Time to write some more awesome " + noun + " !";
}


// Testing
console.log(sillySentence('excited', 'love', 'functions'));

