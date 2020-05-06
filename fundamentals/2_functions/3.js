// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

// The code logs 'This is local' to the screen.
// This code illustrates that variables in outer scope can be accessed and modified from inner scope.
// On line 1, a global variable myVar is declared and assigned the value 'This is global'
// When someFunction is invoked, the variable myVar is referenced. Because there is no local variable by that name, the global variable is referenced and reassigned the value 'This is local'
// On line 10, the value of myVar is then output to the screen.


