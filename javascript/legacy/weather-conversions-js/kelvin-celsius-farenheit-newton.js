// Convert Kelvin to Celsius, then to Fahrenheit

let kelvin = 0;
console.log(`The temperature is ${kelvin} K`);

// Celsius is 273 degrees less than Kelvin
const celsius = kelvin - 273;
console.log (`The temperature is ${celsius} °C`);

//Equation to calculate Fahrenheit: Fahrenheit = Celsius * (9/5) + 32
let farenheit = (celsius * (9/5) + 32);
console.log (`The exact temperature is ${farenheit} °F`);

// When you convert from Celsius to Fahrenheit, you often get a decimal number. Use the .floor() method from the Math library to round down the Fahrenheit temperature.
farenheit = Math.floor(farenheit);
console.log (`The temperature is ${farenheit} °F`);

// Convert celsius to the Newton scale using this equation: Newton = Celsius * (33/100) 

let newton = celsius * (33/100);
console.log (`The exact temperature is ${newton} Newtons`);

newton = Math.floor(celsius * (33/100));
console.log (`The temperature is ${newton} Newtons`);


/* BACKGROUND DATA (from WP)
K = kelvin
The Kelvin scale uses absolute zero as its null point.  Unlike the degree Fahrenheit and degree Celsius, the kelvin is not referred to or written as a degree. 
The kelvin is the primary unit of temperature measurement in the physical sciences, but is often used in conjunction with the degree Celsius, which has the same magnitude.

It's often used as a measure of the colour temperature of light sources.  Black bodies at temperatures below about 4000 K appear reddish, whereas those above about 7500 K appear bluish. 

In the fields of image projection and photography, where a colour temperature of approximately 5600 K is required to match "daylight" film emulsions. 

Digital cameras and photographic software often use colour temperature in K in edit and setup menus. 

In astronomy, the stellar classification of stars are based, in part, upon their surface temperature, known as effective temperature. The photosphere of the Sun, for instance, has an effective temperature of 5778 K.

*/
