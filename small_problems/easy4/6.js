// Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.

function showMultiplicativeAverage(numbers) {
  var multiplied = numbers.reduce( function(acc, curr) { return acc * curr } , 1);
  return (multiplied / numbers.length).toFixed(3);
}


console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"