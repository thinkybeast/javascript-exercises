// Write a function that rotates the last n digits of a number. For the rotation, rotate by one digit to the left, moving the first digit to the end.

/*
Input: number, and a position n
Output: number, with the digit at position length - n rotated to the end of the number


*/

function rotate(arr) {
    if(!Array.isArray(arr)) {
      return undefined;
    } else if (arr.length === 0) {
      return [];
    }
    return arr.slice(1).concat(arr[0]);
  }


function rotateRightmostDigits(num, pos) {
  // convert number into array of string digits strDigits
  // take a slice of the strDigits, starting at -pos, and pass that to the rotate function
  // concat strDigits(0,-pos) to the result of rotate(slice(-pos))
  // join digits into a string and coerce back to a number

  strDigits = String(num).split('');
  rotatedDigits = rotate(strDigits.slice(-pos));
  rotatedNum = strDigits.slice(0, -pos).concat(rotatedDigits);
  return Number(rotatedNum.join(''));

}


console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917