// Select the main container that will display the story and whose border color changes
const storyContainer = document.querySelector(".story-container");

// Select the buttons by their IDs for each story genre
const scaryStoryBtn = document.getElementById("scary-btn");
const funnyStoryBtn = document.getElementById("funny-btn");
const adventureStoryBtn = document.getElementById("adventure-btn");

// Select the paragraph element where the story text will be displayed
const resultParagraph = document.getElementById("result");

// Object storing stories and their corresponding border colors by genre
const storyObj = {
    scary: {
        story: `In the dark woods, a group of friends stumbled upon an old, abandoned cabin. They enter the cabin and awaken something malevolent that had been dormant for centuries.`,
        borderColor: "#ee4b2b", // Red-ish border color for scary stories
    },
    funny: {
        story: `During a camping trip, Mark decided to show off his culinary skills by cooking dinner over an open fire. However, his attempt caused him to burn the dinner as well as his eyebrows off.`,
        borderColor: "#f1be32", // Yellow-ish border color for funny stories
    },
    adventure: {
        story: `Lost in the heart of the Amazon rain forest, Sarah and Jake stumbled upon an ancient temple. They braved deadly traps and encountered strange wildlife, all while deciphering cryptic clues left behind by a mysterious civilization.`,
        borderColor: "#acd157" // Green-ish border color for adventure stories
    },
};

// Function to update the story text and border color based on the selected genre
function displayStory(genre) {
    // Check if the genre exists as a key in the storyObj object
    if (storyObj.hasOwnProperty(genre)) {
        // Set the paragraph's text to the story for the selected genre
        resultParagraph.textContent = storyObj[genre].story;
        // Change the border color of the container to match the genre's color
        storyContainer.style.borderColor = storyObj[genre].borderColor;
    }
}

// Event listeners on each button to call displayStory with the respective genre string
// Using arrow functions to ensure displayStory is called only on button click (not immediately)
scaryStoryBtn.addEventListener("click", () => displayStory("scary"));
funnyStoryBtn.addEventListener("click", () => displayStory("funny"));
adventureStoryBtn.addEventListener("click", () => displayStory("adventure"));

