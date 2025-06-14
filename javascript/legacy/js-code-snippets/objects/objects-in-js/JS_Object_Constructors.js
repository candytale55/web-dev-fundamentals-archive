// CONSTRUCTORS

/*
Constructors:
- Have capitalized name to distinguish them.
- Use keyword this to set properties of the object they will create. 
- Define properties and behaviors instead of returning a value.
*/

function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
console.log( blueBird.name);




//you can design your Bird constructor to accept parameters:

function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let fido = new Dog("fido", "brown");
console.log(fido.name);
console.log(fido.color);

// INSTANCEOF 
/*
 instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor.
*/

console.log(fido instanceof Dog); // returns true

let polly = new Bird();
console.log(polly instanceof Dog); // return false

