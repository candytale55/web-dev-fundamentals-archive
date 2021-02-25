/*
When multiple classes share properties or methods, they become candidates for inheritance 
— a tool developers use to decrease the amount of code they need to write.

You create a parent class (AKA "superclass") with properties and methods that multiple child classes 
(AKA "subclasses") share. The child classes inherit the properties and methods from their parent class.
*/


/* 
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







/*
Now that we have these shared properties and methods in the parent Animal class, we can extend them to the subclass, Cat.

* The extends keyword makes the methods of the animal class available inside the cat class, so the Cat class 
  has access to the Animal getters and the .incrementBehavior() method.

* The constructor, called when you create a new Cat object, accepts two arguments, name and usesLitter.

* The super keyword calls the constructor of the parent class. In this case, super(name) passes the name argument 
  of the Cat class to the constructor of the Animal class. When the Animal constructor runs, it sets this._name = name; for new Cat instances.

* _usesLitter is a new property that is unique to the Cat class, so we set it in the Cat constructor.

* In addition to the inherited features, child classes can contain their own properties, getters, setters, and methods. 
  In this case the usesLitter getter. The syntax for creating getters, setters, and methods is the same as it is in any other class.
*/

class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
   get usesLitter() {
    return this._usesLitter;
  }
}

const bryceCat = new Cat('Bryce', false); 
console.log(bryceCat._name); // output: Bryce




/* Answer the following question: What will the code below log to the console? */

bryceCat.incrementBehavior(); // Call .incrementBehavior() on Cat instance 
console.log(bryceCat.behavior); // Log value saved to behavior




/*
The Answer is 1. But why?

* The Cat class inherits the _behavior property, behavior getter, and the .incrementBehavior() method from the Animal class.

* When we created the bryceCat instance, the Animal constructor set the _behavior property to zero.

* The first line of code calls the inherited .incrementBehavior() method, which increases the bryceCat _behavior value from zero to one.

* The second line of code calls the behavior getter and logs the value saved to _behavior (1).
*/




/* 
Now that we’ve abstracted animal daycare features, it’s easy to see how you can extend Animal to support other classes, like Rabbit, Bird or even Snake.
 */
