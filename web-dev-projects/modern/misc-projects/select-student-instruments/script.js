// script.js

// Array of instrument objects containing category, name, and price.
// This is the main data source for the product list.
const instrumentsArr = [
  { category: "woodwinds", instrument: "Flute", price: 500 },
  { category: "woodwinds", instrument: "Clarinet", price: 200 },
  { category: "woodwinds", instrument: "Oboe", price: 4000 },
  { category: "brass", instrument: "Trumpet", price: 200 },
  { category: "brass", instrument: "Trombone", price: 300 },
  { category: "brass", instrument: "French Horn", price: 4300 },
  { category: "percussion", instrument: "Drum Set", price: 500 },
  { category: "percussion", instrument: "Xylophone", price: 3000 },
  { category: "percussion", instrument: "Cymbals", price: 200 },
  { category: "percussion", instrument: "Marimba", price: 3000 }
];

// Select the <select> dropdown element where the user chooses a category
const selectContainer = document.querySelector("select");

// Select the container element where instrument cards will be rendered
const productsContainer = document.querySelector(".products-container");

/**
 * Generates HTML strings representing instrument cards filtered by category.
 * 
 * @param {string} instrumentCategory - The category of instruments to filter by ("all" returns all).
 * @returns {string} - Concatenated HTML string for all instrument cards matching the category.
 * 
 * The function filters the instrumentsArr array based on the category argument.
 * If "all" is selected, it returns all instruments.
 * It then uses Array.map() to create an HTML snippet for each instrument,
 * and joins them into a single string for rendering.
 */
function instrumentCards(instrumentCategory) {
  const instruments =
    instrumentCategory === "all"
      ? instrumentsArr
      : instrumentsArr.filter(({ category }) => category === instrumentCategory);

  return instruments
    .map(({ instrument, price }) => {
      return `
          <div class="card">
            <h2>${instrument}</h2>
            <p>$${price}</p>
          </div>
        `;
    })
    .join(""); // Join array of strings into one HTML string
}

// Event listener that triggers when user selects a different category
// It updates the products container by injecting the corresponding HTML cards.
selectContainer.addEventListener("change", () => {
  productsContainer.innerHTML = instrumentCards(selectContainer.value);
});
