// Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)

// You may assume that the argument is always an integer greater than or equal to 2.

// write a function to find the next fib in a sequence
  // initialize array [1, 1]

// loop with a counter = 2
  // iterate counter
  // nextFib = arr[length - 2] + arr[length - 1]
  // arr.push(nextFib)
  // break if String(arr[arr.length - 1]).length == length
// return counter

function nextFib(sequence) {
  return sequence[sequence.length - 2] + sequence[sequence.length - 1];
}

function findFibonacciIndexByLength(length) {
  var sequence = [1, 1];
  var lastFib;

  while (true) {
    lastFib = nextFib(sequence);
    sequence.push(lastFib);
    if (String(lastFib).length === length) break;
  }

  return sequence.length;
}


console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74