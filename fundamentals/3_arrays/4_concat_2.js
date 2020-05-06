// The concat function from the previous exercise could only concatenate a maximum of two arrays. For this exercise, you are going to extend that functionality. Refactor the concat function to allow for the concatenation of two or more arrays or values.

// Using ES5 arguments object
var concat = function (firstArr) {
  var resultArr = firstArr.slice();
  var i;

  for (i = 1; i < arguments.length; i += 1) {
    if (Array.isArray(arguments[i])) {
      arguments[i].forEach( function(el) {resultArr.push(el) ;})
    } else {
      resultArr.push(arguments[i]);
    }
  }

  return resultArr;
};

// Using ES6 spread operator
var concat = function(firstArr, ...values) {
  var resultArr = firstArr.slice();
  values.forEach( function(el) {
    if(Array.isArray(el)) {
      el.forEach(function(subEl) { resultArr.push(subEl); })
     } else {
        resultArr.push(el);
      }
    })

  return resultArr;
};

// Improved ES6 spread

concat = function(...values) {
  return [...values].flat();
};

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]