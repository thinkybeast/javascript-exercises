// Write a function that takes a string as an argument, and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

// Examples:

function swapCase(string) {
  return string.split('').map(function(char) {
    return /[A-Z]/.test(char) ? char.toLowerCase() : char.toUpperCase();
  }).join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"