/*
You want to create a catalog of all the dogs who belong to a daycare, 
by creating a Dog class that serves as a template for creating new Dog objects. 

An object representing a dog named halley: Dog’s name (a key) is "Halley" (a value) 
and has an age (another key) of 3 (another value). We create the halley object below:
*/



let halleyA = {
  _name: 'Halley',
  _behavior: 0,

  get name() {
    return this._name;
  },

  get behavior() {
    return this._behavior;
  },

  incrementBehavior() {
    this._behavior++;
  }
}




// Dog is the name of our class. By convention, we capitalize and CamelCase class names.

/* 
JavaScript is an object-oriented programming (OOP) language we can use to model real-world items. 
Classes are a tool that developers use to quickly produce similar objects.

Although you may see similarities between class and object syntax, there is one important method that sets them apart. 
It’s called the constructor method. JavaScript calls the constructor() method every time it creates a new instance of a class.

JavaScript will invoke the constructor() method every time we create a new instance of our Dog class.
This constructor() method accepts one argument, name.

Inside of the constructor() method, we use the this keyword. 
In the context of a class, this refers to an instance of that class. 

In the Dog class, we use this to set the value of the Dog instance’s name property to the name argument.
Under this.name, we create a property called behavior, which will keep track of the number of times a dog misbehaves. 
The behavior property is always initialized to zero.
*/





class Dog {
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


/*
Class method and getter syntax is the same as it is for objects except you can not include commas between methods.

We prepended property names with underscores (_name and _behavior), which indicate these properties should not be accessed directly. 

Under the getters, we add a method named .incrementBehavior(). 
When you call .incrementBehavior() on a Dog instance, it adds 1 to the _behavior property. 
*/


const halley = new Dog('Halley');

console.log(halley.name);
console.log(halley.behavior);
halley.incrementBehavior();
console.log(halley.name);
console.log(halley.behavior);



