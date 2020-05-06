// Write a program that solicits six numbers from the user, then logs a message that describes whether or not the sixth number appears amongst the first five numbers.
var numToCompare;
var numbers = [];
var result;
var io = require('readline-sync');


numbers.push(io.question('Enter the 1st number: '));
numbers.push(io.question('Enter the 2nd number: '));
numbers.push(io.question('Enter the 3rd number: '));
numbers.push(io.question('Enter the 4th number: '));
numbers.push(io.question('Enter the 5th number: '));

numToCompare = io.question('Enter the last number: ');

result = (numbers.some(function(num) { return num > numToCompare; })) ? 'appears' : 'does not appear';
console.log(`A number greater than ${numToCompare} ${result} in ${numbers}.`);