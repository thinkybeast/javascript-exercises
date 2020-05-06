// The following code is a simplified (and not so serious) model of how we read a software development book. But running this code results in a stack overflow. What is wrong?

var totalPages = 364;
var energy = 100;
var currentPage = 1;

function read() {
  // var currentPage = 1; // a new local variable is initialized and assigned the value of 1 on each invocation of read; if we want to keep our place, we could make this a global variable

  while (energy > 0 && currentPage < totalPages) {
    currentPage += 1;
    energy -= (5 + currentPage * 0.1);
  }

  console.log('Made it to page ' + String(currentPage) + '.');

  // Drink a cup of coffee.
  energy = 100;

  // Continue reading.
  if (currentPage < totalPages) {
    read();
  } else {
    console.log('Done!');
  }
}

read();


(function () { return 'hello'; })