// Function.prototype.bind is a method on all function objects that allows us to hard-bind a function to a particular object. The way this works is that you pass a context object to the bind method and it returns a new function that is essentially the same function but hard-bound to the context object supplied.

// Create a function myBind, that accepts two arguments: 1) The function to bind, 2) The context object, and returns a new function that's hard-bound to the passed in context object.

a = 1;
b = 2;

var myObj = {
  a: 'hello ',
  b: 'world!',
}

function myBind(func, contextObj) {
  return function() {
    func.apply(contextObj, arguments);
  }
}

function hello() {
  console.log(this.a + this.b);
}

hello();
myHello = myBind(hello, myObj);
myHello();
