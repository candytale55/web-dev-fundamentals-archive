function reverseString(str) {
  let splittedString = str.split("");
  let newString = splittedString.reverse();
  return newString.join("");
}

console.log(reverseString("hello"));
console.log(reverseString("Anita lava la tina"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));
