/*
Sometimes you may need to iterate through all the keys within an object. 
This requires a specific syntax in JavaScript called a for...in statement.
*/



/*
function _countOnline_ accepts as argument a "users" object. 
Use a for...in statement within this function to loop through the users object passed 
into the function and return the number of users whose online property is set to true. 

Note: dot-notation will cause errors in this challenge. 
[square-bracket] notation must be used to call a variable property name.
*/




function countOnline(usersObj) {
  let count = 0;
  for (let user in usersObj){
    //console.log(usersObj[user]["online"]);
    if (usersObj[user]["online"] === true){
      count += 1;
    }
  }
  return count
}


/*
we defined a variable user, and this variable was reset during each iteration 
to each of the object's keys as the statement looped through the object.
*/


console.log(countOnline({ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } })); // 1

console.log(countOnline({ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } })); // 2

console.log(countOnline({ Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } })); //0

/*
NOTE: Objects do not maintain an ordering to stored keys like arrays do; 
thus a key's position on an object, or the relative order in which it appears, 
is irrelevant when referencing or accessing that key.
*/
