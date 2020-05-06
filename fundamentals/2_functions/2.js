// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

// This code illustrates lexical scoping rules and variable shadowing in Javascript.
// On line 3, we declare a global variable myVar.
// Lines 5-8 define a function, someFunction. Within that function, a new local scope is created. On line 6, a new local variable with the name myVar is declared and assigned the value 'This is local'. On line 7, console.log() is invoked, passing the variable myVar. When myVar is referenced, Javascript uses lexical scoping rules to first search the currently executing funciton for a variable by that name. That variable is found, and the value is passed. someFunction logs 'This is local' and the function returns undefined.