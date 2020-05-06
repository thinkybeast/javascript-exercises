// In the previous exercise, you wrote a function that transposed a 3x3 matrix represented by an array of arrays.

// Matrix transposes are not limited to 3x3 matrices, or even square matrices. Any matrix can be transposed simply by switching columns with rows.

// Modify your transpose function from the previous exercise so that it works with any MxN matrix with at least one row and one column.

/*
Input: an MxN matrix, of at least 1 row and column
Output: a new NxM matrix

4x1
[
  [1],
  [2],
  [3],
  [4]
]

[0][0]
[1][0]
[2][0]
[3][0]

[0][0] [0][1] [0][2] [0][3]

1x4
[[1, 2, 3, 4]]

Elements of the 0th array become the 0th element in each result array
Element of the 1st array become the 1st element in each result array
Elements of the Mth array become the Mth element in each N arrays

Take in our matrix
- Determine the row number M from matrix.length
- Determine the column number N from matrix[0].length
- create a result matrix of length N
- for i = 0 to m
  - for j = 0 to n
    - result[j][i] = matrix[i][j]
- return result
*/


function newMatrix(n) {
  let newMx = [];
  for (let i = 0; i < n; i += 1) {
    newMx.push([]);
  }

  return newMx;
}

function transpose(matrix) {
  let rowM = matrix.length;
  let colN = matrix[0].length;
  let resultMx = newMatrix(colN);
  let i;
  let j;
  for (i = 0; i < rowM; i += 1) {
    for (j = 0; j < colN; j += 1) {
      resultMx[j][i] = matrix[i][j];
    }
  }

  return resultMx;
}

let sample = [
  [1],
  [2],
  [3],
  [4]
];

// console.log(transpose(sample));
console.log(transpose([[1, 2, 3, 4]]));
console.log(transpose([[1]]));
console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
