/*
Input: a text template
Output: a console log of that template, with the appropriate words replaced by nouns, verbs, adjectives, and adverbs

Data structure:
for the madlibs words
object words containing arrays of words
{
  noun: [],
  verb: [],
  adjective: [],
  adverb: [],
}

template

text, with items to be replaced pre and post-pended by %!word-type%!

Example:

My %!noun%! told me to %!verb%! %!adverb%! every day. How %!adjective%!!

Algo:
- break template into array of words (with possible punctuation)
- map each word to:
  if regex is matched, then a random word from our word array
    - replace the full %!type%! with the word, but leave any punctuation alone
  - if regex not matched, the word
- join words on spaces
- log result
*/

function randomWord(wordArr) {
  let randIdx = Math.floor(Math.random() * wordArr.length);
  return wordArr[randIdx];
}


function madLibs(template) {
  function replaceWord(word, type) {
    let words = {
      noun: ['dog', 'bike', 'doctor', 'bro', 'fridge'],
      verb: ['eat', 'walk', 'steal', 'hug', 'squeal'],
      adjective: ['bloody', 'sweaty', 'dim', 'brilliant', 'troubling'],
      adverb: ['nervously', 'proudly', 'softly', 'respectfully', 'wistfully'],
    }

    return word.replace(re, randomWord(words[type]));
  }


  let re = /\%\!(noun|verb|adjective|adverb)\%\!/i;
  let resultTemplate = template.split(' ').map(function(word) {
                  partOfSpeech = word.match(re);
                  return partOfSpeech ? replaceWord(word, partOfSpeech[1]) : word;
                }).join(' ');

  console.log(resultTemplate);
}

let template1 = 'My %!noun%! told me to %!verb%! %!adverb%! every day. How %!adjective%!!'

madLibs(template1)