let simpleArray = ['one', 2, 'three', true, false, undefined, null, NaN, [":P"]];
console.log("simpleArray: " +simpleArray); // one,2,three,true,false,,,NaN,:P
console.log("simpleArray.length: "+simpleArray.length); //9

let multidimensionalArray = [
  [ 
    {  one: 1,  two: 2  },
    {  three: 3, four: 4 }
  ],
  [ "alpha", {fish: "gold", cat:"brownie"}, 1, true, [1,2,3], null, "caramel"],
  "Ronda"
];

console.log("multidimensionalArray: " + multidimensionalArray);
console.log("multidimensionalArray.length: "+multidimensionalArray.length);  
// [object Object],[object Object],alpha,[object Object],1,true,1,2,3,,caramel,Ronda

// 1st element is another Array that contains 2 objects with two elements each
console.log("multidimensionalArray[0]: "+multidimensionalArray[0]);

console.log("multidimensionalArray[1]: "+multidimensionalArray[1]);
console.log("multidimensionalArray[2]: "+multidimensionalArray[2]);


let yourArray = [1, true, 3, "Muppet", null]; 
