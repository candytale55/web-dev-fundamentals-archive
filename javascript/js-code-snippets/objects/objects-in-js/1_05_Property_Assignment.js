/*
bjects are mutable meaning we can update them after we create them!

We can use either dot notation, ., or bracket notation, [], and the assignment operator, = to add new key-value pairs to an object or change an existing property.

If the property already exists on the object, whatever value it held before will be replaced with the newly assigned value.

If there was no property with that name, a new property will be added to the object.

although we can’t reassign an object declared with const, we can still mutate it, meaning we can add new properties and change the properties that are there
*/

const spaceship1 = {
  type: 'shuttle'
  };
console.log(spaceship1);
//spaceship1 = {type: 'alien'}; // TypeError: Assignment to constant variable.

spaceship1.type = 'alien'; // Changes the value of the type property
spaceship1.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'

console.log(spaceship1);

//You can delete a property from an object with the delete operator.

const spaceship2 = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  mission: 'Explore the universe' 
};
console.log(spaceship2);

delete spaceship2.mission;  // Removes the mission property
console.log(spaceship2);



let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};
console.log(spaceship);
console.log(" ");
// Reassign the color property of the spaceship object to have a value of 'glorious gold'
spaceship.color = 'glorious gold';
console.log(spaceship);
console.log(" ");
//  add a numEngines property with a numeric value between 1 and 10 to the spaceship object.
spaceship.numEngines = 8;
console.log(spaceship);
console.log(" ");

// Delete operator to remove the 'Secret Mission' property from the spaceship object.
delete spaceship['Secret Mission'];
console.log (spaceship);
