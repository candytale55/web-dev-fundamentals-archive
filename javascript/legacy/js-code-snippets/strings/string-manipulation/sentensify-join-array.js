/*
The join method is used to join the elements of an array together to create a string. 
It takes an argument for the delimiter that is used to separate the array elements in the string.
*/

var arr = ["Hello", "World"];
console.log(arr.join(" ")); // Hello World


/*
The _sentensify_ function takes an argument _str_. 
It uses the join method to make a sentence from the words in the string str. 
*/

const sentensify = (str, div) => {
  return str.split(div).join(" "); 
}




// Using Regular Expressions

const sentensify = (str) => {
  let reg = RegExp(/\W/);
  return str.split(reg).join(" "); 
}

// More concise:

const sentensify = (str) => {
  return str.split(RegExp(/\W/)).join(" "); 
}


// Using Regular Expressions

const sentensify = (str) => {
  return str.split(/\W/).join(" ");
}



// TESTS
console.log(sentensify("I-like-Star-Wars", "-")); // I like Star Wars
console.log(sentensify("May-the-force-be-with-you", "-")); // May the force be with you
console.log(sentensify("The.force.is.strong.with.this.one", ".")); // The force is strong with this one
console.log(sentensify("There,has,been,an,awakening", ",")); // There has been an awakening
