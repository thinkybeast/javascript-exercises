// Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

/*
Input: Num n
Output: Num, (sum of digits 1 to n)^2 - (1^2 + 2^2 +... n^2)

Algorithm
- given n
- first, get array from one to n
- get squareSum
  - reduce sum the array and sqaure it
- get sumSquares
  - map each digit to its square, then sum reduce it
- return sqSum - sumSqs
*/

function getSeries(n) {
  let series = [];
  let i;

  for (i = 1; i <= n; i += 1) {
    series.push(i);
  }

  return series;
}

function sumSquareDifference(num) {
  let nSeries = getSeries(num);
  let sumReduce = (sum, cur) => sum + cur;
  let squareMap = (num) => num ** 2;
  let sqSum = nSeries.reduce(sumReduce) ** 2;
  let sumSqs = nSeries.map(squareMap).reduce(sumReduce);

  return sqSum - sumSqs;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
