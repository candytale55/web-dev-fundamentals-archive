// It is possible to combine a range of letters and numbers in a single character set.

// For numbers /[0-5]/ matches any number between 0 and 5, including the 0 and 5. 

// Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6.



let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; 
let result = quoteSample.match(myRegex); 

console.log(result);

