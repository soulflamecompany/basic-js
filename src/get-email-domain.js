

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // Split the email by '@' and return the last part (domain)
  return email.split('@').pop();
}

module.exports = {
  getEmailDomain
};
