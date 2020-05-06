// Implement an ancestors method that returns the prototype chain (ancestors)of a calling object as an array of object names. Here's an example output:

// Input: object
// Output: Array of strings

/*
Create an array resultArr
Push the name of the current obj into our array
obj = getPrototypeOf obj
do until obj === null
return arr
*/

Object.prototype.ancestors = function() {
  let resultArr = [];
  let currentObj =  Object.getPrototypeOf(this);

  while(currentObj) {
    if (currentObj.hasOwnProperty('name')) {
      resultArr.push(currentObj.name);
    }
    currentObj = Object.getPrototypeOf(currentObj);
  }

  resultArr.push('Object.prototype');
  console.log(resultArr);
}

// name property added to make objects easier to identify
var foo = {name: 'foo'};
var bar = Object.create(foo);
bar.name = 'bar';
var baz = Object.create(bar);
baz.name = 'baz';
var qux = Object.create(baz);
qux.name = 'qux';

qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
foo.ancestors();  // returns ['Object.prototype']