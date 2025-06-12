function reverseString(str) {
  let newString = str.split("").reverse().join("");
  return newString;
}

console.log(reverseString("hello"));
console.log(reverseString("Anita lava la tina"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));
