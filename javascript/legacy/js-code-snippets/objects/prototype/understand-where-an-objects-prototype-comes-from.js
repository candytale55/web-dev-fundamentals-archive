
/*
Just like people inherit genes from their parents, an object inherits its prototype directly from the constructor function that created it. For example, here the Bird constructor creates the duck object:
*/

function Bird(name) {
  this.name = name;
}



let duck = new Bird("Donald");
//duck inherits its prototype from the Bird constructor function. You can show this relationship with the isPrototypeOf method:

console.log(Bird.prototype.isPrototypeOf(duck)); //true
console.log(Dog.prototype.isPrototypeOf(duck));//false


function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);
console.log(Dog.prototype.isPrototypeOf(beagle)); // true
console.log(Bird.prototype.isPrototypeOf(beagle));// false
