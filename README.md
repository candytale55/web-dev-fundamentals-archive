# Build-a-Library_JS
You’ve become head librarian at your local Books-‘N-Stuff and  you realize you’re still using index cards to handle the item's info. Let’s get to work modernizing your new digs.

## General info

Books-‘N-Stuff carries three different types of media: books, CDs, and movies. 
There will be a parent class named Media with three subclasses: Book, Movie, and CD. 

All _Media_ entities have the following:
+ title (string), 
+ isCheckedOut (boolean, initially false)
+ ratings (array, initially empty)
+ Getters: all properties have a getter
Methods: 
+ __.getAverageRating()__  Gets the average of ratigs by using reduce() to sum the values in _ratings_ dividiving it by _ratings.length_ and returning it.  
+ __.toggleCheckOutStatus()__ toggles boolean on _isCheckedOut_  
+ __.addRating()__ 

__Book__ class extends Media and has these additonal values:
+ author (string)
+ pages (number),

__Movie__ class extends Media and has these additonal values:
+ director (string), 
+ runTime (number),

## Technologies
* JavaScript ES6

## Setup
NA

## Status
Project is: _in progress_, there are a couple of optional questions I did not answer. I'll come back sometime to finish.

## References
Based on exercise on _Codecademy_'s course _Learn Javascript_


