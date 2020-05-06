// Write a function that takes an array, and returns a new array that contains the values from the input array in sorted order. The function should sort the array using the merge sort algorithm as described above. You may assume that every element of the array will be of the same data type—either all numbers or all strings.

// Feel free to use the merge function you wrote in the previous exercise.

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

/*
[9, 5, 7, 1] -->
[[9, 5], [7, 1]] -->
[[[9], [5]], [[7], [1]]]

[6, 2, 7, 1, 4]
[[6, 2, 7], [1, 4]]
[[[6, 2], [7]], [[1], [4]]]
[6], [2], [7], [1], [4]

[1, 2, 4, 6, 7]

base case: arr.length = 1
  - return arr

else:
- split array into array of two subarrays
- if both subarr lengths >=2, return merge(mergesort(subarr1), mergesort(subarr2))



[6, 2, 7, 1, 4]
[6, 2, 7] [1, 4]
[6] [2, 7]


[[[6, 2], [7]], [[1], [4]]]
[6], [2], [7], [1], [4]
*/

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  let arr1 = arr.slice(0, arr.length / 2);
  let arr2 = arr.slice(arr.length / 2);

  return merge(mergeSort(arr1), mergeSort(arr2));

}



console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]