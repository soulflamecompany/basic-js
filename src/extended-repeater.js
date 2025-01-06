

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // Convert str to string in case it's not already a string
  str = String(str);

  // Extract options and ensure undefined values are handled with defaults
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  // Convert addition to string in case it's not already a string
  const additionString = String(addition);

  // Create the repeated addition string
  const additionPart = new Array(additionRepeatTimes)
      .fill(additionString)
      .join(additionSeparator);

  // Create the full repeated string (str + addition)
  const fullPart = new Array(repeatTimes)
      .fill(str + additionPart)
      .join(separator);

  return fullPart;
}


module.exports = {
  repeater
};
