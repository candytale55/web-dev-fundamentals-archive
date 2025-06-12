// Race numbers are assigned randomly with this:
let raceNumber = Math.floor(Math.random() * 1000);

//There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

// indicates if a runner registered early
let registeredEarly = true;
//runner's age
let runnerAge = 16;

// checks if runner is an adult AND registered early
if (runnerAge >= 18 && registeredEarly === true){
  raceNumber += 1000;
}

// checks age and registration time to determine race time.
if (runnerAge >= 18 && registeredEarly === true){
  console.log(`Your race number is ${raceNumber} start time is at 9:30. BE THERE. Good Luck!`);
} else if (runnerAge >= 18){
  console.log(`Late adults run at 11:00 am. Your race number is ${raceNumber}. PLEASE BE EARLY!`);
} else {
  console.log(`Youth registrants run at 12:30 pm. Your race number is ${raceNumber}`)
}



