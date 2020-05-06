// Write a program that asks the user to enter an integer greater than 0, then asks if the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

const io = require("readline-sync");

let sumTo = function(target) {
  let memo = 0;
  for(let i = 1; i <= target; i += 1) {
    memo += i;
  }
  return memo;
};

let productTo = function(target) {
  let memo = 1;
  for(let i = 1; i <= target; i += 1) {
    memo *= i;
  }

  return memo;
};

let sumOrProduct = () => {
  target = io.question('Please enter an integer greater than 0: ');
  operation = io.question('Enter "s" to compute the sum, or "p" to compute the product.');

  switch (operation) {
    case 's': {
      console.log(`The sum of the integers between 1 and ${target} is ${sumTo(target)}`);
      break;
    }
    case 'p': {
      console.log(`The product of the integers between 1 and ${target} is ${productTo(target)}`);
      break;
    }
  }
};

sumOrProduct();