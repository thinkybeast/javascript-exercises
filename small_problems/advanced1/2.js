// Write a function that takes an array of arrays representing a 3x3 matrix, and returns the transpose of the matrix. You should implement the function on your own, without using any external libraries.

// Take care not to modify the original matrix — your function must produce a new matrix and leave the input matrix array unchanged.

/*
Input: 3x3 Nested Array
Output: a new 3x3 nested array, with the elements of the input array tranposed

[
  [1, 4, 5],
  [2, 6, 8],
  [3, 7, 9]
]
[0][0]  [0][1] [0][2]
[1][0]  [1][1] [1][2]
[2][0]  [2][1] [2][2]

We want to transpose elements such that:
- the 0th array's elements are now the 0 index elements of each array
- the 1st array's elements are now the 1 index elements of each array
- the 2nd array's elements are now the 2 index elements of each array

[
  [1, 2, 3]
  [4, 6, 7]
  [5, 8, 9]
]

- Take in our input matrix
- initialize a 3 by 3 nested array
- for i = 0 to 2
  - for j = 0 to 2
    - output[j][i] = input[i][j]
- return our result array
*/

function newMatrix() {
 return [ [],[],[] ];
}

function transpose(matrix) {
  let resultMx = newMatrix();
  let i;
  let j;
  for (i = 0; i <= 2; i += 1) {
    for (j = 0; j <= 2; j += 1) {
      resultMx[j][i] = matrix[i][j];
    }
  }

  return resultMx;
}

let sample = [  [1, 4, 5],
                [2, 6, 8],
                [3, 7, 9]
              ]

console.log(transpose(sample));