/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/


function titleCase(str) {
  str = str.toLowerCase().split(" ");
  let newStrArray = [];
  let capWord = ""
  for (let i=0; i<=str.length-1; i++){
    capWord = "";
    capWord += str[i][0].toUpperCase();
    for (let j=1; j<=str[i].length-1; j++){
      capWord += str[i][j];
    }
    newStrArray.push(capWord);
  }
  return newStrArray.join(" ");
}




//TESTS:
console.log(titleCase("I'm a little tea pot"));
// I'm A Little Tea Pot
console.log(titleCase("sHoRt AnD sToUt"));
// Short And Stout
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
// Here Is My Handle Here Is My Spout
console.log(titleCase("mAY tHE fORCE bE wITH yOU"));
// May The Force Be With You
console.log(titleCase("Anita lava la tina"));
// Anita Lava La Tina
console.log(titleCase("piña PIÑA piña, PARA la NIÑA")); 
// Piña Piña Piña, Para La Niña
