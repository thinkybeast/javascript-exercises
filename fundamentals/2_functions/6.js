// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

// The code will log 7 to the console.
// On line 3, the global variable a is declared and assigned the value 7.
// On line 9, myValue is invoked, passing the value of the variable a into the function.
// The function creates a local variable b, which has the value of 7.
// On line 6, the variable is reassigned the value 17. The function completes execution and returns undefined
// On line 10, the variable a is referenced. Its value is still 7, so 7 is output to the console.
// This code illustrates that primitive values are immutable and passed into functions by value. Immutable values cannot be modified. When the operation on line 6 is performed, a new value is returned and assigned to the variable b. No changes are made to the reference variable a has to the value 7.