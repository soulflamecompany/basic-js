

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // Extract the heights that are not -1 and sort them
  const sortedHeights = arr.filter(num => num !== -1).sort((a, b) => a - b);

  let sortedIndex = 0; // Index to track the position in the sortedHeights array
  return arr.map(value => {
    if (value === -1) return value; // Keep -1 in its original position
    return sortedHeights[sortedIndex++]; // Replace with sorted height
  });
}

module.exports = {
  sortByHeight
};
