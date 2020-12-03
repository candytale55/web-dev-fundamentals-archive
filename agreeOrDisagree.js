

const agreeOrDisagree = (first, second) => {
  if (first === second){
    return "You agree!";
  }
  else {
    return "You disagree!";
  }
};




console.log(agreeOrDisagree("yep", "yep")) 
// Should print 'You agree!'
console.log(agreeOrDisagree("yep", "yepp")) 
// Should print 'You disagree!'
