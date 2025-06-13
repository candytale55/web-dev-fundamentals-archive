// Get DOM elements needed for interaction
const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');

// Global error flag to stop calculation if input is invalid
let isError = false;

/**
 * Removes invalid characters from input (spaces, +, -)
 */
function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, '');
}

/**
 * Checks if the input is in scientific notation, which is considered invalid
 */
function isInvalidInput(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
}

/**
 * Dynamically adds input fields to the selected meal or exercise section
 */
function addEntry() {
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;

    const HTMLString = `
        <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
        <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
        <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
        <input type="number" min="0" id="${entryDropdown.value}-${entryNumber}-calories" placeholder="Calories" />
    `;

    targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
}

/**
 * Handles form submission and calculates calorie budget
 */
function calculateCalories(e) {
    e.preventDefault(); // Stop form from refreshing the page
    isError = false;

    // Query all number inputs for each meal/exercise section
    const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
    const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
    const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
    const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
    const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");

    // Get calorie values for each section
    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
    const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
    const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

    // Stop execution if an invalid input was found
    if (isError) {
        return;
    }

    // Calculate consumed and remaining calories
    const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
    const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;

    // Determine surplus or deficit
    const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';

    // Display results
    output.innerHTML = `
        <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
        <hr>
        <p>${budgetCalories} Calories Budgeted</p>
        <p>${consumedCalories} Calories Consumed</p>
        <p>${exerciseCalories} Calories Burned</p>
    `;

    // Make output visible
    output.classList.remove('hide');
}

/**
 * Loops through the list of number inputs and adds their values if valid
 */
function getCaloriesFromInputs(list) {
    let calories = 0;

    for (const item of list) {
        const currVal = cleanInputString(item.value);
        const invalidInputMatch = isInvalidInput(currVal);

        if (invalidInputMatch) {
            alert(`Invalid Input: ${invalidInputMatch[0]}`);
            isError = true;
            return null;
        }
        calories += Number(currVal);
    }
    return calories;
}

/**
 * Clears all inputs and resets the UI
 */
function clearForm() {
    const inputContainers = Array.from(document.querySelectorAll('.input-container'));

    for (const container of inputContainers) {
        container.innerHTML = ''; // Clear all food/exercise entries
    }

    budgetNumberInput.value = '';   // Clear budget input
    output.innerText = '';          // Clear output content
    output.classList.add('hide');   // Hide output
}

// Event listeners for UI interactivity
addEntryButton.addEventListener("click", addEntry);
calorieCounter.addEventListener("submit", calculateCalories);
clearButton.addEventListener("click", clearForm);
