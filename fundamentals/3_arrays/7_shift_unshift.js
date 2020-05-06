// In this exercise, you will implement your own versions of the Array.prototype.shift and Array.prototype.unshift methods. These methods manipulate the contents of an array starting from the first index.

// The shift method removes the first element from an array and returns that element; if the array is empty, shift returns undefined. The unshift method adds one or more elements to the start of an array and returns the new length of the array. Both methods mutate the original array.

//input: array
//output: element from array
// side effect: array mutation
// initialize shiftedEl = arr[0]
// from index 1 to arr.length - 1
  // arr[i - 1] = arr[i]
// arr length -= 1
// return shiftedEl

var shift = function(arr) {
  if (arr.length === 0) return undefined;

  var shiftedEl = arr[0];
  var lastIdx = arr.length - 1;
  var i;

  for (i = 1; i <= lastIdx; i += 1) {
    arr[i - 1] = arr[i];
  }
  arr.length = lastIdx;
  return shiftedEl;
};

// initialize addedLength = values.length
// for i = arr.length - 1 to 0
  // arr[i + addedLength] = arr[i]
// for i = 0 to  i < addedlength
  // arr[i] = values[i]
// return arr.length

var unshift = function(arr, ...values) {
  var addedLength = values.length;
  var i;
  for (i = arr.length - 1; i >= 0; i -= 1) {
    arr[i + addedLength] = arr[i];
  }
  for (i = 0; i < addedLength; i += 1) {
    arr[i] = values[i];
  }

  return arr.length;
}

shift = function(arr) {
  var result;
  if(arr.length !== 0) {
    result = arr.splice(0,1)[0];
  }
  return result;
}

unshift = function(arr, ...values) {
  arr.splice(0,0,...values);
  return arr.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

var testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]