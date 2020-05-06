// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

// 'This is global' is output to the screen.
// On line 7, someFunction is invoked.
// On line 4, myVar is referenced as part of an assignment expression. The program searches the currently executing scope for a variable of that name. When none is found, it searches the outer global scope. When none is found there, a property of the global object is created with the name myVar and assigned the value 'This is global'.
// On line 8, the global property myVar created as part of the assignment on line 4 is referenced, and its value is output to the screen.










// Notice that on line 2 there is no variable declaration for myVar (i.e., there is no var keyword before myVar). As a result of this, JavaScript looks in the outer scope for the declaration. Since it doesn't exist, JavaScript binds myVar to be a "property" of the global object. This is "almost" the same as if myVar was globally declared. We will discuss more about why this is "almost"—but not "exactly"—the same in a later course when we cover the global / window object.