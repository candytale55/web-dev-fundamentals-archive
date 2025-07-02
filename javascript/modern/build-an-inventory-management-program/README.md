# Inventory Management Program

A simple inventory system built using **vanilla JavaScript**, designed to allow adding, updating, finding, and removing products from a central inventory. Each product is stored as an object with a `name` and `quantity`.

This project was developed as part of the [freeCodeCamp Inventory Management Lab](https://www.freecodecamp.org/learn/full-stack-developer/lab-inventory-management-program/build-an-inventory-management-program), where learners create a small but functional inventory manager while practicing core programming concepts like arrays, functions, conditionals, and console output.

---

## Project Status

**Completed: July 2025**
This project was completed by writing two versions of the inventory manager:

* One using `.map()` for name normalization (initial build)
* Another version adhering strictly to the test constraints of the freeCodeCamp curriculum (final, test-passing version)

---

## Technologies Used

* **JavaScript (ES6+)** – Arrays, arrow functions, conditional logic, and string methods like `.toLowerCase()`

> This project runs entirely in the browser JavaScript console or as part of a Node.js script. No external libraries or frameworks required.

---

## Features

* Case-insensitive product name matching
* Add new products to the inventory
* Update the quantity of existing products
* Remove product quantities, or remove the product entirely if quantity reaches zero
* Logs feedback for each operation (e.g. product added, not found, quantity updated, etc.)

---

## Files

```
.
├── script.js          # Original version using array map to normalize inventory data
├── script-passed.js   # Final solution that passed all freeCodeCamp tests
```

---

## Key JavaScript Concepts Used

| Concept                | Description                                                  |
| ---------------------- | ------------------------------------------------------------ |
| `Array.findIndex()`    | Finds the position of a product in the inventory             |
| `String.toLowerCase()` | Ensures product names are treated case-insensitively         |
| `Array.push()`         | Adds new products to the inventory                           |
| `Array.splice()`       | Removes a product from the inventory                         |
| Conditional logic      | Handles various inventory states (not found, updated, empty) |
| Console logging        | Outputs specific messages required to pass tests             |

---

## Setup Instructions

1. Copy the files to your local machine.

2. Open either `script.js` or `script-passed.js` in your code editor or browser console.

3. To test the program:

   * Call `addProduct({ name: "rice", quantity: 10 })`
   * Call `removeProduct("rice", 5)`
   * Use other examples based on the user stories in the tutorial.

> No HTML/CSS or UI elements are included — the program runs in a JavaScript environment only.

---

## Educational Purpose

This project was built to help beginners solidify their understanding of:

* Arrays of objects as data structures
* Writing clean and testable functions
* Using string methods to normalize user input
* Designing small command-line-style applications

---

## Acknowledgements

* Built for the [freeCodeCamp Full Stack Developer Lab – Inventory Management Program](https://www.freecodecamp.org/learn/full-stack-developer/lab-inventory-management-program/build-an-inventory-management-program)
