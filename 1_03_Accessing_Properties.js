let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

// Access with dot notation:
console.log(spaceship.homePlanet); // Earth
console.log(spaceship.color); // silver

// Access a property that does not exist
console.log(spaceship.favoriteIceCream); // undefines

// Assign a property to a variable.
let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;
console.log(crewCount); // 5
console.log(planetArray); //


