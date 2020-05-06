// Identify the bug in the following code. Don't run the code until after you've tried to answer.

var myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
myObject[a]; // throws an error, as accessing the key in this way is interpreted as attempting to reference a variable a for the key, rather than string `a`
myObject.a;