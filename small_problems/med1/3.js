// Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

// Write a function that takes an integer as an argument, and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

function rotate(arr) {
  if(!Array.isArray(arr)) {
    return undefined;
  } else if (arr.length === 0) {
    return [];
  }
  return arr.slice(1).concat(arr[0]);
}

function rotateRightmostDigits(num, pos) {
  strDigits = String(num).split('');
  rotatedDigits = rotate(strDigits.slice(-pos));
  rotatedNum = strDigits.slice(0, -pos).concat(rotatedDigits);
  return Number(rotatedNum.join(''));
}

function maxRotation(num) {
  // rotate rightmost digit, starting from num.length down to 1, of each successive resulting number
  // coerce num to str and get its length (numDigits)
  // for i = numDigits to 1
  // num = rotateRightmost(num, i)
  // return num

  let numDigits = String(num).length;
  let i;

  for (i = numDigits; i > 0; i -= 1) {
    num = rotateRightmostDigits(num, i);
  }

  console.log(num);
}

// Examples:

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845