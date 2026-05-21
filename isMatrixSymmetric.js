// # Symmetric Matrix

// Given a matrix `A`, return `true` if `A` is symmetric. A symmetric matrix is a matrix that is square and identical to its transpose. Otherwise, return `false`.

// Example 1:
// Input: matrix = [
//   [1, 2, 3],
//   [2, 4, 5],
//   [3, 5, 6]
// ]
// Output: true
// Explanation: The matrix is equal to its transpose.

// Example 2:
// Input: matrix = [
//   [1, 2],
//   [3, 4]
// ]
// Output: false
// Explanation: The matrix is not equal to its transpose.

// Example 3:
// Input: matrix = [
//   [5]
// ]
// Output: true
// Explanation: A 1x1 matrix is always symmetric.

// Constraints:

// - `0 <= matrix.length <= 100`
// - `0 <= matrix[i].length <= 100`
// - `-10^4 <= matrix[i][j] <= 10^4`

/* Idea:
If the matrick is empty, return false
If the matrix is not square, return false
Go through each [R,C] element above the diagnonal and compare it to [C,R]
  If they aren't equal, return false
Return true

Time complexity:
We need to go through half of an N x N matrix = 0.5 * N * N => O(N^2)
Space complexity:
We only need to track the current R an C we're on => O(1)
*/

function isMatrixSymmetric(m) {
  if (m.length == 0) return false;
  if (m.length != m[0].length) return false;
  if (m.length == 1) return true;
  let numCols = m[0].length;
  for (let r = 0; r < m.length-1; r++) {
    for (let c = r+1; c < numCols; c++) {
      if (m[r][c] != m[c][r]) {
        return false;
      }
    }
  }
  return true;
}

et matrix = [
  [1, 2, 3],
  [2, 4, 5],
  [3, 5, 6]
]
console.log(isMatrixSymmetric(matrix));

matrix = [
  [1, 2],
  [3, 4]
];
console.log(isMatrixSymmetric(matrix));

matrix = [
  [5]
];
console.log(isMatrixSymmetric(matrix));

matrix = [
];
console.log(isMatrixSymmetric(matrix));

matrix = [
  []
];
console.log(isMatrixSymmetric(matrix));

matrix = [
  [1,2,3],
  [2,3,1]
];
console.log(isMatrixSymmetric(matrix));

