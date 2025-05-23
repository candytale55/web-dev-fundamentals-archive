# Build-a-Library_JS
You’ve become head librarian at your local Books-‘N-Stuff and  you realize you’re still using index cards to handle the item's info. Let’s get to work modernizing your new digs.

## General info

Books-‘N-Stuff carries three different types of media: books, CDs, and movies. 
There will be a parent class named Media with three subclasses: Book, Movie, and CD. 

#### Class structures:

__Media__ entities will have the following:
  + title (string), 
  + isCheckedOut (boolean, initially false)
  + ratings (array, initially empty)
  + Getters: all properties have a getter

Methods: 
  + _.getAverageRating()_  Gets the average of ratigs by using reduce() to sum the values in _ratings_ dividiving it by _ratings.length_ and returning it.  
  + _.toggleCheckOutStatus()_ toggles boolean on _isCheckedOut_  
  + _.addRating()_ adds a rating value to _ratings_. Must be between 1 to 5. 



__Book__ class extends Media and has these additonal values:
+ author (string)
+ pages (number)


__Movie__ class extends Media and has these additonal values:
+ director (string) 
+ runTime (number)


__CD__ class extends Media and has these additional values:
  + artist (string)
  + lenght (number) - in minutes 
  + songTitles (array)

  Methods: 
  + .addSongList() - adds the song titles of the whole record to array songTitles. It's not possible to add songs one by one.
  + .shuffle() - returns a randomly sorted array of all the songs in the songs property. I found and used a shuffle algorith. More info in _References_ below.


## Technologies
* JavaScript ES6

## Setup
NA

## Status
Project is: technically _finished_, there's still one item pending, but I think I'll leave it here.

#### Pending To-Do's 
From the excercise's extra work:
* Create class called Catalog that holds all of the Media items in our library.
* Add more properties to each class (movieCast, songTitles, etc.)

## References
Based on exercise on _Codecademy_'s course _Learn Javascript_

Used the Fisher-Yates (aka Knuth) Shuffle algorithm found here:
https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
http://sedition.com/perl/javascript-fy.html
