const createPerson = (name, age, gender) => ({
    name,
    age,
    gender
});


// TESTS:
console.log(createPerson("Alba", 5, "female"));
// { name: 'Alba', age: 5, gender: 'female' }

console.log(createPerson("Zodiac Hasbro", 56, "male"))
// { name: 'Zodiac Hasbro', age: 56, gender: 'male' }



/* Object Property Shorthand in ES6 for easily defining object literals: ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood. */

/*
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});

     Can be rewriten as: 

const getMousePosition = (x, y) => ({ x, y });
*/
