function areArraysEqual(array1, array2) {
  // input: 2 arrays
  // output: boolean
  // guard clause: if array lengths are not equal, return false
  // copy and sort both arrays
  // from 0 to length, if array1[i] !== array2[i] return false
  // else return true

  if (array1.length !== array2.length) return false;

  array1Copy = array1.slice().sort();
  array2Copy = array2.slice().sort();

  for (var i = 0; i < array1Copy.length; i += 1) {
    if (array1Copy[i] !== array2Copy[i]) return false;
  }

  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
console.log(areArraysEqual([1, 1], [1, 1]));                        // true
