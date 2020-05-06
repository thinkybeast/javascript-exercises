// Write a function that takes a string, and returns an object containing the following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.

/*
Input: String
Output: object, containing
  - count of uppercase letters
  - count of lowercase letters
  - count of neither upper nor lowercase letters

- string will always have at least one char
- spaces are counted
- percentages are formatted as strings to two decemal points

Data structure:
An array of chars, which will be reduced to an object
{
  lowercase: 0,
  uppercase: 0,
  neither: 0,
}

Algorithm:
- break string into chars on ''
- initialize counter object
- reduce charArr, passing in counter obj
- if /[a-z]/.test(char) increment counter[lowercase]
- if /[A-Z]/.test(char) increment counter[uppercase]
- else increment counter[neither]
- for each key of counter
  - counter[key] /= string.length
  - format that result
    - String((num x 100).toFixed(2))
*/

function letterPercentages(string) {
  let counter = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  }
  let charArr = string.split('');
  charCounts = charArr.reduce(function(counter, char) {
    if (/[a-z]/.test(char)) {
      counter.lowercase += 1;
    } else if(/[A-Z]/.test(char)) {
      counter.uppercase += 1;
    } else {
      counter.neither += 1;
    }
    return counter;
  }, counter);

  let format = num =>  (num * 100).toFixed(2);
  Object.keys(charCounts).forEach(function(type) {
    charCounts[type] = format(charCounts[type] / string.length);
  })

  return charCounts;
}

console.log(letterPercentages('oopS! Ten!')) // lowercase: 50.00 uppercase: 20.00 neither: 30.00
console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }