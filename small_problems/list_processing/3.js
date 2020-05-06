// Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

// You may assume that neither argument will be an empty array.

// Example:

function multiplyAllPairs(arr1, arr2) {
  var numSort = (num1, num2) => num1 - num2;

  var pairs = [];

  arr1.forEach( function(el1) {
    arr2.forEach( function(el2) {
      pairs.push(el1 * el2);
    })
  })

  return pairs.sort(numSort);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]