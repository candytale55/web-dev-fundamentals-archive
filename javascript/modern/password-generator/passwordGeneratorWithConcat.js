// Array of characters to use in the password, including uppercase, lowercase, digits, and symbols
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()".split("");

// Function to generate a random password of specified length (passLen)
const generatePassword = (passLen) => {
  let string = ""; // Initialize an empty string to build the password

  // Loop passLen times to pick random characters from the 'characters' array
  for (let i = 0; i < passLen; i++) {
    // Append a randomly selected character from 'characters' to the password string
    string += characters[Math.floor(Math.random() * characters.length)];
  }

  // Return the generated password string
  return string;
}

// Generate a password of length 15
let password = generatePassword(15);

// Output the generated password to the console with a descriptive message
console.log(`Generated password: ${password}`);
