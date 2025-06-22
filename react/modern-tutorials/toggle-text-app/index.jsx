// Destructure the useState hook from React
const { useState } = React;

// Export the ToggleApp component
export const ToggleApp = () => {
  // Declare a piece of state called isVisible, initially set to false
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the visibility state
  const handleToggleVisibility = () => {
    setIsVisible(!isVisible); // Toggle the boolean value
  };

  // JSX returned by the component
  return (
    <div id="toggle-container">
      
      {/* Button that toggles the visibility when clicked */}
      <button 
        onClick={handleToggleVisibility} 
        id="toggle-button">
        {/* Text on the button changes based on visibility state */}
        {isVisible ? "Hide Message" : "Show Message"}
      </button>

      {/* Conditionally render the message paragraph only if isVisible is true */}
      {isVisible && <p id="message">I love freeCodeCamp!</p>}
    </div>
  );
};
