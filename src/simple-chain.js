

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    // Returns the length of the current chain
    return this.chain.length;
  },

  addLink(value) {
    // Adds a new link to the chain
    this.chain.push(`( ${value} )`);
    return this; // Enables chaining
  },

  removeLink(position) {
    // Validates the position and removes the link at the specified position
    if (
        !Number.isInteger(position) || // Position must be an integer
        position < 1 || // Position must be greater than 0
        position > this.chain.length // Position must exist within the chain
    ) {
      this.chain = []; // Clear the chain to reset
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1); // Remove the link
    return this; // Enables chaining
  },

  reverseChain() {
    // Reverses the order of the chain
    this.chain.reverse();
    return this; // Enables chaining
  },

  finishChain() {
    // Combines the chain into a string, clears the chain, and returns the result
    const result = this.chain.join("~~");
    this.chain = []; // Resets the chain
    return result;
  },
};

module.exports = {
  chainMaker
};
