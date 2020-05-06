// What does the following code log? Why is this so?

var startingBalance = 1;
var chicken = 5;
var chickenQuantity = 7;

var totalPayable = function (item, quantity) {
  return startingBalance + (item * quantity);
};

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity)); // 40

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity)); //45

// This example illustrates how closures work in Javascript. The curly brackets that make up the function definition on lines 7-9 create a closure. A closure retains references to all the variables in scope at the time of its creation. In this case, it has a reference to the outer scope variable startingBalance. Because this is a reference, the when the variable is assigned a new value on lines 11 and 14, the function will reference the new values of the variable.