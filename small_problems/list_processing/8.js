// Write a function that takes a grocery list (a two-dimensional array) with each element containing a fruit and a quantity, and returns a one-dimensional array of fruits, in which each fruit appears a number of times equal to its quantity.

// Example:

function buyFruit(list) {
  // map each array to array of fruits
  // flatten array of arrays
  var fruits;
  var i;

  return list.map((items) => new Array(items[1]).fill(items[0]))
              .reduce((result, arr) => result.concat(arr), []);
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]