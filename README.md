# Record-Collection_FCC_JS
Function  updateRecords keeps updated your musical album collection represented by a JSON object. Each album has a unique id number as its key and several other properties like artist or tracks.

## General info
The purpose of the project is just personal learning.  

## Description
You are get a JSON object **_collection_** representing a part of your musical album collection. Each album in the _collection_ has a unique _id_ number as its key and several other properties. Not all albums have complete information.

 _updateRecords_ function takes an object like _collection_, an _id_, a _prop_ (like _artist_ or _tracks_), and a _value_ that it must update. The function must:

* Always return the entire object.
* If _prop_ isn't _tracks_, and _value_ isn't an empty string, it updates or set that album's _prop_ to _value_.
* If _prop_ is _tracks_ but the album doesn't have a tracks property, create an empty array and add _value_ to it.
* If _prop_ is _tracks_, and _value_ isn't an empty string, add _value_ to the end of the album's existing _tracks_ array.
* If _value_ is an empty string, delete the given _prop_ property from the album.

#### To-do list:
* Do the same on Python

## Technologies
* Javascript ES6
* 
## Setup
NA - It's only coding examples, there's no setup.

## Status
Project is: _in progress_ - Kept for reference.

## References
Based on FreeCodeCamp's excercise _Record Collection_ from subsection _JavaScript Algorithms and Data Structures_ (_Basic JavaScript_ section). I worked on this on year 2021.

