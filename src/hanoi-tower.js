

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  // The minimum number of turns for Tower of Hanoi is 2^n - 1
  const turns = Math.pow(2, disksNumber) - 1;

  // Convert turnsSpeed from turns/hour to turns/second
  const turnsPerSecond = turnsSpeed / 3600;

  // Calculate number of seconds (rounded down to the nearest integer)
  const seconds = Math.floor(turns / turnsPerSecond);

  return { turns, seconds };
}

module.exports = {
  calculateHanoi
};
