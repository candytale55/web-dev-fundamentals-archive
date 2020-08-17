function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff"
      break;      
   }
  // The default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain
  return answer;
}

console.log(switchOfStuff("a")); // apple
console.log(switchOfStuff("b")); // bird
console.log(switchOfStuff("c")); // cat
console.log(switchOfStuff(1));   // stuff
