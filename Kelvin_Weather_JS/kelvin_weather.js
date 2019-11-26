// constant kelvin declaration.
const kelvin = 293;
console.log(kelvin);
// constant celsius declaration
const celsius = kelvin - 273;
console.log(celsius);
// constant farenheit declaration
let farenheit = celsius *(9/5)+32;
console.log(farenheit);
farenheit = Math.floor(farenheit);
console.log(`The temperature is ${farenheit} degrees Farenheit.`);
// variable newton
let newton= celsius * (33/100);
newton = Math.floor(newton);
console.log(newton);
