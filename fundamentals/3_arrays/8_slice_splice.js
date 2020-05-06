// The slice function takes three arguments: an array, and two integers representing a begin and an end index. The function returns a new array containing the extracted elements starting from begin up to but not including end. slice does not mutate the original array.

// slice:

// The values of begin and end will always be integers greater than or equal to 0.
// If the value of begin or end is greater than the length of the array, set it to equal the length.

// input: array, starting index, ending index
// output: new array
// side effects: none - does not mutate
// initialize new array
// if begin > arr.length OR end > arr.length, SET equal to arr.length
// for i = begin, i < end
  // resultArr.push(arr[i])
// return resultArr

function slice(arr, begin, end) {
  var resultArr = [];
  var i;
  begin = (begin > arr.length) ? arr.length : begin;
  end = (end > arr.length) ? arr.length : end;

  for (i = begin; i < end; i += 1) {
    resultArr.push(arr[i]);
  }

  return resultArr;
}

// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

// var arr = [1, 2, 3];
// console.log(slice(arr, 1, 3));                     // [2, 3]
// console.log(arr);                                  // [1, 2, 3]

// The splice function changes the contents of an array by deleting existing elements and/or adding new elements. The function takes the following arguments: an array, a start index, a deleteCount, and zero or more elements to be added. The function removes deleteCount number of elements from the array, beginning at the start index. If any optional element arguments are provided, splice inserts them into the array beginning at the start index. The function returns a new array containing the deleted elements, or an empty array ([]) if no elements are deleted. splice mutates the original array.

// Additional specifications:

// splice:

// The values of start and deleteCount will always be integers greater than or equal to 0.
// If the value of start is greater than the length of the array, set it to equal the length.
// If the value of deleteCount is greater than the number of elements from start up to the end of the array, set deleteCount to the difference between the array's length and start.
// Takes optional arguments for elements to add to the array; denoted by the parameters element1 up to elementN. If no elements to add are provided, splice only removes elements from the array.

// input: array, start index, count of obj to delete, optional arr of elements to add
// output: new array of deleted elements (or empty array)
// side effects: arr is mutated
  // if start > array.length, SET to array.length
  // if start + deletecount > array.length, deletecount = array.length - start
// initialize resultArr
// build resultArr
  // for i = start, i < start + count, resultArr.push(arr[1])
// delete (deleteCount) elements from origArr
  // for i = start, i < start + deletecount
  // arr[i] = arr[i + deletecount]
  // arr.length -= deletecount
// add newElements to origArr
  // initialize addCount = elementsToAdd.length
  // for i = array.length - 1 to start
    // arr[i + addCount] = arr[i]
  // for i = start to start + addcount
    // arr[i] = elementsToAdd[i - start]
// return resultArr

function splice(arr, start, deleteCount, ...elementsToAdd) {
  resultArr = [];
  var i;
  var addCount = elementsToAdd.length;

  // data validation
  start = (start > arr.length) ? arr.length : start;
  if (start + deleteCount > arr.length) {
    deleteCount = arr.length - start
  }

  // build result array
  for (i = start; i < start + deleteCount; i += 1) {
    resultArr.push(arr[i]);
  }

  // remove N elements from array
  for (i = start; i < arr.length; i += 1) {
    arr[i] = arr[i + deleteCount]
  }
  arr.length -= deleteCount;

  // shift N elements and add new elements to array
  for (i = arr.length - 1; i >= start; i -= 1) {
    arr[i + addCount] = arr[i];
  }

  for (i = start; i < start + addCount; i += 1) {
    arr[i] = elementsToAdd[i - start];
  }

  return resultArr;
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

var arr = [1, 2, 3];
console.log(splice(arr, 1, 1, 'two'));             // [2]
console.log(arr);                                  // [1, "two", 3]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr);                                  // [1, "two", "three"]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 0));                    // []
console.log(splice(arr, 1, 0, 'a'));               // []
console.log(arr);                                  // [1, "a", 2, 3]

var arr = [1, 2, 3];
console.log(splice(arr, 0, 0, 'a'));               // []
console.log(arr);                                  // ["a", 1, 2, 3]