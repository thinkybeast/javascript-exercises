// while input.length > 0
  // byteStream.push(input.splice(0,8))
// byteStream.reverse().flat()

function dataReverse(data) {
  var byteStream = [];
  var reverseStream = [];
  while (data.length > 0) {
    byteStream.push(data.splice(0, 8));
  }

   byteStream.reverse().forEach( (byte) => {
    reverseStream = reverseStream.concat(byte);
  });

  return reverseStream;
}

arr1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
console.log(dataReverse(arr1));