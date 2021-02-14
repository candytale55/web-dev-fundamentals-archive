
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
console.log(groceryList);

//Use the .shift() method to remove the first item from the array groceryList.
groceryList.shift();
console.log(groceryList);


//use the .unshift() method to add 'popcorn' to the beginning of your grocery list.
groceryList.unshift('popcorn');
console.log(groceryList);



// use .slice() to provide your friend with a list of these three things.
console.log(groceryList.slice(1,4));
// console.log(array.method(first, last+1));
console.log(groceryList); // Notice that the groceryList array still contains the same items it had in Step 2. That means .slice() is non-mutating! You can confirm this in the link in the previous step.


//Call .indexOf() on groceryList to find the index of the element 'pasta' and save the returned value to a const variable named pastaIndex.
console.log(groceryList.indexOf('pasta'));


const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);
//groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];



/*
.pop() and .push() mutate the array on which they’re called. 
However, there are times that we don’t want to mutate the original array and we can use non-mutating array methods. 
Be sure to check MDN to understand the behavior of the method you are using.

Some arrays methods that are available to JavaScript developers include: 
.join(), .slice(), .splice(), .shift(), .unshift(), and .concat() amongst many others. 
Using these built-in methods make it easier to do some common tasks when working with arrays.
*/


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
