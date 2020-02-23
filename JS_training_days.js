/*
Ideally, the getRandEvent() function selects an event at random. The getTrainingDays() function returns the number of days to train based on the event selected. The logEvent() and logTime() functions print the athlete name, event, and number of days to the console.
*/


// The scope of `random` is too loose 
// If we leave the random variable defined in the global scope. Each time getRandEvent() is called, it uses the same value, therefore participants get the same event. It must be moved to block scope.
//const random = Math.floor(Math.random() * 3);

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};


// The scope of `days` is too tight if it's inside the function getTrainingDays.

const getTrainingDays = event => {
let days = 0;
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }
  return days;
};
//console.log(getTrainingDays("Marathon"));


const name = 'Nala';
// The scope of `name` is too tight 
const logEvent = (name,event) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name,days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(name, event);
logTime(name, days);

// ANOTHER COMPETITOR
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);
