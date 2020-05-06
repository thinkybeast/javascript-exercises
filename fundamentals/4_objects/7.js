// The calculateBonus function calculates the bonus for a given salary. It makes use of two arguments for determining the bonus: a salary amount and a boolean switch. If the boolean is true, the bonus should be half of the salary; otherwise the bonus should be 0. Fill in the blanks in the function so that it will work, then explain why it works.

// Examples:

function calculateBonus() {
  console.log(arguments[1] ? arguments[0] / 2 : 0);
}

calculateBonus(2800, true);               // 1400
calculateBonus(1000, false);              // 0
calculateBonus(50000, true);              // 25000


// We can the the arguments object to capture any arguments passed into the function. If this second value passed into the function evaluates to true, then we return the first element of tha arguments object, the base salary, divided by 2.