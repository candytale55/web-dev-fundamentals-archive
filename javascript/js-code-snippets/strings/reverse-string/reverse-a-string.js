function reverseString(str) {
  str.split("");
  let newString = "";
  for (let i = 0; i < str.length; i++){
    newString = str.charAt(i) + newString;
  }
  
  return newString;
}

console.log(reverseString("hello"));
console.log(reverseString("Anita lava la tina"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));
