function reverseString(str) {
  let newString = [];
  for (let i = str.length-1; i >=0; i--){
    newString.push(str[i]);
  }
  return newString.join("");
}

console.log(reverseString("hello"));
console.log(reverseString("Anita lava la tina"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));
