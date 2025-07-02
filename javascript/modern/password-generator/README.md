# Password Generator App

A simple **random password generator** built with **vanilla JavaScript**.

This project was created as part of a [freeCodeCamp Password Generator Lab](https://www.freecodecamp.org/learn/full-stack-developer/lab-password-generator/lab-password-generator) to practice using functions and JavaScript’s `Math` methods.

---

## Project Status

**Completed: July 2025**
This project fulfills all user stories and passes the lab tests for generating random passwords of specified lengths using two different approaches.

---

## Technologies Used

* **JavaScript (ES6+)** – Core logic using functions, loops, arrays, and string manipulation

> Tested in Chrome and Firefox

---

## Features

* Generates a random password of any given length
* Uses a comprehensive character set including uppercase, lowercase, digits, and symbols
* Outputs the generated password to the console with a clear message

---

## File Structure

```
.
├── passwordGeneratorWithConcat.js    # Password generator using string concatenation
├── passwordGeneratorWithPush.js      # Password generator using array push + join
└── README.md                        # Project overview and instructions
```

---

## Usage

1. Open either `passwordGeneratorWithConcat.js` or `passwordGeneratorWithPush.js` in a JavaScript environment (browser console, Node.js, etc.)
2. Call the `generatePassword(passLen)` function with your desired password length, for example:

```js
let password = generatePassword(15);
console.log(`Generated password: ${password}`);
```

3. View the generated password in the console.

---

## Comparison of Approaches

| Approach                              | Description                                                                                | Pros                                                                | Cons                                                                     |
| ------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **Using Array `.push()` + `.join()`** | Builds the password by pushing random characters into an array, then joining into a string | Clear structure, easy to understand                                 | Slightly more memory overhead due to array creation                      |
| **Using String Concatenation (`+=`)** | Builds the password by directly concatenating characters into a string                     | Simple and concise; marginally better performance for short strings | Strings are immutable in JS; can be less efficient for very long strings |

Both implementations fulfill the user stories and produce secure random passwords for typical use cases.

---

## Educational Purpose

This project is designed to help beginners:

* Practice writing and using JavaScript functions with parameters
* Understand how to work with arrays and strings
* Learn to use `Math.random()` and `Math.floor()` for random selection
* Explore different ways to build strings dynamically in JavaScript

---

## TODO

* Replace `Math.random()` with a cryptographically secure random number generator such as the Web Crypto API (`window.crypto.getRandomValues`) for stronger password security, especially in production environments.
* Implement input validation to ensure the password length parameter is a positive integer within reasonable bounds.
* Add functionality to guarantee the generated password includes at least one uppercase letter, one lowercase letter, one digit, and one special character for enhanced complexity.
* Explore performance differences and memory usage between the concatenation and array push methods for very long passwords.

---

## Acknowledgements

* Built as part of the [freeCodeCamp Full Stack Developer Password Generator Lab](https://www.freecodecamp.org/learn/full-stack-developer/lab-password-generator/lab-password-generator)


