// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

var prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]); // 678, uses value of variable prop2, which is '456' which returns  '678'
console.log(myObject.prop2); // 456, references the key 'prop2', with value '456'

// Here is another example. What do you think will be logged to the console this time, and why?

var myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

console.log(myObj); // { funcProp: 'hello, ' }
myObj[myFunc()] = 'world!';
console.log(myObj); // { funcProp: 'world!' }