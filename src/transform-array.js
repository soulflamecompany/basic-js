

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // Check if input is an array
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  // Create a copy of the array to collect results
  const result = [];

  // Iterate through the control sequences
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    switch (element) {
      case '--discard-next':
        // Skip the next element if it exists
        if (i + 1 < arr.length) {
          i++; // Move index forward to "discard" the next value
        }
        break;

      case '--discard-prev':
        // Remove the previous element if it exists and was not already removed
        if (result.length > 0 && arr[i - 1] === result[result.length - 1]) {
          result.pop(); // Remove the last element from result
        }
        break;

      case '--double-next':
        // Duplicate the next element if it exists
        if (i + 1 < arr.length) {
          result.push(arr[i + 1]);
        }
        break;

      case '--double-prev':
        // Duplicate the previous element if it exists and was not removed
        if (i > 0 && arr[i - 1] === result[result.length - 1]) {
          result.push(arr[i - 1]);
        }
        break;

      default:
        // Normal element, just add to the result
        result.push(element);
        break;
    }
  }

  return result;
}

module.exports = {
  transform
};
