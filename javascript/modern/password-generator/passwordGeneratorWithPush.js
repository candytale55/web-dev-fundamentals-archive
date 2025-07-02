// Array of characters to be used in the password, including uppercase, lowercase, digits, and symbols
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()".split("");

// Function to generate a random password of specified length (passLen)
const generatePassword = (passLen) => {
  const password = []; // Initialize an empty array to hold password characters

  // Loop passLen times to select random characters from the 'characters' array
  for (let i = 0; i < passLen; i++) {
    // Generate a random index based on the length of the 'characters' array
    // and push the character at that index into the password array
    password.push(characters[Math.floor(Math.random() * characters.length)]);
  }

  // Join the array of characters into a single string and return it as the password
  return password.join("");
}

// Generate a password of length 15
let password = generatePassword(15);

// Output the generated password to the console
console.log(`Generated password: ${password}`);
