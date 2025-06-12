# counting_cards_FCC_JS (Counting Cards - Blackjack)
Card counting function that increments or decrements a global count variable according to the card's value on a table of values. Returns a string with the current count and the string "Bet" if the count is positive, or "Hold" if the count is zero or negative. 

The purpose of the project is just personal learning.

## Background info
In Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting. **More high cards remaining in the deck favors the player.** For this function, each card value must be according to this table:

| Count Change	|  Cards |
| :-----------: |:------:|
|+1	      |2, 3, 4, 5, 6 |
|0	      | 7, 8, 9      |
|-1	|10, 'J', 'Q', 'K', 'A'|

* When the count is positive, the player should bet high.
* When the count is zero or negative, the player should bet low.

## Description
Card counting function **_cc_** takes a _card_ parameter, which can be a number or a string. The function increments or decrements the global count variable according to the card's value on a table of values and returns a string with the current count and the string "Bet" if the count is positive, or "Hold" if the count is zero or negative. 

Example Output:  
```
-3 Hold  
 5 Bet  
```

#### To-do list:
* Do the same in Python

## Technologies
* Javascript ES6

## Setup
NA - It's only coding examples, there's no setup.

## Status
Project is: _in progress_ - Kept for reference.

## References
Based on FreeCodeCamp's excercise _Counting Cards_ from subsection _JavaScript Algorithms and Data Structures_ (_Basic JavaScript_ section).
