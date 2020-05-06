// You will learn more about converting strings to numbers by writing a function that takes a positive integer or zero, and converts it to a string representation.

// You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.

// Examples:

const DIGITS = ['0', '1', '2', '3',
                '4', '5', '6', '7',
                '8', '9'];

var integerToString = function(integer) {
  var digitString = '';
  var digit;

  do {
    digit = integer % 10;
    digitString = DIGITS[digit] + digitString;
    integer = Math.floor(integer / 10);
  } while (integer > 0)

  return digitString;
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"