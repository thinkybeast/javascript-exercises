// Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. The sorting should be done "in-place" — that is, the function should mutate the array. You may assume that the array contains at least two elements.


/*
Input: array of elements
Output: ascending sorted array of elements


Algorthim:
- Initialize a var swapped
- Begin a do loop
- set swapped = false
- For 0 to array.length
  if arr[i] > arr[i + 1]
    - swap elements
    - [a, b] = [b , a]
    - swapped = true
- loop while swapped = true
- return array
*/

function bubbleSort(arr) {
let swapped;
let idx;

do {
  swapped = false;
  for (idx = 0; idx < arr.length - 1; idx += 1) {
    if (arr[idx] > arr[idx + 1]) {
      [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
      swapped = true;
    }
  }
} while(swapped === true)

  return arr;
}

var array = [5, 3];
bubbleSort(array);
console.log(array);    // [3, 5]

var array = [6, 2, 7, 1, 4];
bubbleSort(array);
console.log(array);    // [1, 2, 4, 6, 7]

var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]