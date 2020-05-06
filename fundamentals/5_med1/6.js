// Read through the following code. Why will it log 'debugging'?

function debugIt() {
  var status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// The function declaration for logger() and the var declaration for status are first hoisted to the top of the function debugIt;
// Then, status is assigned the value debugging.
// Then, logger is invoked.
// Because inner scopes have access to variables declared in outer scope, the function logger is able to reference the outer variable status and log it
// This example illustrates lexical scoping rules in Javascript.