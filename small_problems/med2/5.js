// A 'featured number' (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occuring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a function that takes an integer as an argument, and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.


/*
Input: Number, integer
Output: Number - the next 'featured' number greater than the input integer

A Featured number is
- a multiple of seven
- odd
- no digit appears twice

Algorithm:
- Take in the number
- increment until we hit a multiple of seven
  - while num % 7 !== 0, num += 1;
- from next multiple of 7, loop while
  - !odd?
      - num % 2 === 1
  - OR !digitsUnique
    - break the num into array of string digits
    - reduce the array into an array of unique digits
      - if !uniqDigits.includes(num), uniqDigits.push(num)
    - if digitArr.length === uniqDigits.length then no digit appears twice
    - for 0 to digitArr.length
      - if indexOf(digit) !== lastIndexOf(digit) return false
  - if not, increment number by 7
  - if so, return current multiple of 7

*/

function nextOddSeven(num) {
  do {
    num += 1;
  } while ((num % 7 !== 0) || (num % 2 !== 1))

  return num;
}


function uniqDigits(num) {
  let digitArr = String(num).split('');
  let digit;
  let i;
  for (i = 0; i < digitArr.length; i += 1) {
    digit = digitArr[i];
    if (digitArr.indexOf(digit) !== digitArr.lastIndexOf(digit)) {
      return false;
    }
  }

  return true;
}

function nextFeaturedNumber(num) {
  num = nextOddSeven(num);

  while (true) {
    if (uniqDigits(num)) {
      return num;
    }
    num += 14;
  }
}

 console.log(nextFeaturedNumber(1)); // 7
 console.log(nextFeaturedNumber(7)); // 21
 console.log(nextFeaturedNumber(100)); // 105
 console.log(nextFeaturedNumber(105)); // 147
//  nextFeaturedNumber(-1) // 7