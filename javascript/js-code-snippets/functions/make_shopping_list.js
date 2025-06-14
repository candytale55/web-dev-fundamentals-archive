// DEFAULT Parameters

/*
ES6 offers the ability to use default parameters. This allows parameters to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called.

used the = operator to assign the parameter name a default value of 'stranger'. This is useful to have in case we ever want to include a non-personalized default greeting
*/

function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!


/*
The function makeShoppingList() creates a shopping list based on the items that are passed to the function as arguments.

Imagine that you always purchase milk, bread, and eggs every time you go shopping for groceries. To make creating a grocery list easier, let’s assign default values to the parameters 
*/


function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

makeShoppingList();
makeShoppingList('butter');

