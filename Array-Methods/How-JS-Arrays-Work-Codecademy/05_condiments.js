// Arrays with let and const

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
console.log(condiments);

condiments[0] = 'Mayo';
console.log(condiments);

// reassign condiments to be a new array that contains a single string ['Mayo']
condiments = ['Mayo'];
console.log(condiments);

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
console.log(utensils);
//re-assign the last item from the utensils array to 'Spoon'.

utensils[utensils.length-1] = 'Spoon';
console.log(utensils);



/*
you can declare variables with both the let and const keywords. Variables declared with let can be reassigned.

Variables declared with the const keyword cannot be reassigned. However, elements in an array declared with const remain mutable. 
Meaning that we can change the contents of a const array, but cannot reassign a new array or a different value.

The instructions below will illustrate this concept more clearly. 
Pay close attention to the similarities and differences between the condiments array and the utensils array as you complete the steps.
*/
