function chainToSwitch(val) {
  var answer = "";

  /*  Original if/else block
  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }
  */

  switch (val){
    case "bob":
      answer = "Marley";
      break;
    case 42:  
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1"; 
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7: 
      answer = "Ate Nine";
      break;
  }   
  return answer;
}

console.log(chainToSwitch(7)); // Ate Nine
console.log(chainToSwitch("bob")); // Marley
console.log(chainToSwitch(42)); // The Answer
console.log(chainToSwitch(1));  // There is no #1
console.log(chainToSwitch(99)); // Missed me by this much!

console.log(chainToSwitch("John")); // ""
console.log(chainToSwitch(156));    // ""
