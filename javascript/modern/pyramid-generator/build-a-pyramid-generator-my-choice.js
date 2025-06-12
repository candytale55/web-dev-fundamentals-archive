// The pyramid can be regular or inverted based on the `inverted` flag.

function generatePyramid(character, rowCount, inverted = false) {

  // Builds a single row: Adds spaces on both sides for visual centering 
  function buildRow(rowNumber) {
    const spaces = " ".repeat(rowCount - rowNumber); // Left & right padding
    const chars = character.repeat(2 * rowNumber - 1); // The number of characters increases by 2 per row: 1, 3, 5, ...

    return spaces + chars + spaces;
  }

  const rows = [];

  // Construct each row from 1 to rowCount
  for (let i = 1; i <= rowCount; i++) {
    const row = buildRow(i);

    // If inverted, add each new row to the beginning (top becomes bottom)
    if (inverted) {
      rows.unshift(row);
    } else {
      rows.push(row);
    }
  }

  // Combine all rows into a single string separated by newline characters 
  // No extra newline at the start or end
  return rows.join("\n");
}
