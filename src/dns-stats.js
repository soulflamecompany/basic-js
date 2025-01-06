

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};

  for (const domain of domains) {
    // Split the domain into parts and reverse it
    const parts = domain.split('.').reverse();
    let dns = '';

    for (const part of parts) {
      // Build the DNS hierarchy by adding each part
      dns += `.${part}`;
      // Increment the count for this DNS
      result[dns] = (result[dns] || 0) + 1;
    }
  }

  return result;
}

module.exports = {
  getDNSStats
};
