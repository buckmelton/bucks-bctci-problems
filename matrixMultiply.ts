// # Matrix Multiplication

// Write code that performs matrix multiplication of two given matrices. If the multiplication cannot be performed, return an empty matrix.

// For two matrices to be multiplied, the number of columns in the first matrix must equal the number of rows in the second matrix. The resulting matrix will have the same number of rows as the first matrix and the same number of columns as the second matrix.

// Example 1:
// Input:
// A = [
//   [1, 2],
//   [3, 4]
// ]
// B = [
//   [5, 6],
//   [7, 8]
// ]
// Output: [
//   [19, 22],
//   [43, 50]
// ]
// Explanation:
// [1, 2] · [5, 6] = 1x5 + 2x7 = 19
// [1, 2] · [7, 8] = 1x6 + 2x8 = 22
// [3, 4] · [5, 6] = 3x5 + 4x7 = 43
// [3, 4] · [7, 8] = 3x6 + 4x8 = 50

// Example 2:
// Input:
// A = [
//   [1, 2, 3]
// ]
// B = [
//   [4],
//   [5],
//   [6]
// ]
// Output: [
//   [32]
// ]
// Explanation: [1, 2, 3] · [4, 5, 6] = 1x4 + 2x5 + 3x6 = 32

// Example 3:
// Input:
// A = [
//   [1, 2]
// ]
// B = [
//   [1],
//   [2],
//   [3]
// ]
// Output: []
// Explanation: Invalid dimensions for multiplication

// Constraints:

// - `0 <= A.length, B.length <= 100`
// - `0 <= A[i].length, B[i].length <= 100`
// - `-10^4 <= A[i][j], B[i][j] <= 10^4`

function colArr(m: number[][], c: number): number[] {
  let res: number[] = [];
  for (let r = 0; r < m.length; r++) {
    res.push(m[r][c]);
  }
  return res;
}

function dotProduct(arr1: number[], arr2: number[]): number {
  let res = 0;
  for (let i = 0; i < arr1.length; i++) {
    res += arr1[i] * arr2[i];
  }
  return res;
}

function matrixMultiply(a: number[][], b: number[][]): number[][] {
  if (a.length == 0 || b.length == 0) return [];
  if (a[0].length != b.length) return [];
  let res = Array.from({length: a.length }, () => Array(b[0].length));
  for (let r = 0; r < res.length; r++) {
    for(let c = 0; c < res[0].length; c++) {
      res[r][c] = dotProduct(a[r], colArr(b, c));
    }
  }
  return res;
}
