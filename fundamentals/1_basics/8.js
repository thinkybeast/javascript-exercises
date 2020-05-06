// Write a function that takes a string of digits, and returns the appropriate number as an integer. The string may have a leading + or - sign; if the first character is a +, your function should return a positive number; if it is a -, your function should return a negative number. If there is no sign, return a positive number.

// You may assume the string will always contain a valid number.

// Examples:

var DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};

var stringToSignedInteger = function(string) {
  var sign = (string[0] === '-') ? -1 : 1;
  var unsignedInt;
  var digitArr = string.split('');

  if(Object.keys(DIGITS).indexOf(string[0]) === -1) {
    digitArr.shift();
  }

  unsignedInt = digitArr.reverse().reduce( function(acc, cur, idx) {
    return acc + (cur * Math.pow(10, idx));
  }, 0);

  return sign * unsignedInt;
};

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100