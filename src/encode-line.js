
/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encoded = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    // If the current character is the same as the next one, increment count
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      // Append count (if > 1) and the character to the result
      encoded += (count > 1 ? count : '') + str[i];
      count = 1; // Reset count
    }
  }

  return encoded;
}

module.exports = {
  encodeLine
};
