/*
The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. It uses a series of Caesar Ciphers based on the letters of a keyword. Each letter of the keyword is treated as a shift value. For instance, the letter 'B' corresponds to a shift value of 1, and the letter 'd' corresponds to a shift value of 3. In other words, the shift value used for a letter is equal to its index value in the alphabet. This means that the letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase letters 'A'-'Z' are also equivalent to 0-25.

Applying the Vigenere Cipher is done sequentially for each character by applying the current shift value to a Caesar Cipher for that particular character. To make this more concrete, let's look at the following example:

plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!
Notice that in the example, the key isn't moved forward if the character isn't in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only encrypts alphabetic characters.

Write a function that implements the Vigenere Cipher. The case of the keyword doesn't matter—in other words, the resulting encryption won't change depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').

Input: String message, and a word cipher
Output: String, encrypted message

Problem:
- Take a message and a cipher word
- Each letter of the cipher word corresponds to caesar cipher key whose value is the letter index
  - meat = [12, 4, 0,19 ]
- going letter by letter of the message, caesar encrypt it using the next sequential key, skipping non-alpha chars

Data structure
- string of alphabet, representing character keys
- character counter
- string of message

Algorithm
- downcase the cipher word, split into chars, and map to its key
  - return alphabet.indexOf(char)
- initialize charCount = 0
- initialize result
- for each char in message
  - if char is alpha
  - key = cipher[charCount % (cipher.length - 1)]
  - result += caeser(char, key)
  - else result += char
- return result
*/

function inBounds(charCode, key) {
  const lowerZCode = 'z'.charCodeAt(0);
  const upperACode = 'A'.charCodeAt(0);
  const upperZCode = 'Z'.charCodeAt(0);
  if (charCode >= upperACode && charCode <= upperZCode) {
    return charCode + key <= upperZCode;
  } else {
    return charCode + key <= lowerZCode;
  }

}

function encrypt(char, key) {
  if (/[^a-z]/i.test(char)) return char;
  let charCode = char.charCodeAt(0);
  if (inBounds(charCode, key)) {
    return String.fromCharCode(charCode + key);
  } else {
    return String.fromCharCode(charCode - (26 - key));
  }
}

function refreshCipher(word) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return word.split('').map(char => alphabet.indexOf(char));
}

function vigenereEncrypt(message, word) {
  word = word.toLowerCase();
  let cipher = refreshCipher(word);
  let result = '';
  let key;
  let i;
  let char;
  for (i = 0; i < message.length; i += 1) {
    char = message[i];
    if (cipher.length === 0) {
      cipher = refreshCipher(word);
    }

    if (/[a-z]/i.test(char)) {
      key = cipher.shift();
      result += encrypt(char, key);
    } else {
      result += char;
    }

  }

  console.log(result);
}

vigenereEncrypt("Pineapples don't go on pizzas!", 'meat');
//Bmnxmtpeqw dhz'x gh ar pbldal!