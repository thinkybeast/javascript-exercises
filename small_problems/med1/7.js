// Rewrite your recursive fibonacci function so that it computes its results without using recursion.

// Examples:

/*
if  sequence.length >= n  then return sequence.pop


*/

let fibonacci = (n) => {
  let sequence = [1, 1];

  while (sequence.length < n ) {
    sequence.push(sequence.slice(-1)[0] + sequence.slice(-2,-1)[0])
  }

  return sequence.pop()
};

console.log(fibonacci(5));
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050