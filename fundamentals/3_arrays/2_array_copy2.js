// In the previous exercise, the value of the reference gets copied. For this exercise, only the values of the array should be copied, but not the reference. Implement two alternative ways of doing this.

// Here is the code from the previous exercise:

// var myArray = [1, 2, 3, 4];
// var myOtherArray = myArray;

// myArray.pop();
// console.log(myOtherArray);

// myArray = [1, 2];
// console.log(myOtherArray);

// Alternate 1:
// var myArray = [1, 2, 3, 4];
// var myOtherArray = myArray.slice();

// myArray.pop();
// console.log(myOtherArray);

// Alternate 2:
// var myArray =[1, 2, 3, 4];
// var myOtherArray = [];
// myArray.forEach(function(el){ myOtherArray.push(el) });

// Alternate 3:
// arrCopy = Array.from(myArray);

//

var myArray = [1, 2, 3, 4];
var myOtherArray = myArray.slice();
// Alternative
//var myOtherArray = Array.from(myArray);

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);
