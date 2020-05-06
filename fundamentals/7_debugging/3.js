// The function placeABet below accepts a guess from the user between 1 and 25. The function should determine a winning number and return a message to the user indicating whether he/she entered a winning guess. When you try to invoke placeABet, an error is raised. Fix the bug and explain what caused it.

function placeABet(guess) {
  function generateRandomInt() {
    return Math.floor(Math.random() * 25) + 1;
  } // because it is inside parenthesis, this is evaluated as a function expression rather than a function declaration. as a result, the function is not assigned to any variable. when we attempt to invoke it on line 8, we will therefore get a reference error, as no function or variable by that name has been defined..

  var winningNumber = generateRandomInt();

  if (guess < 1 || guess > 25) {
    return 'Invalid guess. Valid guesses are between 1 and 25.';
  }

  if (guess === winningNumber) {
    return "Congratulations, you win!";
  } else {
    return "Wrong-o! You lose.";
  }
}

var userGuess = parseInt(prompt('Input a guess between 1-25'), 10);
alert(placeABet(userGuess));