class Media {
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  // GETTERS:
  get title(){
    return this._title;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  get ratings(){
    return this._ratings;
  }

  // METHODS:
  toggleCheckOutStatus(){
     /*if (this._isCheckedOut === false){
      this._isCheckedOut = true;
    } else {
      this._isCheckedOut = false;
    }*/
    this._isCheckedOut = !this._isCheckedOut;
  }
  
  getAverageRating(){
 /*  const reducer =  (accumulator, currentValue) => accumulator + currentValue;
    let average = this.ratings.reduce(reducer) / this.ratings.length;
*/
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




// TESTS
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
//speed.toggleCheckOutStatus();
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed);
console.log(speed.getAverageRating());

// For reference: https://www.youtube.com/watch?v=_7HStd1Vhlc
