class Media {
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  
  get title(){
    return this._title;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  get ratings(){
    return this._ratings;
  }

  toggleCheckOutStatus(){
    this._isCheckedOut = !this._isCheckedOut;
  }
  
  getAverageRating(){
    let average = this.ratings.reduce((accumulator, rating) => accumulator + rating); 
    return average / this.ratings.length;
  } 

  addRating(newRating){
    this.ratings.push(newRating);
  }
}





class Book extends Media {
  constructor(title, author, pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author(){
    return this._author;
  }

  get pages(){
    return this._pages;
  }
}





class Movie extends Media {
  constructor(title, director, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director(){
    return this._director;
  }
  get runTime(){
    this._runTime;
  }
}



class CD extends Media {
  constructor(title, artist, length){
    super(title);
    this._artist = artist;
    this._length = length;
    this._songTitles = [];
  }
  get artist(){
    return this._artist;
  }
  get length(){
    return this._length;
  }
  get songTitles(){
    return this._songTitles;
  }

  addSongList(arrayOfSongs){
    this._songTitles = arrayOfSongs;
  }

 shuffle(array) {
  let shuffledArray = array;
  var currentIndex = shuffledArray.length, temporaryValue, randomIndex; 
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = shuffledArray[currentIndex];
    shuffledArray[currentIndex] = shuffledArray[randomIndex];
    shuffledArray[randomIndex] = temporaryValue;
  }
   return shuffledArray;
 } // End shuffle

} // End Class CD







// TESTS:

const historyOfEverything = new Book ('A Short History of Nearly Everything', 'Bill Bryson', 544)
console.log(historyOfEverything);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());


const speed = new Movie ('Speed', 'Jan de Bont', 116)
console.log(speed);
speed.toggleCheckOutStatus();
speed.toggleCheckOutStatus();
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed);
console.log(speed.getAverageRating());


const appetite = new CD("Appetite for Destruction", "Guns n' Roses", 54)
appetite.addRating(4);
appetite.addRating(5);
appetite.addRating(3);
console.log(appetite.getAverageRating());
appetite.addSongList(
  [
  "Welcome to the Jungle",
  "It's So Easy",
  "Nightrain",
  "Out ta Get Me",
  "Mr. Brownstone",
  "Paradise City",
	"My Michelle",
  "Think About You",
  "Sweet Child o' Mine",
  "You're Crazy",
  "Anything Goes",
  "Rocket Queen"]
);
//console.log(appetite);

console.log(appetite.shuffle(appetite.songTitles))


// For reference: https://www.youtube.com/watch?v=_7HStd1Vhlc

