// Arrays and Functions

const concept = ['arrays', 'can', 'be', 'mutated'];
console.log(concept);

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);// [ 'arrays', 'can', 'be', 'MUTATED' ]

const removeElement = (newArr) =>{
  newArr.pop();
}

removeElement(concept);
console.log(concept);


const flowers = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
  arr.push('lily');
}

addFlower(flowers);

console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']


/*
What happens if we try to change an array inside a function? 
Does the array keep the change after the function call or is it scoped to inside the function?

We call .push() on an array inside a function on the flowers array that has 3 elements. 
We call the function addFlower() that has a parameter of arr and uses .push() to add a 'lily' element into arr. 
The value of flowers and it now includes the 'lily' element. The array was mutated.

When you pass an array into a function, if the array is mutated inside the function, 
that change will be maintained outside the function as well. 

This concept is also explained as pass-by-reference since what we’re actually passing the function 
is a reference to where the variable memory is stored and changing the memory.
*/
