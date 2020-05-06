// In this exercise, you will write a program that asks the user for a phrase, then outputs the number of characters in that phrase.
io = require('readline-sync');


// let phrase = io.question('Please enter a phrase:');
phrase = "walk, don't run";
let regex = /[^a-z1-9]/g;
let strippedPhrase = phrase.replace(regex, '');

console.log(strippedPhrase);
console.log(`There are ${strippedPhrase.length} alphanumerics in "${phrase}".`);