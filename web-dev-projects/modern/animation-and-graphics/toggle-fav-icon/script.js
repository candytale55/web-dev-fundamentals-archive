// Select all elements with the class 'favorite-icon' (the heart buttons)
const buttons = document.querySelectorAll('.favorite-icon');

// Loop through each button and attach a click event listener
buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('filled')) {
      // If the button is already filled (user has favorited it), unfill it
      button.classList.remove('filled');
      button.innerHTML = '&#9825;'; // Unicode for empty heart (♡)
    } else {
      // If the button is not filled, mark it as favorited
      button.classList.add('filled');
      button.innerHTML = '&#10084;'; // Unicode for solid heart (❤)
    }
  });
});
