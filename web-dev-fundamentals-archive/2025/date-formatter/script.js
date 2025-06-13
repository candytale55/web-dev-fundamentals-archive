// Get references to the paragraph displaying the date and the select dropdown element
const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

// Create a new Date object to get the current system date and time
const date = new Date();

// Extract day, month, year, hours, and minutes from the current date
// Note: month is 0-based in JS, so we add +1 to get the correct calendar month
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

// Format the initial date as "day-month-year" for default display
const formattedDate = `${day}-${month}-${year}`;
currentDateParagraph.textContent = formattedDate;

// Listen for user selection in the dropdown to change the date format
dateOptionsSelectElement.addEventListener("change", () => {

    // Switch between different formatting options based on user selection
    switch (dateOptionsSelectElement.value) {
        case "yyyy-mm-dd":
            // Reverse the default "day-month-year" format to "year-month-day"
            // Achieved by splitting, reversing, and rejoining the date string
            currentDateParagraph.textContent = formattedDate
                .split("-")
                .reverse()
                .join("-");
            break;
        case "mm-dd-yyyy-h-mm":
            // Display format with time: "month-day-year [X] Hours [Y] Minutes"
            currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
            break;
        default:
            // Fallback to default format if an unrecognized option is selected
            currentDateParagraph.textContent = formattedDate;
    }
});
