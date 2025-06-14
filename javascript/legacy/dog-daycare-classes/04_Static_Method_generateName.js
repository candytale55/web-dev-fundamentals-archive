
/*
Using the static keyword to create a static method .generateName() that returns a random name when it’s called. 
Because of the static keyword, we can only access .generateName() by appending it to the Animal class.
*/





class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
    
  static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random()*5);
    return names[randomNumber];
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }   
 
  incrementBehavior() {
    this._behavior++;
  }
} 



console.log(Animal.generateName()); // returns a name


/*
You cannot access the .generateName() method from instances of the Animal class or instances of its subclasses. 
The example below will result in an error, because you cannot call static methods (.generateName()) on an instance (tyson).
*/

const tyson = new Animal('Tyson'); 
tyson.generateName(); // TypeError
