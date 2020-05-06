// The penultimate function takes a string as an argument and returns the next-to-last word in the string. The function assumes that "words" are any sequence of non-whitespace characters. The function also assumes that the input string will always contain at least two words. The penultimate function in the example below does not return the expected result. Run the code below, check the current result, identify the problem, explain what the problem is, and provide a working solution.

Examples:

function penultimate(string) {
  var words = string.split(' ')
  console.log( words[words.length - 2]);
}

penultimate('last word');                    // expected: "last"
penultimate('Launch School is great!');      // expected: "is"

// Using a negative number for an array index attempts to access a property of that array with the string value of that negative number. To access te second to last index of an array, we must use array.length - 2