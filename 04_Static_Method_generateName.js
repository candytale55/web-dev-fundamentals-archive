
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
