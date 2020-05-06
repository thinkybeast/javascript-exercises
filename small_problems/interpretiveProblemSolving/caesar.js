// Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be transmitted securely. It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

// The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. The substituted letters are in the same letter case as the original letter. If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.

/*
Input: string message, and number key
Output: string, encrypted message

Problem:
- Take in a string
- Shift each character by a given key positions in the alphabet
  - only alpha chars are shifted, others are left as is
  - case is unchanged



Algorithm:
- break message into array of chars
- map each char to its caesar shifted position
  - return caesar(char, key)
    - if char /^a-z/i return char
    - else get char code
    - add the (key % 26)
    - if new key > upperBound, char code - (26 - key)

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

function caesarEncrypt(msg, key) {
  let letters = msg.split('');
  console.log(letters.map((char) => encrypt(char, key)).join(''));
}

// Examples:

// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"