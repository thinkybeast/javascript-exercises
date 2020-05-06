// Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

// You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

// Examples:

var swap = function(text) {
  // split text into array of words
  // for each word, swap the first and last letters
    // map result back to array of words
    // strings are immutable, so will have to pull the first and last letters and concat them to a slice of the word
  // join word array and return result
  if (text.length < 2) {
    return text;
  } else {
    return text.split(' ')
                .map( function(word) {
                  return word.slice(-1) + word.slice(1, -1) + word[0];
                }).join(' ');
  }
};

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"