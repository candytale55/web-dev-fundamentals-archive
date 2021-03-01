# Hospital_Vacation_Days_Management_JS
Exercises from Codecademy to understand classes and inheritance. Manage vacation days and other administrative info from hospital employees.

## General info
The purpose of the project is just personal learning. I may revisit this code to find different solutions or to apply it under other context. 

## Description

**_HospitalEmployee_** class accepts two parameters: name and department. 
In the constructor there's an additional property named _ _remainingVacationDays_ set equal to 20 in the constructor. It has a method _takeVacationDays_ accepts one argument named _daysOff_. It subtracts _daysOff_ from the number saved to _ _remainingVacationDays_

**_Doctor_** amd **_Nurse_** classes inherit from the _HospitalEmployee_ class.  

  * The _Doctor_ class has an additional property set inside the constructor _ _insurance_, and 

  * The _Nurse_ class has an additional property set in the constructor _ _certifications_ (array) and a method _.addCertification()_ which  accept one input (newCertification) and it uses the push method to add the newCertification value to the nurse’s certifications array.

Inside the _HospitalEmployee_ class there's a  **static method _generatePassword_** . This method returns a random integer between zero and 10,000.

Note that property names with underscores (like _ _name_ and _ _department_), indicate these properties should not be accessed directly. So there's getters for each of them. 



## Table of contents
* [General info](#general-info)
* [Description](#description)
* [Technologies](#technologies)
* [Setup](#setup)
* [Status](#status)
* [References](#references)


## Technologies
* Javascript ES6

## Setup
NA - It's only coding examples, there's no setup.

## Status
Project is: _finished_, - Just code examples.

## References
Based on Codecademy's _Learn JavaScript_ course, _Classes_

