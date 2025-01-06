

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numStr = String(n); // Convert the number to a string
  let maxNumber = 0;

  // Iterate through each digit
  for (let i = 0; i < numStr.length; i++) {
    // Remove the digit at the current index
    const newNumber = parseInt(numStr.slice(0, i) + numStr.slice(i + 1), 10);
    // Update maxNumber if the new number is larger
    maxNumber = Math.max(maxNumber, newNumber);
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};
