// Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

// You may assume that both input arrays are non-empty, and that they have the same number of elements.

function interleave(even, odd) {
  var resultArr = [];
  for (var i = 0; i < even.length; i += 1) {
    resultArr.push(even[i], odd[i]);
  }

  return resultArr;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
