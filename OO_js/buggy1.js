// The code below is expected to output the following when run:

// However, it instead results in an error. What is the problem with the code? Why isn't it producing the expected results?

// > var helloVictor = createGreeter('Victor');
// > helloVictor.greet('morning');
// = "Good Morning Victor"

var helloVictor = createGreeter('Victor');
helloVictor.greet('morning');

function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      var msg = '';
      switch (timeOfDay) {
        case 'morning':
          // msg += morning + ' ' + name; // these lines produce the error
          msg += this.morning + ' ' + this.name;
          break;
        case 'afternoon':
          // msg += afternoon + ' ' + name;  // these lines produce the error
          msg += this.afternoon + ' ' + this.name;
          break;
        case 'evening':
          // msg += evening + ' ' + name;  // these lines produce the error
          msg += this.evening + ' ' + this.name;
          break;
      }

      console.log(msg);
    },
  };
}

// The error is produced becuase the greet method references variables which have not been initialized. In order to access the object's morning/afternoon/evening properties, we must use the this keyword.


/*
An alternative solution to this exercise is the following code:

// rest of code omitted for brevity

      switch (timeOfDay) {
        case 'morning':
          msg += this.morning + ' ' + name;
          break;
        case 'afternoon':
          msg += this.afternoon + ' ' + name;
          break;
        case 'evening':
          msg += this.evening + ' ' + name;
          break;
      }

// rest of code omitted for brevity
Why does it work? What concept does this demonstrate?


This works because the greet method definition is nested within the createGreeter function. Due to lexical scoping rules, the greet method has access to the variables in outer scope, including the local variable name passed in as an argument.
*/

