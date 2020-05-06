
// Write a makeDoubler function that takes a caller name as an argument, and returns a function that has the same behavior as doubler, but with a preset caller.

// Example:

function makeDoubler(name) {
  return function(num) {
    console.log(`This function was called by ${name}.`)
    return num + num;
  }
}


var doubler = makeDoubler('Victor');
console.log(doubler(5));                             // returns 10
// logs:
// This function was called by Victor.