// Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at position 0 should come first, then all substrings that start at position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given position from shortest to longest.

// You may (and should) use the substringsAtStart function you wrote in the previous exercise:

// Example:

function substringsAtStart(str) {
  return str.split('').map( function(_, idx) {
    return str.slice(0, idx + 1);
  })
}

function substrings(str) {
  // split and map each char to str.slice(idx)
  // map each of those substrings to substringsAtStart
  // flatten that array of arrays
  var allSubs = str.split('').map( (_, idx) => str.slice(idx));
  return allSubs.map(substr => substringsAtStart(substr))
                .reduce((result, subArr) => result.concat(subArr), []);
}


console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]