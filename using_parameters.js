// Parameters and Arguments

/* Functions can take inputs and use them to perform a task. We can specify parameters within the parenthesis. 

Function's parameters are placeholders for information that will be passed to the function when called. When called they are arguments.*/

// You manage an online store. When a customer places an order, you send them a thank you note. 

function sayThanks(name) {
  console.log('Thank you for your purchase '+ name +'! We appreciate your business.');
}

sayThanks('Thomas'); // Thomas is an argument

sayThanks('Cole'); // Cole is an argument



// Computes the area of a rectangle, based on two inputs, width and height

const calculateArea = (width, height) => {
  console.log(width * height);
}


function calculateArea_too(width, height){
  console.log(width * height);
}
calculateArea(20, 40);
