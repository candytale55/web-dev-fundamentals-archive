# Roman_to_Arabic_to_Roman
Functions that convert Roman numbers to Arabic Numbers and vice versa.


## General info
The purpose of the project is just personal learning. 

## Description
* _convertToArabics()_ takes a number parameter _num_ that should be a valid Roman numeral and converts it to Roman numbers using for loops and a switch case.
* _convertsToRomans()_ takes a number parameter _num_ that is divided into units, tens, hundreds, thousands, etc that are entered into an array _numSplit_ (this separation is done by function _separateUnits(num)_). Then each item in array _numSplit_ is checked with a switch case with all the possible values between 3000 and 1 and the Roman equivalent is added to a string _romanNum_. This string is returned.  
* _separateUnits(num)_ I took it from here: https://stackoverflow.com/questions/34110725/convert-number-to-tens-hundreds-thousands

#### To-do list:
* It's missing handling of wrong or invalid inputs.
* It's missing user input - to ask user to give for the numbers to convert.
* The amounts that can be converted from Arabics to Romans go only up to 3000. 
* Do the same in Python. 


## Technologies
* Javascript ES6

## Setup
NA - It's only coding examples, there's no setup.

## Status
Project is: _finished_, - but it's highly probable I'll come back to revist this code.


## References
Based on FreeCodeCamp's excercises.
