// Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.

function madLibs(words) {
  var madLib = `Do you ${words.verb} your ${words.adjective} ${words.verb} ${words.adverb}? That's hilarious!`
  console.log(madLib);
}
var io = require('readline-sync');
words = { 'noun': io.question('Enter a noun: '),
          'verb': io.question('Enter a verb: '),
          'adjective': io.question('Enter an adjective: '),
          'adverb': io.question('Enter an adverb: '),
         }
madLibs(words);