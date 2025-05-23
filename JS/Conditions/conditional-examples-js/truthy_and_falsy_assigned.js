/*
Say you have a website and want to take a user’s username to make a personalized greeting. Sometimes, the user does not have an account, making the username variable falsy. The code below checks if username is defined and assigns a default string if it is not:
*/
let username =""; // Stranger
//let username = "Mike"; // Mike
let defaultName;
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}
console.log(defaultName);

// short-circuit evaluation.

/*
If you combine your knowledge of logical operators you can use a short-hand for the code above. In a boolean condition, JavaScript assigns the truthy value to a variable if you use the || operator in your assignment:
*/

let defaultName1 = username || 'Stranger';

console.log(defaultName1);




//let tool = ''; // The pen is mightier than the sword.
let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);
