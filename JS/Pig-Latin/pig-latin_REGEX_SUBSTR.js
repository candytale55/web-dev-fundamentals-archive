
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
- If a word begins with a vowel, just add way at the end.
*/


function translatePigLatin(str) {
  let vowels = new RegExp(/^[aeiou]/i);
  let consonants = new RegExp(/^[^aeiou]+/);
  if (vowels.test(str) === true){
    str +="way" }
  else {
    str = str.substr(str.match(consonants)[0].length) + str.match(consonants) + "ay"
  }
  return str;
  }


//TESTS
console.log(translatePigLatin("consonant")); //
console.log(translatePigLatin("california")); 
// aliforniacay.
console.log(translatePigLatin("paragraphs")); 
// aragraphspay.

console.log(translatePigLatin("glove")); 
// oveglay.

console.log(translatePigLatin("algorithm")); 
// algorithmway.

console.log(translatePigLatin("eight")); 
// eightway.

console.log(translatePigLatin("schwartz")); 
// artzschway.

console.log(translatePigLatin("rhythm")); 
// rhythmay.
