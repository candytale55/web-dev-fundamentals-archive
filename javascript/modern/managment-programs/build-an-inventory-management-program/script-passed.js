// 1. Declare empty array named inventory
let inventory = [];

/*
  2. Function to find the index of a product in the inventory.
     - This function performs a case-insensitive search by converting
       both the input and stored product names to lowercase.
     - Returns the index of the matching product or -1 if not found.
*/
const findProductIndex = productName => {
  const name = productName.toLowerCase();
  return inventory.findIndex(obj => obj.name.toLowerCase() === name);
};

/*
  3. Function to add a new product or update an existing one.
     - Converts product name to lowercase to maintain case-insensitive consistency.
     - If product exists, increases its quantity and logs an update message.
     - If product does not exist, adds it to the inventory and logs an "added" message.
*/
const addProduct = product => {
  const name = product.name.toLowerCase(); // Normalize name
  const index = findProductIndex(name); // Find if product already exists

  if (index !== -1) {
    // Product exists: update quantity
    inventory[index].quantity += product.quantity;
    console.log(`${name} quantity updated`);
  } else {
    // Product does not exist: add to inventory
    inventory.push({ name, quantity: product.quantity });
    console.log(`${name} added to inventory`);
  }
};

/*
  4. Function to remove a product or reduce its quantity.
     - Converts the name to lowercase for consistent comparison.
     - If not found, logs a "not found" message.
     - If the quantity after removal is less than 0, logs an error about insufficient stock.
     - If the quantity becomes 0, removes the product from the inventory.
     - Otherwise, subtracts the quantity and logs how many remain.
*/
const removeProduct = (productName, productQuantity) => {
  const name = productName.toLowerCase(); // Normalize input name
  const index = findProductIndex(name); // Find product in inventory

  if (index === -1) {
    // Product not found
    console.log(`${name} not found`);
    return;
  }

  const remainingQuantity = inventory[index].quantity - productQuantity;

  if (remainingQuantity < 0) {
    // Not enough stock to remove requested quantity
    console.log(`Not enough ${name} available, remaining pieces: ${inventory[index].quantity}`);
  } else if (remainingQuantity === 0) {
    // All quantity used up, remove product from inventory
    inventory.splice(index, 1);
    console.log(`${name} removed from inventory (all used up)`);
  } else {
    // Subtract quantity and update inventory
    inventory[index].quantity = remainingQuantity;
    console.log(`Remaining ${name} pieces: ${inventory[index].quantity}`);
  }
};

//  Example Tests 

addProduct({ name: "FLOUR", quantity: 5 });  // Should log: "flour added to inventory"
removeProduct("FLOUR", 5);                   // Should log: "flour removed from inventory (all used up)"

