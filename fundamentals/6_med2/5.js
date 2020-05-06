// What will the following program log to the console? Can you explain why?

var array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length); // 3. The length property of an Array returns the 1 + the highest non-negative numbered index.
console.log(Object.keys(array).length); // 4 Object.keys() returns the names of all indexes and non-index properties of an Array

array[-2] = 'Watermelon';
console.log(array.length); // 3
console.log(Object.keys(array).length); //5