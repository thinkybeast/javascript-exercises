// Write a function objectsEqual that accepts two object arguments and returns true or false depending on whether the objects have the same key/value pairs.

function keysEqual(objA, objB) {
  let objKeysA = Object.keys(objA).sort();
  let objKeysB = Object.keys(objB).sort();

  if (objKeysA.length !== objKeysB.length) return false;

  return objKeysA.every(function(key, idx) {
    return key === objKeysB[idx];
  });
}

function valuesEqual(objA, objB) {
  let objKeysA = Object.keys(objA);

  return objKeysA.every(function(key) {
    if (typeof objA[key] === 'object') {
      return objectsEqual(objA[key], objB[key]);
    }
    return objA[key] === objB[key];
  });
}

function objectsEqual(objA, objB) {
  if (objA === objB) return true;

  return keysEqual(objA, objB) && valuesEqual(objA, objB);
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: [1]}, {a: 'foo', b: [1]}));  // false