/* The _user_ object contains three keys. Inside this object, the _data_ key contains five keys itself, one of which contains an array of friends.  */

let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};


/*
function _addFriend_ takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array.
*/

function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);
  return userObj.data.friends;
}

console.log(addFriend(user, 'Pete'));
//[ 'Sam', 'Kira', 'Tomo', 'Pete' ]

console.log(addFriend(user, 'Fabiola'));
// [ 'Sam', 'Kira', 'Tomo', 'Pete', 'Fabiola' ]