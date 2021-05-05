/*
You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

Usernames can only use alpha-numeric characters.
The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
Username letters can be lowercase and uppercase.
Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*/

let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i; 
let result = userCheck.test(username);
console.log(result); // true




// More tests: 
console.log(userCheck.test(" JackOfAllTrades001")); //false
console.log(userCheck.test("001JackOfAllTrades")); // false
console.log(userCheck.test("Ja")); //true 
console.log(userCheck.test("J01")); // true
console.log(userCheck.test("J0")); // false



console.log("JackOfAllTrades".match(userCheck));
console.log("JackOfAllTrades001".match(userCheck));
console.log("001JackOfAllTrades".match(userCheck));