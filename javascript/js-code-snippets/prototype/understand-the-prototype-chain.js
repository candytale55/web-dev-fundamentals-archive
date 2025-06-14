/*
All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.
*/

function Bird(name) {
  this.name = name;
}

console.log(typeof Bird.prototype); // yields 'object'
//Because a prototype is an object, a prototype can have its own prototype! In this case, the prototype of Bird.prototype is Object.prototype:

console.log(Object.prototype.isPrototypeOf(Bird.prototype)); // true

/*
How is this useful? You may recall the hasOwnProperty method from a previous challenge:
*/

let dove = new Bird("Donna");
console.log(dove.hasOwnProperty("name")); // yields true

/*
The hasOwnProperty method is defined in Object.prototype, which can be accessed by Bird.prototype, which can then be accessed by duck. This is an example of the prototype chain. In this prototype chain, Bird is the supertype for duck, while duck is the subtype. Object is a supertype for both Bird and duck. Object is a supertype for all objects in JavaScript. Therefore, any object can use the hasOwnProperty method.
*/

let duck = new Bird("Donald");
console.log(duck.hasOwnProperty("name")); // yields true




function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

console.log(Object.prototype.isPrototypeOf(Dog.prototype));//true
console.log(Object.prototype.isPrototypeOf(Bird.prototype)); // true
