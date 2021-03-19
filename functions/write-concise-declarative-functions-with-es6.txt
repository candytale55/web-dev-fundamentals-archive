/*
With ES6, you can remove the function keyword and colon altogether when defining functions in objects.
*/

const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);