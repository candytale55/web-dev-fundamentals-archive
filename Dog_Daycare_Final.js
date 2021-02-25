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





class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
   get usesLitter() {
    return this._usesLitter;
  }
}



class Dog extends Animal {
  constructor(name){
    super(name);
  }
}



console.log(Animal.generateName()); // returns a name



const halley = new Dog('Halley');

console.log(halley.name);
console.log(halley.behavior);
halley.incrementBehavior();
console.log(halley.name);
console.log(halley.behavior);


const bryceCat = new Cat('Bryce', false); 
console.log(bryceCat._name); // output: Bryce

bryceCat.incrementBehavior(); // Call .incrementBehavior() on Cat instance 
console.log(bryceCat.behavior); // Log value saved to behavior


/*  Now that we’ve abstracted animal daycare features, it’s easy to see how you can extend Animal to support other classes, like Rabbit, Bird or even Snake. */
