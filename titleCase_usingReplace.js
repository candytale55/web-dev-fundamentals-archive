/*  
USING REPLACE
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.  
For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/


function titleCase(str) {
  str = str.toLowerCase().split(" ");
  let newStrArray = [];

  for (let i=0; i<=str.length-1; i++){
    let newWord = "";
    newWord = str[i].replace(str[i][0], str[i][0].toUpperCase())
    newStrArray.push(newWord);
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
