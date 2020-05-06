var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);


// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

// The code will log 'This is global' to the console.
// When console.log is invoked on line 8, Javascript references the variable myVar. Due to lexical scoping rules, the program first searches the currently executing scope for the variable name. myVar is declared in this scope on line 1 and assigned the value of 'This is global'. As a result, that variable is referenced and output on line 8. Notably, a second local variable myVar is declare on line 4. Because functions create new, local scope, this variable is distinct from the myVar declared on line 1.