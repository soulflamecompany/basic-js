

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      // If it's not an array, the depth is 0 (not applicable for this method)
      return 0;
    }

    // Use recursion to calculate the depth of nested arrays
    return 1 + arr.reduce((maxDepth, item) => {
      const itemDepth = this.calculateDepth(item); // Recursively calculate depth
      return Math.max(maxDepth, itemDepth); // Keep track of the maximum depth
    }, 0);
  }
}

module.exports = {
  DepthCalculator
};
