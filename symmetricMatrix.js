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

/*
Idea: To discover if a matrix is symmetric, you only need to go through the elements above
the diagonal and see if they equal their mirror counterpart.  (The elements on the diagonal
remain the same in the transpose and so are by definition equal, so we don't need to check
them.
*/
