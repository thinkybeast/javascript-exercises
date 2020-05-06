// Read through the code shown below. What does it log to the console at lines 7 and 10?

var myArray = [1, 2, 3, 4];
var myOtherArray = myArray;

myArray.pop();
console.log(myOtherArray);
// On line 3, we initialize the variable myArray and assign it value [1,2,3,4]
// On line 4, we initialize myOtherArray and assign it the value of myOtherArray, which is a reference to the array [1,2,3,4]. both variables now point to the same object.
// On line 6, we invoke the pop method on myArray. This is a mutating method, which removes the last element from the array and returns it.
// Line 7 logs the value of myOtherArray, which is now [1,2,3]. Because myOtherArray and myArray are pointing to the same object, mutations to the object will be reflected by both variables.

myArray = [1, 2];
console.log(myOtherArray);
// Line 14 logs [1,2,3]. On line 13, we reassign myArray a new array, [1,2]. This reassignment does not affect myOtherArray, which continues to point to the array [1,2,3].