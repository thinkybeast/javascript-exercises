// Caroline has written a very simple function, includesFalse, that searches a list of primitives for the boolean false. If false is found, the function immediately returns true. If no occurrence of false has been found after iterating through the entire array, the function returns false.

// Caroline's last method invocation of includesFalse (line 18) doesn't return what she expects. Why is that? Fix the code so that it behaves as intended.

function includesFalse(list) {
  var i;
  var element;

  for (i = 0; i < list.length; i++) {
    element = list[i];

    if (element === false) { // uses non-strict equality;
      return true;
    }
  }

  return false;
}
                                                                  // returns:
console.log(includesFalse([8, null, 'abc', true, 'launch', 11, false]));       // true
console.log(includesFalse(['programming', undefined, 37, 64, true, 'false'])); // false
console.log(includesFalse([9422, 'lambda', true, 0, '54', null]));             // true; in this case, the value 0 == false evaluates to true, hence the incorreect return value. solution is to use strict equality