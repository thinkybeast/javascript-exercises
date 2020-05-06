// Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences.
function countOccurrences(arr) {
  var resultObj = {};
  arr.forEach( function(el) {
    resultObj[el] = (resultObj[el] + 1) || 1;
   });

   Object.entries(resultObj).forEach( function(pair) {
      console.log(`${pair[0]} => ${pair[1]}`);
   });
}


var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);