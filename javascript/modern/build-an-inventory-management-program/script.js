let inventory = [];

// Initial Inventory for testing purposes
inventory = [
  { name: 'pen', quantity: 30 },
  { name: 'pencil', quantity: 50 },
  { name: 'notebook', quantity: 20 },
  { name: 'eraser', quantity: 1 }
];

inventory = inventory.map(item => ({
  name: item.name.toLowerCase(),
  quantity: item.quantity
}));

const findProductIndex = productName => {
  const name = productName.toLowerCase();
  const index = inventory.findIndex(obj=> obj.name=== name);
  return index;
};


const addProduct = product => {
    const index = findProductIndex(product.name);
  if (index !== -1){
    inventory[index].quantity += product.quantity;
    console.log(`${product.name} quantity updated`); 
    console.log(`total ${product.name} are now ${inventory[index].quantity}`);

  } else {
    inventory.push(product);
    console.log(`${product.name} added to inventory`);
    console.log(`total ${product.name} are now ${inventory[index].quantity}`);
  }
};

addProduct({ name: 'pencil', quantity: 4 });

const removeProduct = (productName, productQuantity) => {
   const index = findProductIndex(productName);
   if (index === -1){
     console.log(`${productName} not found`);
   } 
   else {
     if (inventory[index].quantity -= productQuantity < 0){
// If the quantity in the inventory is not enough to perform the subtraction, the removeProduct function should log the string Not enough <product-name> available, remaining pieces: <product-quantity> to the console.
     } 
     if (inventory[index].quantity -= productQuantity === 0){
       // If the quantity after the subtraction is zero, removeProduct should remove the product object from the inventory. 
     }
     else {
       inventory[index].quantity -= productQuantity;
     console.log(
       `Remaining ${inventory[index].name} pieces: 
       ${inventory[index].quantity}`
       );
     }
     
   }
}

removeProduct("pencil", 2);
