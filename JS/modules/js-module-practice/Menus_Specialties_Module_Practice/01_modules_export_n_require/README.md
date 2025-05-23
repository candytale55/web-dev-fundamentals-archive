
## Explanation: 

Every JavaScript file that is run in Node has a local module object with an exports property that is used to define what should be exported from the file.

In Node.js, use the require() function to import modules so we can use of the exported module and the behavior we define within it in another file.  

We want the module to control the menu’s data and behavior, and we want a separate file to handle placing an order.

__menu.js__ contains one property _specialty_ that has a string value. Menu is exported as a module to be used by order.js.

* let Menu = {}; creates the object that represents the module Menu. 
* Menu.specialty is a property of the Menu module. We add data to the Menu object by setting properties on that object and giving the properties a value. The Menu.specialty property of the module has the value "Roasted Beet Burger with Mint Sauce";
* _module_ is a variable that represents the module, and _exports_ exposes the module as an object.  module.exports = Menu; exports the Menu object as a module.

In __order.js__ we import the Menu module from menu.js to order.js using require(). 
require() takes a file path argument pointing to the original module file.
