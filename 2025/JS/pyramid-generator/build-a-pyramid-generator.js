// Generates a text-based pyramid string based on the given character, number of rows, and orientation.
function pyramid(character, rowCount, inverted) {

  // Builds a single row of the pyramid:
  // - Left-pads with spaces to align the row
  // - Adds the character repeated in a symmetrical way: 1, 3, 5, ...
  function buildRow(rowNumber) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1);
  }

  const rows = [];

  // Build each row from top to bottom (1 to rowCount)
  for (let i = 1; i <= rowCount; i++) {
    const row = buildRow(i);
    rows.push(row);
  }

  // If the pyramid is inverted, reverse the order of the rows
  if (inverted) {
    rows.reverse();
  }

  // Join all rows into a single string, separated by newlines
  // Add a newline at the start and end to match strict formatting expectations
  return "\n" + rows.join("\n") + "\n";
}

// Example outputs:
// Regular (not inverted) pyramid with "o"
console.log(pyramid("o", 4, false)); 

// Inverted pyramid with "p"
console.log(pyramid("p", 5, true)); 

