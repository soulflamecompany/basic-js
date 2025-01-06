

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect; // Determines machine type (direct/reverse)
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    return this._process(message, key, 'encrypt');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');
    return this._process(encryptedMessage, key, 'decrypt');
  }

  _process(input, key, mode) {
    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    input = input.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < input.length; i++) {
      const char = input[i];

      if (ALPHABET.includes(char)) {
        const inputIndex = ALPHABET.indexOf(char);
        const shift = ALPHABET.indexOf(key[keyIndex % key.length]);

        let newIndex;
        if (mode === 'encrypt') {
          newIndex = (inputIndex + shift) % ALPHABET.length;
        } else {
          newIndex = (inputIndex - shift + ALPHABET.length) % ALPHABET.length;
        }

        result += ALPHABET[newIndex];
        keyIndex++;
      } else {
        // Leave non-alphabetic characters unchanged
        result += char;
      }
    }

    // Reverse the result if the machine is a reverse machine
    if (!this.isDirect) {
      result = result.split('').reverse().join('');
    }

    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
