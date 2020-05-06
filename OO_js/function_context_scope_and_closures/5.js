// Our earlier implementation of the Function.prototype.bind was simplistic. Function.prototype.bind has another trick up its sleeve besides hard-binding functions to context objects. It's called partial function application. Read this assignment and the MDN documentation to learn more about partial function application.

// Alter the myBind function written in the previous exercise to support partial function application.

function myBind(func, contextObj) {
  var partialArgs = Array.from(arguments).slice(2);
  return function() {
    var remainingArgs = Array.from(arguments);
    var fullArgs = partialArgs.concat(remainingArgs);

    return func.apply(contextObj, fullArgs);
  }
}

function repeat(count, string) {
  var result = '';
  var i;
  for (i = 0; i < count; i += 1) {
    result += string;
  }
  return result;
}

var threeTimes = myBind(repeat, null, 3);
console.log(threeTimes('Hello'));
