
// Helper Functions

/*
We can use the return value of a function inside another function. These functions being called within another function are often referred to as helper functions. Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.

If we wanted to define a function that converts the temperature from Celsius to Fahrenheit, we could write two functions like:
*/

function multiplyByNineFifths(number) {
  return number * (9/5);
};

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};

getFahrenheit(15); // Returns 59



/*
In the previous exercise, we created a function to find the number of monitors to order for an office. Now let’s write another function that uses the monitorCount function to figure out the price.
*/

function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns){
  return monitorCount(rows, columns) * 200;
}

console.log(costOfMonitors(10,5));

const totalCost = costOfMonitors(5,4);

console.log(totalCost);
