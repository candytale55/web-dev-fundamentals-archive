// Nested Objects
/*
An object might have another object as a property which in turn could have a property that’s an array of even more objects!

The crew object. This will contain all the crew members who do important work on the craft. 
Each of those crew members are objects themselves. 
They have properties like name, and degree, and they each have unique methods based on their roles. 
We can also nest other objects in the spaceship such as a telescope or nest details about 
the spaceship’s computers inside a parent nanoelectronics object.
*/

const spaceship1 = {
     telescope: {
        yearBuilt: 2018,
        model: '91031-XLT',
        focalLength: 2032 
     },
    crew: {
        captain: { 
            name: 'Sandra', 
            degree: 'Computer Engineering', 
            encourageTeam() { console.log('We got this!') } 
         }
    },
    engine: {
        model: 'Nimbus2000'
     },
     nanoelectronics: {
         computer: {
            terabytes: 100,
            monitors: 'HD'
         },
        'back-up': {
           battery: 'Lithium',
           terabytes: 50
         }
    }
}; 
//console.log(spaceship1);

/*
We can chain operators to access nested properties. 
We’ll have to pay attention to which operator makes sense to use in each layer.
It can be helpful to pretend you are the computer and evaluate each expression from left 
to right so that each operation starts to feel a little more manageable.
*/

console.log(spaceship1.nanoelectronics['back-up'].battery); // 'Lithium'

/*
First the computer evaluates spaceship.nanoelectronics, which results in an object containing the back-up and computer objects.
We accessed the back-up object by appending ['back-up'].
The back-up object has a battery property, accessed with .battery which returned the value stored there: 'Lithium'
*/


let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

spaceship.passengers = [
  {name:'Truman Capote'},
  {name:'Stalin'},
  {name: 'Superman'}
];
//console.log(spaceship.passengers);
console.log(spaceship.passengers[0]);

let firstPassenger = spaceship.passengers[0];
console.log(firstPassenger);

/*
assign the captain‘s favorite food (the element in the 0th index of her 'favorite foods' array) to it. 
Make sure to use bracket and dot notation to get the value of the food through nested access (don’t just copy the value into the variable!)
*/
let capFave = spaceship.crew.captain['favorite foods'][0];
//console.log(capFave);

/*
the passengers property has a value of null. Instead, assign as its value an array of objects. 
These objects should represent the spaceship‘s passengers as individual objects. 
Make at least one passenger object in the array that has at least one key-value pair on it.
*/
