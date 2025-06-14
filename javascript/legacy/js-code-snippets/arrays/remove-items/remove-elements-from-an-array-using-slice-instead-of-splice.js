/*
When you want to remove items and keep the rest of the array, JavaScript offers the splice method, which takes arguments for the index of where to start removing items, then the number of items to remove. If the second argument is not provided, the default is to remove items through the end. 

However, the splice method mutates the original array it is called on. */

var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(cities);  
// [ 'Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin' ]

console.log(cities.splice(3, 1)); // [ 'London' ]

console.log(cities); 
// [ 'Chicago', 'Delhi', 'Islamabad', 'Berlin' ]  -Splice returns the string London and deletes it from the cities array




/*
The slice method does not mutate the original array, but returns a new one which can be saved into a variable. The slice method takes two arguments for the indices to begin and end the slice (the end is non-inclusive), and returns those items in a new array. Using the slice method instead of splice helps to avoid any array-mutating side effects.

Rewrite the function nonMutatingSplice by using slice instead of splice. It should limit the provided cities array to a length of 3, and return a new array with only the first three items.
*/


function nonMutatingSplice(cities) {
  return cities.slice(0,3);
}

var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(inputCities); 
// [ 'Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin' ]
console.log(nonMutatingSplice(inputCities));
