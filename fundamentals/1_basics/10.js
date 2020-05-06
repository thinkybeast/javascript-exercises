// In the previous exercise, you reimplemented a function that converts non-negative numbers to strings. In this exercise, you're going to extend that function by adding the ability to represent negative numbers.

// You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. You may, however, use the integerToString function from the previous exercise.
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

var signedIntegerToString = function(number) {
  if(number > 0) {
    return '+' + integerToString(number);
  } else if (number < 0) {
    return '-' + integerToString(-number);
  } else {
    return integerToString(number);
  }
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"