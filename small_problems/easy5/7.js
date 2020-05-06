// Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

// Examples:

function swapName(name) {
  // return name.replace(/(\w+)\s(\w+)/gi, '$2, $1')
  var names = name.split(' ');
  names.unshift(names.pop() + ",")
  return names.join(' ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"