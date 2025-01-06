

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length; // Number of rows
  const cols = matrix[0].length; // Number of columns

  // Create a result matrix with the same dimensions, filled with zeros
  const result = Array.from({ length: rows }, () => Array(cols).fill(0));

  // Helper function to handle the neighboring cells
  const directions = [
    [-1, -1], [-1, 0], [-1, 1], // Top-left, top, top-right
    [0, -1],          [0, 1],   // Left, right
    [1, -1], [1, 0], [1, 1]     // Bottom-left, bottom, bottom-right
  ];

  // Loop through each cell in the matrix
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col]) {
        // If the current cell contains a mine, increment the count of all its neighbors
        for (const [dx, dy] of directions) {
          const newRow = row + dx;
          const newCol = col + dy;

          // Check if the neighbor is within bounds
          if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
            result[newRow][newCol]++;
          }
        }
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
