# Dog_Daycare_Intro_to_Classes_JS
You want to create a catalog of all the dogs who belong to a daycare, by creating a Dog class that serves as a template for creating new Dog objects.  Codecademy examples for creating JS classes.

## General info
The purpose of the project is just personal learning. I may revisit this code to find different solutions or to apply it under other context. 

## Description
* **_Animal_** superclass: When multiple classes share properties or methods, they become candidates for inheritance. The _Animal_ class contains the properties and methods that the Cat and Dog classes shared (name, behavior, .incrementBehavior()). Different animals in the doggie daycare will extend the parent class _Animal_. The child classes will inherit the properties and methods from their parent class.
* **_static generateName()_** is a static method on _Animal_ class. Sometimes you will want a class to have methods that aren’t available in individual instances, but that you can call directly from the class. Using the static keyword to create a static method .generateName() that returns a random name when it’s called. Because of the static keyword, we can only access .generateName() by appending it to the Animal class.
    `console.log(Animal.generateName());`
* **_Cat_** and **_Dog_** subclasses inherit from _Animal_ class.
* **_Cat_** class have these shared properties and methods in the parent Animal class. The extends keyword makes the methods of the animal class available inside the cat class, so the Cat class has access to the Animal getters and the .incrementBehavior() method. The constructor, called when you create a new Cat object, accepts two arguments, name and usesLitter. The super keyword calls the constructor of the parent class. In this case, super(name) passes the name argument of the Cat class to the constructor of the Animal class. When the Animal constructor runs, it sets this._name = name; for new Cat instances.  _usesLitter_ is a new property that is unique to the Cat class, so we set it in the Cat constructor. In addition to the inherited features, child classes can contain their own properties, getters, setters, and methods. In this case the _usesLitter_ getter. The syntax for creating getters, setters, and methods is the same as it is in any other class.

#### To-do list:
* Add the _Rabbit_, _Snake_, _Bird_ and other animal classes to test it. 

## Technologies
* Javascript ES6

## Setup
NA - It's only coding examples, there's no setup.

## Status
Project is: _in progress_, - Should add more classes to test it. I may come back and improve it, or not.

## References
Based on Codecademy's _Learn JavaScript_ course, _Classes_
