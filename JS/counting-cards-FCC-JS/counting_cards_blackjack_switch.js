/*
Counting Cards in Blackjack with a switch function

A function that receives a card parameter (number or string) and increment or decrement the global count variable according to the card's value. The function returns a string with the current count and "Bet" if count is positive or "Hold" if negative.

Count	Cards
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'K', 'A'

*/


var count = 0;

function cc(card) {
  // Only change code below this line

  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
  count++;
  break;
    // case 7, 8, 9 we don't need to do anything, so we don't add case for them.
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
  count--;
  break;
  }

var holdorbet= 'Hold';
if(count>0){
  holdorbet = 'Bet';
}
  console.log(count + " " + holdorbet)
  return count + " " + holdorbet;

  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
