/*
ConvertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.

To use map is convenient but you’re not allowed to use it here.
*/


const convertToBaby = (array) => {
  let newarray = [];
  for (let x = 0; x < array.length; x++){
    newarray.push("baby " + array[x]);
  }
  return newarray;
}





// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 

