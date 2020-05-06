// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

// 7 is output to the console.
// This code illustrates both variable shadowing.
// On line 3, the variable a is declared with the value 7.
// On line 9, the value of a is passed into the function myValue.
// myValue creates a new local variable a, with the value 7.
// Due to variable shadowing, any changes made to this local variable a will not be reflected by the variable in outer scope. As a result, the value of a on line 10 is still 7. Importantly, even if variable shadowing did not take place, the value of global variable a would not have changed because primitive values are passed by value to functions.