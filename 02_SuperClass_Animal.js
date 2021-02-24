
/* 
The doggy daycare is so successful that we decide to expand the business and open a kitty daycare. 
We need to create a Cat class so we can quickly generate Cat instances. 


The properties in our Cat class (name, behavior) are similar to the properties in our Dog class, though, there will be some differences

The class Cat shares properties _name and _behavior and method .incrementBehavior() with the Dog class. 
It contains one additional property _usesLitter, that holds a boolean value to indicate whether a cat can use their litter box.

*/


class Cat_ {
  constructor(name, usesLitter) {
    this._name = name;
    this._usesLitter = usesLitter;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get usesLitter() {
    return this._usesLitter;
  }
 
  get behavior() {
    return this._behavior;
  }  
 
  incrementBehavior() {
    this._behavior++;
  }
}



/*
When multiple classes share properties or methods, they become candidates for inheritance 
— a tool developers use to decrease the amount of code they need to write.

You create a parent class (AKA "superclass") with properties and methods that multiple child classes (AKA "subclasses") share. 
The child classes inherit the properties and methods from their parent class.
*/


/* 
Let’s abstract the shared properties and methods from our Cat and Dog classes into a parent class called Animal.

The Animal class contains the properties and methods that the Cat and Dog classes share (name, behavior, .incrementBehavior()).
*/


class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
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

