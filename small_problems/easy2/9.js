// Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

// Example:

var cleanUp = function (text) {
  // initialize resultStr
  // for i = 0 to text.length
  // if text[i].match(/[a-zA-Z/) resultStr += text[i]
  // else resultStr += (resultStr[i - 1] is ' ' ? '' : ' ' )
  //

  var resultStr = '';
  for (var i = 0; i < text.length; i += 1) {
    if (text[i].match(/[a-z]/i)) {
      resultStr += text[i];
    } else if (resultStr[resultStr.length - 1] !== ' ') {
      resultStr +=  ' ';
    }
  }
  return resultStr;
}

cleanUp = function(text) {
  return text.replace(/[^a-zA-Z]{1,}/gi, ' ');
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "