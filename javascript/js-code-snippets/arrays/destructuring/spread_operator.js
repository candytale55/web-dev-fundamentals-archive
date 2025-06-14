//   SPREAD OPERATOR  (...)

// The spread operator "spreads" (expands) arrays and other expresions where multiple variables, elements or arguments are expected = the three dots in "...nameOfArray" is like saying all that is inside of array nameOfArray must "spread out" onto functions, other arrays, etc.

//1. Add elements from an array into a new array.
var stuffToAdd = ["newItem1", "newItem2"];

var allStuffArray1 = ["oldItem1", "oldItem2", ...stuffToAdd];
console.log(allStuffArray1); 
// [ 'oldItem1', 'oldItem2', 'newItem1', 'newItem2' ]

var allStuffArray2 = [...stuffToAdd, "oldItem1", "oldItem2"]; 
console.log(allStuffArray2)
// [ 'newItem1', 'newItem2', 'oldItem1', 'oldItem2' ]


// 2. Lets you pass elements of an array to a function. 

const sumMyValues = (x,y,z) => {
  console.log(x+y+z);
}
sumMyValues(1,3,6); // prints 10

var myValues = [1,3,6];
sumMyValues(...myValues); // also prints 10.

var moreValues= [1,3,6,12];
sumMyValues(...moreValues); //also prints 10 - because the function sumMyValues only has three parameters, it is ignoring the 12 after moreValues first three elements.

// 3. Copy arrays  (like arr.slice)
var arrayToCopy = ["copy my", "copy you"];
var copiedArray = [...arrayToCopy];
console.log(arrayToCopy); //[ 'copy my', 'copy you' ]
console.log(copiedArray); //[ 'copy my', 'copy you' ]

copiedArray.push("I am new");
console.log(arrayToCopy); //[ 'copy my', 'copy you' ]
console.log(copiedArray); //[ 'copy my', 'copy you', 'I am new' ]


// 4. Concatenate arrays
var arrayFruits = ["lemon", "orange", "mango"];
var arrayFurniture = ["table", "chair"];

// HTD with concat: 
console.log(arrayFruits.concat(arrayFurniture)); //[ 'lemon', 'orange', 'mango', 'table', 'chair' ]

// HTD with spread operator - you can add other elements besides the arrays
var arrayMeats = ["ham", "turkey", "chicken"];
arrayFurniture = [...arrayMeats, "I am not part of an array" ,...arrayFurniture];
console.log(arrayFurniture); // [ 'ham',   'turkey',   'chicken', 'I am not part of an array', 'table',  'chair' ]




