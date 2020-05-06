// The following program is expected to log a multiplication table for the numbers from 1 to 10 to the console. Read through the code shown below. Will it produce the expected result? Why or why not?

var row;
var i;
var j;

function padLeft(number) {
  var stringNumber = String(number);
  return stringNumber.length <= 1 ? ' ' + stringNumber : stringNumber;
}

for (i = 1; i < 10; i += 1) {
  row = '';
  for (j = 1; j <= 10; j += 1) {
    row += padLeft(i * j) + ' ';
  }

  console.log(row + '\n');
}

// No, the out for loop only increments to 9 and breaks at 10. Thus, the row for 10 will not be output.