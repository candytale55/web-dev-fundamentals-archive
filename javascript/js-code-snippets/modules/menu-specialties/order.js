const Menu = require('./menu');
 
function placeOrder() {
  console.log('My order is: ' + Menu.specialty);
}
 
placeOrder();


/*
Explanation: 

In Node.js, use the require() function to import modules so we can use of the exported module and the behavior we define within it in another file. 

For instance, say we want the module to control the menu’s data and behavior, and we want a separate file to handle placing an order. 

In order.js we import the Menu module from menu.js to order.js using require(). 

require() takes a file path argument pointing to the original module file.
 */
