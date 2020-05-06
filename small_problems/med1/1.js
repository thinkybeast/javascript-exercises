// Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

// If the input is not an array, return undefined.
// If the input is an empty array, return an empty array.

/*
Input: array or non-array (reject case)
Output: new array, with the first element at the end of the array

- empty array input returns an empty array
- non array input returns undefined


Test Cases

*/

function rotate(arr) {
// Take in array
// guard clause: if !Array.isArray() return undefined
  // else if arr.length === 0 return []
// return arr.slice(1) + arr[0]

  if(!Array.isArray(arr)) {
    return undefined;
  } else if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).concat(arr[0]);
}

console.log(rotate([1]))  // [1]
console.log(rotate([1,2])) // [2, 1]
console.log(rotate([1,2,3,4])) // [2, 3, 4, 1]
console.log(rotate({0: 1})) // undefined
console.log(rotate([])) // []