// Read through the following code. Currently, it does not log the expected result. Explain why this happens, then refactor the code so that it works as expected.

function objectsEqual(obj1, obj2) {
  var currentKey;
  obj1Keys = Object.keys(obj1).sort();
  obj2Keys = Object.keys(obj2).sort();
  if (obj1Keys.length !== obj2Keys.length) return false;

  for(var i = 0; i < obj1Keys.length; i += 1) {
    currentKey = obj1Keys[i];
    if (obj1[currentKey] !== obj2[currentKey]) return false;
  }

  return true;

}

var person = { name: 'Victor' };
var otherPerson = { name: 'Victor' };

console.log(objectsEqual(person, otherPerson));    // false -- expected: true

// In Javascript, objects are only considered equal if they point to same object in memory.