// Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

var range = function(start, end) {
  return Array.from(new Array(end - start + 1)
              .fill(undefined)
              .map(function(_, i){
                return i + start;
              }));
};

var multisum = function(amount) {
  var sum = function(acc, current) {
    return acc + current;
  };

  var multiples = function(num) {
    return !(num % 3) || !(num % 5);
  }

  return range(1, amount).filter(multiples).reduce(sum);
};


console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168
