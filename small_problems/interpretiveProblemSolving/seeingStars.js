// Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that is supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

// Input: Number n, where n becomes the nxn grid for the star
// Output: log the nxn gridded star tothe console
/*
n is odd integer greater or equal to 7

top half of star's star positions
row 0: 0 mid length-1
row 1: 1 mid length -2
row 2: 2 mid length -3

middle
row 3: all stars

bottom half of star (reverse of top half)

Data structure
-for top half:
array containing strings
- for mid
string

Print out each string of top half array
Print middle
Reverse top half and print each string of bottom half

Algorithm:
- initialize midPoint Math.floor(length / 2)
- initialize endPoint (length - 1)
- initialize startPoint (0)
- intitalize topHalf array
  - from i = 0 to < midpoint
  - create array(n).fill(' ')
  - array[startPoint + i] = '*'
  - array[midPoint] = '*'
  - array[endPoint - i] = '*'
- map each inner array of topHalf to its joined string
- create midStar = '*'.repeat(n)
- print star
  - for each el of topHalf console.log
- log midStar
- topHalf.reverse().forEach
  - console.log
*/


function star(n) {
  let midPoint = Math.floor(n / 2);
  let endPoint = n - 1;
  let startPoint = 0;
  let topHalf = [];
  let midStar = '*'.repeat(n);
  let i;
  let starRow;

  for (i = 0; i < midPoint; i += 1) {
    starRow = new Array(n).fill(' ');
    starRow[startPoint + i] = '*';
    starRow[midPoint] = '*';
    starRow[endPoint - i] = '*';
    topHalf.push(starRow.join(''));
  }

  topHalf.forEach(row => console.log(row));
  console.log(midStar);
  topHalf.reverse().forEach(row => console.log(row));

}


star(9);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *