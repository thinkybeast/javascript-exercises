// Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

// input num
// output string
// create an array of length
// fill it with '1's
// map: return 0s to odd indexes, 1 to even
// join array and return

function stringy(length) {
  return new Array(length).fill('1')
                          .map( (el, i) => !(i % 2) ? el : '0' )
                          .join('');
}



console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"