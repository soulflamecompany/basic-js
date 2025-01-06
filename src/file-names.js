

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const nameCount = new Map(); // Keeps track of how many times a name has been used
  const result = []; // Array to store the renamed files

  for (const name of names) {
    if (!nameCount.has(name)) {
      // Name is not yet in use
      nameCount.set(name, 1);
      result.push(name);
    } else {
      // Name is already in use, find the next available name with suffix
      let suffix = nameCount.get(name);
      let newName = `${name}(${suffix})`;

      // Ensure the new name is also unique by incrementing until it's not used
      while (nameCount.has(newName)) {
        suffix++;
        newName = `${name}(${suffix})`;
      }

      nameCount.set(newName, 1); // Mark the new name as used
      nameCount.set(name, suffix + 1); // Increment the suffix for the base name
      result.push(newName);
    }
  }

  return result;
}

module.exports = {
  renameFiles
};
