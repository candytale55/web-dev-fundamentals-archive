/*
JavaScript6, 2021
updateRecords function takes an object like collection, an id, a prop (like artist or tracks), and a value that it must update. The function must:
(0) Always return the entire object.
(1) If prop isn't tracks, and value isn't an empty string, it updates or set that album's prop to value.
(2) If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
(3)If prop is tracks, and value isn't an empty string, add value to the end of the album's existing tracks array.
(4)If value is an empty string, delete the given prop property from the album.
*/


/*   ---- Setup - Collection Object ----   */

var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};





/*   ---- Function ----   */

function updateRecords(object, id, prop, value) {

  // (1)
  if (prop != "tracks" && value != ""){
    object[id][prop] = value;
  }
  //(2)
  else if (prop == "tracks" && object[id].hasOwnProperty(prop) === false ){
    object[id][prop] = [value];
    }
  // (3)
  else if (prop == "tracks" && value != "" ){
    object[id][prop].push(value);
  }
  //(4)
  else if (value === "" && object[id].hasOwnProperty(prop) === true){
    delete object[id][prop];
  }

  return object;
} // fin updateRecords()





/*   ----TESTS----   */

// set album's artist prop
console.log(collection.artist); // undefined
updateRecords(collection, 5439, 'artist', 'ABBA');
console.log(collection.artist); // ABBA


// set album's tracks, when the property doesn't exist
console.log(collection[5439]); // { albumTitle: 'ABBA Gold' } 
updateRecords(collection, 5439, "tracks", "Take a Chance on Me");
console.log(collection[5439]);
// { albumTitle: 'ABBA Gold', tracks: [ 'Take a Chance on Me' ] }


// artist should not be set
console.log(collection[2548].artist) // Bon Jovi
updateRecords(collection, 2548, "artist", "")
console.log(collection[2548].artist)


// add value to the end of the album's existing tracks array
console.log(collection[1245].tracks) // []
updateRecords(collection, 1245, "tracks", "Addicted to Love")
console.log(collection[1245].tracks) // [ 'Addicted to Love' ]


//tracks should have the string 1999 as the first element.
console.log(collection[2468].tracks) // [ '1999', 'Little Red Corvette' ]
updateRecords(collection, 2468, "tracks", "Free")
console.log(collection[2468].tracks) // [ '1999', 'Little Red Corvette', 'Free' ]


// tracks should not be set
console.log(collection[2468].tracks)
updateRecords(collection, 2548, "tracks", ""), 
console.log(collection[2468].tracks)


// Adding albumTitle when it didn't exist
console.log(collection[1245].albumTitle); // undefined 
updateRecords(collection, 1245, "albumTitle", "Riptide"); 
console.log(collection[1245].albumTitle); // Riptide


// Deleting a prop with an empty string
updateRecords(collection, 1245, "albumTitle", "Riptide");
console.log(collection[1245].albumTitle); // Riptide 
updateRecords(collection, 1245, "albumTitle", ""); 
console.log(collection[1245].albumTitle); // undefined
