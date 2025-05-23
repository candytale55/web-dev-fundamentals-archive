// Setters
/*
Along with getter methods, we can also create setter methods which reassign values of existing properties within an object. Let’s see an example of a setter method
*/

const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};

/*
Notice that in the example above:

We can perform a check for what value is being assigned to this._age.
When we use the setter method, only values that are numbers will reassign this._age
There are different outputs depending on what values are used to reassign this._age
*/
person.age = 40;
console.log(person._age); // Logs: 40
person.age = '40'; // Logs: You must assign a number to age






const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num){
    if (typeof this._numOfSensors === 'number' && num >= 0){
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0')
    }
  },
};

robot.numOfSensors = 100;
console.log(robot.numOfSensors);
robot.numOfSensors= "JAJA JA JA";
