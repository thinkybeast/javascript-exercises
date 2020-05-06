// The productOfSums function shown below is expected to return the product of the sums of two arrays of numbers. Read through the following code. Will it produce the expected result? Why or why not?

function productOfSums(array1, array2) {
  var result;
  result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  var sum;
  var i;

  for (i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum;
}

// The method will return NaN because the function total() does not explicitly return a value. Methods that do not explicitly return a value return undefined.

// In addition, the var sum in total() is not assigned a value before line 14. As a result, the first evaluation of line 14 attempts to add a number to undefined, which evaluates to NaN.