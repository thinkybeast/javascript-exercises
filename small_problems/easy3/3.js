// Build a program that logs when the user will retire and how many more years the user has to work until retirement.

var io = require('readline-sync');
var age = io.question('What is your age? ');
var targetAge = io.question('What age would you like to retire? ');
var difference = targetAge - age;
var thisYear = (new Date()).getFullYear();
console.log(`It's ${thisYear}. You will retire in ${thisYear + difference}. Only ${difference} more years to go!`);
