

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false; // Validate that members is an array

  return members
      .filter(member => typeof member === 'string') // Keep only string values
      .map(name => name.trim()[0].toUpperCase()) // Trim spaces and convert the first letter to uppercase
      .sort() // Sort the array alphabetically
      .join(''); // Join the first letters to form the team name
}

module.exports = {
  createDreamTeam
};
