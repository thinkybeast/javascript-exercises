// A user wrote a function that takes an array as an argument and returns its average. Given the code below, the user expects the average function to return 5. Is the user's expectation correct? Why or why not?

var myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  var sum = 0;
  var i;

  for (i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / Object.keys(array).length;
}

console.log(average(myArray));

// This function call will return 10, not 5. The for loop on line 11-13 will access the elements at properties -2 and -1 and add their values to the total. However, properties added to arrays do not count toward the length; only non-negative integer index elements do. Hence, the function returns (4 x 5) / 2, or 10.