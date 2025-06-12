// Blocks and Scope


const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // blue 
}; // the function body is a block of code.

logSkyColor();

let dusk = 'pink';
if (dusk) {
  let color = 'pink';
  console.log(color); // pink
};  // the block in an if statement



const city = 'New York City';

function logCitySkyline(){
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}

console.log(logCitySkyline()); // The stars over the Empire State Building in New York City


/*
A block is the code found inside a set of curly braces {}. Blocks group one or more statements together and serve as an important structural marker for our code.

logCitySkyline() function access both variables without any problems.
*/
