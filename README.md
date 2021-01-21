# School-Catalogue_JS

# General info
Digital school catalog that holds quick reference material for each school in New York City for the city's Department of Education.

A parent _School_ class and three child classes (PrimarySchool, MiddleSchool, HighSchool).


## Features
Classes have the following properties, getters, setters, and methods:

### School

  #### Properties:
  * name (string), 
  * level (one of three strings: 'primary', 'middle', or 'high')
  * numberOfStudents (number)

  #### Getters: 
  * all properties have getters<br>
  
  #### Setters: 
  * for the numberOfStudents property<br>
  
  #### Methods: <br>
  * _.quickFacts()_  <br>
  * _.pickSubstituteTeacher()_ (static method) This method takes one parameter _substituteTeachers_ that is an array of strings. The method randomly generates a number between 0 and one less than the length of the substituteTeachers array to use as index and return a substitute teacher.


### Primary 
  * extends School <br>
  * Properties: pickupPolicy (string)<br>

### Middle 
  * extends School <br>
  * Does not include any additional properties or methods<br>

### High 
  * extends School <br>
  * Properties: sportsTeams (array of strings)<br>
  
## To-do list:
* Add more properties to each class (averageTestScores, schoolOverview, etc.) <br>
* Create a class called SchoolCatalog that holds a collection of schools. <br>
* Create an instance of SchoolCatalog for primary, middle, and high schools. <br>

## Screenshots
![Example screenshot](./img/screenshot.png)

## Technologies
* Javascript ES6

## Setup
NA - It's only coding examples, there's no setup.

## Status
Project is: technically _finished_, but I will probably fix those items in the To-Do list later.

## References
_School Catalogue_ is a Codecademy project. 
