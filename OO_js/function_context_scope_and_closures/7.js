function makeCounter() {
  var count = 1;

  return function() {
    console.log(count++)
  };
}

var counter = makeCounter();
counter();

// Read the following code carefully. Will the JavaScript garbage collection mechanism garbage collect the variable count after the function counter is run on line 10?
// No, counter will continue to maintain a reference to count via its closure until until counter no longer references that function, or the end of the program.