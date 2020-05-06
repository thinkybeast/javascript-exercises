// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);

// The code will log [1, 2, 10] to the console.
// This code demonstrates that objects are mutable, and passed by reference to functions.
// On line 3, the array a is declared with the value [1,2,3]
// On line 9, myValue is invoked, and the variable a, which references the array [1,2,3] is passed as an argument to the function
// On line 5, the local variable b is created and assigned the reference value of the argument a. At this point, b and a point to the same object
// On line 6, the third element of array b is reassigned the value 10. the arrays's value is now [1,2, 10].  The function returns undefined.
// On line 10, the value of a is logged to the console. The variable a points to the same object modified within the function, so its value is [1,2,10], and this is logged to the console.