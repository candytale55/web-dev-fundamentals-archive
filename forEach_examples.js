// .forEach() will execute the same code for each element of an array. Because forEach has a callback function as an argument, it will execute the function for each of the array's elements (current element is passed as argument.) 

//Note: The return value for .forEach() will always be undefined and never anything else. It purpose is to iterate over an array and act upon its elements.

const groceries = ['brown sugar', 'milk', 'salt', 'chicken legs', 'black pepper'];

groceries.forEach(
  function (groceryItem){
    console.log(' - ' + groceryItem);
  }
); // Will print a nicely formatted list to take to the shop.
/*
 - brown sugar
 - milk
 - salt
 - chicken legs
 - black pepper
*/



const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterates through each of the fruits.
fruits.forEach(
  groceryList => console.log(groceryList)
); // prints each name individually
/*
mango
papaya
pineapple
apple
*/

// As oposed to: 
console.log(fruits); 
// prints the array: [ 'mango', 'papaya', 'pineapple', 'apple' ]



fruits.forEach(
  countElements => {
    let i = 0;
    i++;
    console.log(i, countElements);
  }
);
/* i is always 1. It prints:
1 'mango'
1 'papaya'
1 'pineapple'
1 'apple'
*/


// As oposed to: 
for(let i = 0; i<fruits.length; i++){
  console.log(i, fruits[i]);
}
/*
0 'mango'
1 'papaya'
2 'pineapple'
3 'apple'
*/




// Iterates through each of the fruits.
fruits.forEach(
  iWantFruit => console.log("I want to eat a(n) " + iWantFruit)
); // prints each phrase individually



//It can also be used directly: 
[1,2,3,4,5].forEach(
  function (number){
    console.log("Printing " + number + " to the console.")
  }
);

