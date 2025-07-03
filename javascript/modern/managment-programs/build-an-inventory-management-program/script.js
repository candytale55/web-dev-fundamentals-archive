let inventory = [];

// Initial Inventory for testing purposes
inventory = [
  { name: 'pen', quantity: 30 },
  { name: 'pencil', quantity: 50 },
  { name: 'notebook', quantity: 20 },
  { name: 'eraser', quantity: 1 }
];

// Normalize all product names in the inventory to lowercase for consistent comparisons
inventory = inventory.map(item => ({
  name: item.name.toLowerCase(),
  quantity: item.quantity
}));

// Finds the index of a product in the inventory by its (case-insensitive) name
const findProductIndex = productName => {
  const name = productName.toLowerCase();
  const index = inventory.findIndex(obj => obj.name === name);
  return index;
};

// Adds a product to the inventory or updates quantity if it already exists
const addProduct = product => {
  const name = product.name.toLowerCase();
  const index = findProductIndex(name);

  if (index !== -1) {
    // If product exists, increase its quantity
    inventory[index].quantity += product.quantity;
    console.log(`${name} quantity updated`);
    console.log(`total ${name} are now ${inventory[index].quantity}`);
  } else {
    // If product does not exist, add it to the inventory
    inventory.push({ name, quantity: product.quantity });
    console.log(`${name} added to inventory`);
    console.log(`total ${name} are now ${product.quantity}`);
  }
};

// Removes a certain quantity of a product from the inventory
const removeProduct = (productName, productQuantity) => {
  const name = productName.toLowerCase();
  const index = findProductIndex(name);

  if (index === -1) {
    // If product not found, log message
    console.log(`${name} not found`);
    return;
  }

  const remainingQuantity = inventory[index].quantity - productQuantity;

  if (remainingQuantity < 0) {
    // Not enough items to remove
    console.log(`Not enough ${name} available, remaining pieces: ${inventory[index].quantity}`);
  } else if (remainingQuantity === 0) {
    // All items removed, delete product from inventory
    inventory.splice(index, 1);
    console.log(`${name} removed from inventory (all used up)`);
  } else {
    // Some quantity remains after removal
    inventory[index].quantity = remainingQuantity;
    console.log(`Remaining ${name} pieces: ${inventory[index].quantity}`);
  }
};

// ---------- Test cases to demonstrate functionality ----------

addProduct({ name: "PeNcil", quantity: 4 });      // Should update pencil quantity
addProduct({ name: "Paper", quantity: 4 });       // Should add paper to inventory
addProduct({ name: "FLOUR", quantity: 5 });       // Should add flour to inventory
addProduct({ name: "FLoUR", quantity: 5 });       // Should update flour quantity

removeProduct("pencil", 5);                       // Should reduce pencil quantity
removeProduct("paper", 15);                       // Should show not enough paper
removeProduct("flour", 5);                        // Should reduce flour quantity
removeProduct("meat", 5);                         // Should log "meat not found"
removeProduct("paper", 4);                        // Should remove paper completely
addProduct({ name: "Paper", quantity: 4 });       // Should re-add paper to inventory
