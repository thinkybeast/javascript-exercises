// Let's refactor the code a bit. What does it log now? What is the hoisted equivalent of this code?

var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue);


// This code logs String to the console.
// This code illustrates both hoisting behavior and dynamic typing.
// When the code is run, the function declaration logValue is hoisted to the top of scope first. This initializes a variable logValue with the value of the function body.
// The variable declaration on line 3 is then hoisted. However, because there is already a variable by this name in scope, this has no effect.
//Then, the assignment on line 3 is executed, and teh variable logValue, which reference a function, is reassigned the value 'foo'
// On line 9, we use the keyword typeof on logValue, which returns the data's type, and log that to the console. Because the value of logValue is now a string, string is logged to the console.
