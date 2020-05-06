// Write a function that takes a sentence string as an argument, and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

// Example:

/*
Input: String, a sentence
Output: String, a sentence, with number words converted to their correspending digits

- case insenstive?
  - e.g. Five, five, FIVE all converted to 5
- strip/ignore punctuation in the sentence

Data structure:
- array of words
- object, with keys being the number word, and values being the digit char

Algorithm:
- split our sentence on spaces into an array of words(with punctuation)
- for each word
  if stripped punc word is a key in our array
    numWord[word.replace(punc)] is not undefined
  - then replace that word with the key's value
    return word.replace(word, numWord[word])
- rejoin array on spaces
*/
const numWord = {
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
}

function wordToDigit(sentence) {
  let words = sentence.split(' ');
  let strippedWord;
  return words.map(function(word) {
    strippedWord = word.split(/\b/);
    return strippedWord.map(function(el) {
      return numWord[el.toLowerCase()] || el;
    }).join('');
  }).join(' ');
}





console.log(wordToDigit('Please call me at Five-fIve-FIVE-one-two-three-four. Thanks.'));
console.log(wordToDigit('The weight is done. Thanks.'));

// "Please call me at 5 5 5 1 2 3 4. Thanks."