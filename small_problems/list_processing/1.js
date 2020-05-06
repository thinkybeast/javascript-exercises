// Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this using list processing techniques.

// coerce to string
// split
// map to numbers
// reduce sum

function sum(number) {
  return String(number).split('')
                        .map((digit) => +(digit))
                        .reduce((sum, cur) => sum + cur, 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
