// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

// 'This is global' will be outpur to the screen.
// On line 1, the global variable myVar is declared and assigned the value 'This is global'
// On line 9, someFunction is invoked.
// On line 6, myVar is referenced. Because there is no variable by the name local to the function, the outer scope is searched and the global variable is referenced. As a result, 'This is global' is output to the screen.