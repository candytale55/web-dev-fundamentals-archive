let Menu = {};
Menu.specialty = "Roasted Beet Burger with Mint Sauce";
//console.log(Menu.specialty); // Testing

module.exports = Menu; 




/*

Explanation: 

Every JavaScript file run in Node has a local module object with an exports property used to define what should be exported from the file.

1. let Menu = {}; creates the object that represents the module Menu. 

2. Menu.specialty is a property of the Menu module. We add data to the Menu object by setting properties on that object and giving the properties a value. The Menu.specialty property of the module has the value "Roasted Beet Burger with Mint Sauce";

3. _module_ is a variable that represents the module, and _exports_ exposes the module as an object.  module.exports = Menu; exports the Menu object as a module.

*/
