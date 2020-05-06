// Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.

/*
Input: Integer, length and width of diamond
Output: log representation of diamond

Problem:
- take an odd number, n
- generate a diamond with n rows
- with a max (middle) row of n stars
- each top row has 2n + 1 stars
- middle row has n stars


Clarifying Questions:
  - illegal nums?
  - return null

Data Structure:
- an array of stars representing half of the diamond
- length of array is Math.ceil(n / 2)


Algorithm:
  - create an array of length Math.ceil(n / 2)
-- map each el of arr to '*'.repeat(2(idx) + 1).padstart(length + idx)
- console.log half the array
- reverse the array
- log half.slice(1)

*/

//Code:

function diamond(length) {
  let halfLen = Math.ceil(length / 2);
  let halfDiamond = new Array(halfLen).fill('');
  halfDiamond = halfDiamond.map(function(_, idx) {
    return '*'.repeat((2 * idx) + 1).padStart(halfLen + idx);
  })
  console.log(halfDiamond.join("\n"));
  console.log(halfDiamond.reverse().slice(1).join("\n"));

}

  // halfWay = Math.floor(length / 2)
  // from idx 0 to halfway
  // create an array row of spaces of length
  // row[halfWay] + idx = *
    // row[halfWay] - idx = *
    // halfDiamond.push(row.join(''))
  // console.log halfDiamond.each
  // console.log halfDiamond reverse slice(1)

function hollowDiamond(length) {
  let halfWay = Math.floor(length / 2);
  let halfDiamond = [];
  let i;
  let row;
  for (i = 0; i <= halfWay; i += 1) {
    row = new Array(length).fill(' ');
    row[halfWay + i] = '*';
    row[halfWay - i] = '*';
    halfDiamond.push(row.join(''));
  }

  console.log(halfDiamond.join("\n"));
  console.log(halfDiamond.reverse().slice(1).join("\n"));
}
//Test Cases:

// diamond(9);
hollowDiamond(5);