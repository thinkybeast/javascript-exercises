let evenNums = function evens(start, limit) {
  if (start > limit) return;

  if (start % 2 == 1 ) {
    return evens(start + 1, limit);
  } else {
    console.log(start);
    return evens(start + 2, limit);
  }
};

evenNums(2, 33);