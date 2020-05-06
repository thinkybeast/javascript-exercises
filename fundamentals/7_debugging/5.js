// The following code demonstrates the Pomodoro technique. Although it seems to work in principle, it never prints the minute count from line 11. What is wrong?

var tasks = 10;
var checkmarks = 0;
var sessions = 0;
var minutes = 0;


function pomodoro() {
  console.log('Work.');

  while (minutes < 25) {
    minutes += 1;
    console.log('...' + minutes);
  }

  console.log('PLING!');

  sessions += 1;
  checkmarks += 1;

  if (checkmarks === tasks) {
    console.log('Done!');
    return;
  }

  var rest;
  if (sessions === 4) {
    sessions = 0;
    rest = 30;
  } else {
    rest = 5;
  }

  console.log('Rest for ' + rest + ' minutes.');

   minutes = 0; // the var declaration of minutes creates a new local variable named minutes in this function's scope, and shadows the global variable declared in outer scope. due to hoisting, this variable is initialized at the top of the function, but is not yet assigned a value by line 11. As a result, the expression (minutes < 25) evaluates to false and the inner log statement is never run
  pomodoro();
}

pomodoro();