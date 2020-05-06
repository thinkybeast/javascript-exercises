// Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; return double numbers as-is.

// Examples:

let twice = (num) => {
  // guard clause: num.length is odd, return num *
  // check if String(num).substring(0, length/2) === substring(length/2)
  strNum = String(num);
  numDigits = strNum.length;
  if (strNum.substring(0, numDigits / 2) === strNum.substring(numDigits / 2)) {
        return num;
      } else {
        return num * 2;
      }
};

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676