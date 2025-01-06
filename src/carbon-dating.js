

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (
      typeof sampleActivity !== 'string' || // Check if the input is a string
      isNaN(parseFloat(sampleActivity)) || // Check if it’s a number in string form
      parseFloat(sampleActivity) <= 0 ||   // Activity must be positive
      parseFloat(sampleActivity) > MODERN_ACTIVITY // Activity cannot exceed MODERN_ACTIVITY
  ) {
    return false;
  }

  const activity = parseFloat(sampleActivity);
  const k = 0.693 / HALF_LIFE_PERIOD; // Decay constant
  const age = Math.log(MODERN_ACTIVITY / activity) / k; // Calculate age

  return Math.ceil(age); // Return rounded-up integer
}

module.exports = {
  dateSample
};
