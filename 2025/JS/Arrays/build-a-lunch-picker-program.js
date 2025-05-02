/* This works with an array of lunches, adding and removing items from the array, and randomly selecting a lunch option.  */

const lunches = [];

console.log("------ addLunchToEnd -------");

function addLunchToEnd(arr,str){
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}

console.log(addLunchToEnd(lunches,"Tacos"));
console.log(addLunchToEnd(lunches, "Burger"));
console.log(addLunchToEnd(lunches, "Ice Cream"));



console.log("----------------------------");
console.log("----- addLunchToStart ------");


function addLunchToStart(arr,str){
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

console.log(addLunchToStart(lunches,"Salad"));
console.log(addLunchToStart(lunches,"Tempanyaki"));
console.log(addLunchToStart(lunches,"Pizza"));



console.log("----------------------------");
console.log("----- removeLastLunch ------");



function removeLastLunch(arr){
   if (arr.length == 0){
    console.log("No lunches to remove.");
   } else if (arr.length > 0){
     console.log(`${arr[arr.length-1]} removed from the end of the lunch menu.`);
     arr.pop();  
  }
  return arr;
}

console.log(removeLastLunch(lunches));
console.log("Prueba con array vacío: ")
console.log(removeLastLunch([]));



console.log("----------------------------");
console.log("----- removeFirstLunch ------");

function removeFirstLunch(arr){
  if (arr.length == 0){
    console.log("No lunches to remove.");
   } else if (arr.length > 0){
     console.log(`${arr[0]} removed from the start of the lunch menu.`);
     arr.shift();
   }
   return arr;
} 

console.log(removeFirstLunch(lunches));
console.log("Prueba con array vacío: ")
console.log(removeFirstLunch([]));




console.log("----------------------------");
console.log("----- getRandomLunch ------");


function getRandomLunch(arr){
  if (arr.length == 0){
    console.log("No lunches available.");
  } else {
    let randomNumber = Math.round(Math.random() * (arr.length - 1));  
    console.log(`Randomly selected lunch: ${arr[randomNumber]}`); 
  }
  return arr;  
}

console.log(getRandomLunch(lunches));
console.log("Prueba con array vacío: ")
console.log(getRandomLunch([]));




console.log("----------------------------");
console.log("----- showLunchMenu ------");

function showLunchMenu(arr){
  if (arr.length == 0){
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${arr.join(", ")}`)
  }
  return arr;
}

console.log(showLunchMenu(lunches));
console.log("Prueba con array vacío: ")
console.log(showLunchMenu([]));
