// We are assigned the task to implement a range function that returns an array of integers beginning and ending with specified start and end numbers. When only a single argument is provided, that argument should be used as the ending number and the starting number should be 0.

// Check our code below. Why do the the example invocations fail with an error saying Maximum call stack size exceeded? Can you fix the code, so it runs without error and satisfies the requirements?

function range(start, end) {
  var range = [];
  if (end === undefined) {
    end = start;
    start = 0;
  }
  var element;
  for (element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// function range(end) {
//   return range(0, end);
// }

// The second definition of range on line 19 assigns a new function definition to the variable range. As a result, the call to range() on line 20 is a recursive call, and with no end condition creates a stack overflow.

// Examples

console.log(range(10, 20));
console.log(range(5));