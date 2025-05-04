

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
// Eliminates whitespaces and then compares with a strings of all the letters

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

