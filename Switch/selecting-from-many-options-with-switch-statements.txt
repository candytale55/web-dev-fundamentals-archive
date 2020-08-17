function caseInSwitch(val) {
  var answer = "";
  // case values are tested with strict equality (===)
  switch(val){
    case 1:
      answer =  "alpha";
      break;
    case 2:
      answer =  "beta";
      break;
    case 3:
      answer =  "gamma";
      break;    
    case 4:
      answer =  "delta";
      break;
   }
  return answer;
}

console.log(caseInSwitch(1));  //alpha
console.log(caseInSwitch(2));  //beta
console.log(caseInSwitch(3));  //gamma
console.log(caseInSwitch(4));  //delta
