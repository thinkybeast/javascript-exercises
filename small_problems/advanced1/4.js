// Write a function that takes an arbitrary MxN matrix, rotates it clockwise by 90-degrees as described above, and returns the result as a new matrix. The function should not mutate the original matrix.

/*
Input: an MxN matrix (array of arrays)
Output: A 90 degree clockwise rotation of the matrix, returned as a new Array of arrays.
in:
[
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];
out:
[
  [3 4 1]
  [9 7 5]
  [6 2 8]
]

[0][0] [0][1], [0][2]
[1][0] [1][1], [1][2]
[2][0] [2][1], [2][2]



in:
[
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];
out:
[
  [5, 3]
  [1, 7]
  [0, 4]
  [8, 2]
]

[0][0] [0][1] [0][2] [0][3]
[1][0] [1][1] [1][2] [1][3]

[1][0] [0][0],
[1][1] [0][1],
[1][2] [0][2],
[1][3] [0][3]

outer index is their inner index
inner index is their (matrixlength - 1 - outerindex)

Algo:
take in matrix
map elements of matrix[0] passing in (_, idx, arr)
  - return new array with elements
    - initialize new arr
    - loop matrixlength-1 to 0
    - push matrix[i][idx]

[
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

0
[]
2 to 0
[0][2]

*/

function rotate90(matrix) {
  let mxLength = matrix.length;
  return matrix[0].map(function(_, idx) {
    let newRow = [];
    let i;
    for (i = mxLength - 1; i >= 0; i -= 1) {
      newRow.push(matrix[i][idx]);
    }
    return newRow;
  })
}

var matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

var matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

var newMatrix1 = rotate90(matrix1);
var newMatrix2 = rotate90(matrix2);
var newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]