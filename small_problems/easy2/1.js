// Write a function that takes a string argument, and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

// initialize resultStr
// split string into array of chars
// while i < string.length
// if string[i] === string[i + 1] continue
// else resultStr += string[i]
// return resultStr;

// var crunch = function(string) {
//   var resultStr = '';
//   for(var i = 0; i < string.length; i += 1) {
//     if (string[i] === string[i + 1]) continue;
//     resultStr += string[i];
//   }

//   return resultStr;
// };

var crunch = function(string) {
  return string.split('')
                .filter(function(_, i) {
                  return string[i] !== string[i + 1];
                })
                .join('');
}


console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));