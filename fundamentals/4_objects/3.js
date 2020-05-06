// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var array1 = ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
var array2 = [];
var i;

for (i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);
// Will output the original (non-upcased) strings. Although arrays are mutable objects, any primitives they contain are not mutable. As a result, when some of the elements in array1 are reassigned their upcased values, this does not affect the values contained in array2.