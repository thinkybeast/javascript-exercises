// Log all odd numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines.

let oddNums = (start, limit) => {
  start = start % 2 === 0 ? start + 1 : start;
  limit = limit < start ? start : limit;

  for (let i = start; i <= limit; i += 2) {
    console.log(i);
  }
};

oddNums(4, 20);
oddNums(20,4);
oddNums(-7, -3);