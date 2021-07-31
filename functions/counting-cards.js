/*
card counting function cc takes a card parameter, which can be a number or a string. The function increments or decrements the global count variable according to the card's value on a table of values and returns a string with the current count and the string "Bet" if the count is positive, or "Hold" if the count is zero or negative. 
*/


var count = 0;

function cc(card) {
  var doThis = "";
  if (typeof card != "number" ){
    card = card.toUpperCase();
  }
  if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A" ){
    count += -1;
  }
  else if (card < 10 && card >6 ){
    count += 0;
  }
  else if (card > 1 && card <7){
    count += 1;
  }
  else {
    return "Check your input, that's an invalid card!"
  }
  if (count > 0) {
    doThis = "Bet";
  } 
  else if (count <= 0){
    doThis = "Hold";
  }
  return count + " " + doThis;
}

console.log(cc(2)); 
// 1 Bet
console.log(cc(3)); 
// 2 Bet
console.log(cc(7)); 
// 2 Bet
console.log(cc('K'));
// 1 Bet
console.log(cc('k'));
// 1 Hold 
console.log(cc('A'));
// -1 Hold
console.log(cc('wrong value'));
// Check your input, that's an invalid card!
console.log(cc(-10));
// Check your input, that's an invalid card!