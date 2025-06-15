// Select all elements with the class 'favorite-icon' (the heart buttons)
const buttons = document.querySelectorAll('.favorite-icon');

// Function to toggle the heart icon's filled state when clicked
function toggleHeart(event) {
  const button = event.currentTarget; // Get the button that triggered the event

  if (button.classList.contains('filled')) {
    // If the button is already filled (user has favorited it), unfill it
    button.classList.remove('filled');           // Remove the 'filled' CSS class
    button.innerHTML = '&#9825;';                 // Set innerHTML to empty heart (♡)
  } else {
    // If the button is not filled, mark it as favorited
    button.classList.add('filled');               // Add the 'filled' CSS class
    button.innerHTML = '&#10084;';                 // Set innerHTML to solid heart (❤)
  }
}

// Attach the toggleHeart function as a click event listener to each heart button
buttons.forEach(button => {
  button.addEventListener('click', toggleHeart);
});
