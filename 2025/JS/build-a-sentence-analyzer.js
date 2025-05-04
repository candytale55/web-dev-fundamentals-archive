

// ---------------  Using Arrays  --------------

const checkVowels = ["a","e","i","o","u"];

function getVowelCount(sentence){
  let numVowels = 0;
  let sentenceArray = sentence.split("");

  for (const letter of sentenceArray){
      if (checkVowels.includes(letter.toLowerCase())){
        numVowels++;
    } //if
  } //for

  //console.log(sentenceArray);
  return numVowels;
}

console.log(getVowelCount("assassin")); // 3

// ---------------- Using just Strings (FCC choice)

function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

let vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`); // 7


// -------------- CONSONANTS -----------------------

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);


function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }
  return count;
}


console.log(getConsonantCount("Hello World!")); // 7
let consonantCount=getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);


// --------------- PUNCTUATION SIGNS ------------
// My version: eliminates whitespaces, compares to a string with letters and counts if the letter is not in there.

function getPunctuationCount(sentence){
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let count = 0;

  for (const char of sentence.toLowerCase().replace(/\s+/g,'')) {
    if (!letters.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(getPunctuationCount("Hello World!"));

let punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);


// ------------- With a list of punctuation signs - FCC version ------------

const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

function getPunctuationCount(sentence) {
  const punctuations = ".,!?;:-()[]{}\"'–";
  let count = 0;

  for (const char of sentence) {
    if (punctuations.includes(char)) {
      count++;
    }
  }
  return count;
}

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);


// ---------------- WORD COUNT ---------------------
// Si solo tiene espacios, los junta todos y compara con una cadena vacía (""), regresando 0.
// Si tiene palabras, el contador empieza en 1 y suma cada vez que encuentra un espacio en blanco

function getWordCount(sentence){
  let count = 0;

  if (sentence.trim()===""){
    return count;
  } else {
      count = 1;
      for (const char of sentence) {
      if (char.includes(" ")) {
        count++;
      }
    }
  }
  
  return count;
}
console.log(getWordCount("   ")); //0
console.log(getWordCount("Un osito pachoncito")); //3

let wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`);


