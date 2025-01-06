

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // If no date is provided
  if (!date) return 'Unable to determine the time of year!';

  // Validate if the input is a valid Date object
  try {
    // Check if it's a genuine Date object
    if (!(date instanceof Date) || Object.prototype.toString.call(date) !== '[object Date]') {
      throw new Error('Invalid date!');
    }

    // Check for "fake" Date objects by ensuring the object isn't tampered with.
    // This throws an error if `getTime` is overridden or the `toString` method doesn't match
    if (Object.getOwnPropertyNames(date).length > 0 || typeof date.getTime !== 'function') {
      throw new Error('Invalid date!');
    }

    // Ensure that the `getTime` method doesn't throw and verify the date
    if (isNaN(date.getTime())) {
      throw new Error('Invalid date!');
    }
  } catch (error) {
    throw new Error('Invalid date!');
  }

  // Get the month (0 = January, 11 = December)
  const month = date.getMonth();

  // Determine the season based on the month
  if (month === 11 || month === 0 || month === 1) return 'winter';
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'autumn';

  // This line should not be reached because all months are accounted for
}
module.exports = {
  getSeason
};
