// Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

// Examples:

var wordSizes = function(text) {
  var sizeCount = {};
  var strippedWord;

  if (text.length === 0) return sizeCount;

  text.split(' ').forEach( function(word) {
    strippedWord = word.replace(/[^a-z]/gi, '');
    sizeCount[strippedWord.length] = (sizeCount[strippedWord.length] + 1) || 1;
  });

  return sizeCount;
};

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));