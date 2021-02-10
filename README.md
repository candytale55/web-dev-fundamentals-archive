# Breadcrumb-Arrow_Style
CSS trick to create an arrow effect using the ::before and ::after pseudo-elements to add filled rectangles (with empty content) before and after each list item in the breadcrumb path.

## General info
The purpose of the project is just personal learning. Also kept for future reference.

## Description
* This works by using the _::before_ and _::after_ pseudo-elements to add filled rectangles (content="" - empty) before and after each list item
`.breadcrumb li a::before, .breadcrumb li a::after {`  
  ` content: "";`  
  ` position: absolute;`  
  ` border-color: darkcyan;`  
  ` border-style: solid;`  
  ` border-width: 15px 5px;`  
`}`  

* The total width of the pseudo-elements is 10px, since the border has 5px on the left and 5px on the right. To move the pseudo-elements to the proper location
`.breadcrumb a::before {`  
`  left: -10px;`  
`}`  
`.breadcrumb a::after {`  
`  left: 100%;`  
`}`  

* The _after_ elements are styled as _heads_ by setting the border color to transparent except for the border-left-color:
`.breadcrumb a::after {`  
 ` left: 100%;`  
 ` border-color: transparent;`  
 ` border-left-color: darkcyan;`  
`}`  
* By setting a portion of the border to transparent, it creates the tail of the arrow:  
`.breadcrumb a::before {`    
`  left: -10px;`  
`  border-left-color: transparent;`  
`}`

## Screenshots
![Example screenshot](screenshot.jpg)

## Technologies
* HTML5
* CSS3

## Setup
NA - It's only coding examples, there's no setup.

## Status
Project is: _finished_, - Kept for reference.

## References
Based on Codecademy's _Learn Navigation Design_ course
