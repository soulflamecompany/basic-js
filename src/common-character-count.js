

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let s2Array = s2.split(''); // Convert second string to an array

  for (let char of s1) {
    if (s2Array.includes(char)) {
      count++; // Increment count for each common character
      s2Array.splice(s2Array.indexOf(char), 1); // Remove the matched character from the second string
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
