// Write a function that will take a short line of text, and write it to the console log within a box.

// Examples:
function edge(width) {
  var side = (new Array(width).fill('-')).join('');
  console.log(`+${side}+`);
}

function middle(width) {
  var space = (new Array(width).fill(' ')).join('');
  console.log(`|${space}|`);
}

function msg(text, width) {
  width -= 2;
  var substring = text.substring(0, width);
  var idx = 0;
  do {
    console.log(`| ${substring.padEnd(width)} |`);
    idx += width;
    substring = text.substring(idx, idx + width);
  } while (substring.length > 0)

}

function logInBox(text, maxWidth) {
  var width =  maxWidth || text.length + 2;

  edge(width);
  middle(width);
  msg(text, width);
  middle(width);
  edge(width);
}

logInBox('To boldly go where no one has gone before.', 80);
// will log on the console:

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+
logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+

