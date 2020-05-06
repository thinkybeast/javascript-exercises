// Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

// Examples:

function letterCaseCount(string) {
  let result = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  return string.split('').reduce(function(result, char){
    if (/[A-Z]/.test(char)) {
      result.uppercase += 1;
    } else if (/[a-z]/.test(char)) {
      result.lowercase += 1;
    } else {
      result.neither += 1;
    }
    return result;
  }, result);
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
