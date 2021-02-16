/*
When the data stored on an object is a function we call that a method. A property is what an object has, while a method is what an object does.

We can include methods in our object literals by creating ordinary, comma-separated key-value pairs. The key serves as our method’s name, while the value is an anonymous function expression.
*/

const alienShip1 = {
  invade: function () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};
alienShip1.invade();

/*
With the new method syntax introduced in ES6 we can omit the colon and the function keyword.
*/

const alienShip2 = {
  invade () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};

/*
Object methods are invoked by appending the object’s name with the dot operator followed by the method name and parentheses
*/
alienShip2.invade();



let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';


const alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff(){
    console.log('Spim... Borp... Glix... Blastoff!');
  }
}
alienShip.retreat();
alienShip.takeOff();
