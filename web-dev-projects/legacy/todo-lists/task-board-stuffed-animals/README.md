# stuffed_animals_task_board

## General info
The purpose of the project is just personal learning

## Description
This project is a board of to-do items organized into columns using grid property declarations.

The project has a lay out container div card-column div's within it. It has three equally sized columns using the grid-template-columns property = 3 equal 1fr pieces inside the CSS rule for .container with a gap of 20 pixels in between the columns. 

The task cards should be arranged within the columns, so each card column is also a grid container.  Each card column has a heading and 5 card elements. The heading takes up 20px and each card to take up 100px. Grid-template-rows property is set to have 1 20px row and 5 100px rows. + repeat function keeps code clean.

Since projects will be added as cards to the Completed Projects column, it will be helpful to use implicit grid properties instead of explicit properties. The first row with the heading should be explicitly 20px, just as the other heading rows are. Every additional row, should be set to 100px.

## Screenshots
![Example screenshot](./img/stuffed-animals-board.png)

## Technologies
* HTML5
* CSS3

## Setup
NA - It's only a coding project, there's no setup.

## Status
Project is: technically _finished_, but it would be nice to add it the functionality to add tasks - kept for future reference.

## References
Based on Codecademy project. Reference Video: https://www.youtube.com/watch?v=VJ32N1SRh84

I did a second try [here](https://github.com/candytale55/stuffed_animals_task_list) which actually adds new cards.
