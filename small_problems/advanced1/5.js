// Write a function that takes two sorted arrays as arguments, and returns a new array that contains all the elements from both input arrays in sorted order.

// You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

// Your solution should not mutate the input arrays.

/*
Input: two sorted arrays
Output: a single array, containing all the elements of both arrays, with elements sorted

Questions:
- empty arrays possible?
  - yes
- how to compare non-comparable elements?


Data structure:
- arrays

[1, 5, 9], [2, 8]

while arr1 not empty && arr2 not empty
    compare arr1[0] and arr2[0]
      result.push(smaller element.shift)

if arr1 empty, result.concat(arr2)
  else result.concat(arr1)

return result
*/

function merge(arr1, arr2) {
  let resultArr = [];
  arr1 = arr1.slice();
  arr2 = arr2.slice();
  while(arr1.length > 0 && arr2.length > 0) {
    (arr1[0] < arr2[0]) ? resultArr.push(arr1.shift()) :
                          resultArr.push(arr2.shift());
  }

  return resultArr.concat(arr1.length === 0 ? arr2 : arr1);
}


console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
