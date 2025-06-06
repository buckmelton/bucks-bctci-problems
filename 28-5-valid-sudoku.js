// # Valid Sudoku

// Given a 9x9 grid `board` representing a Sudoku, return `true` if the board does not have any conflicts and `false` otherwise. The board contains only numbers between 0 and 9 in each cell, with 0's denoting empty cells. 

// A conflict is a duplicate number (other than 0) along a row, a column, or a 3x3 subgrid (shown with the thicker outline). For the purposes of this problem, it doesn't matter if the Sudoku has a valid solution or not -- only whether it has a conflict in the already-filled cells.

// For those who don't know the rules of Sudoku: the grid starts off with some cells pre-filled with numbers. The player is asked to fill in the empty cells with the numbers 1 through 9, such that there are no duplicates in the same row, column, or subgrid (the 3x3 sections shown with the thicker outline).

// ```
// Example 1:
// board = +-------+-------+-------+
//         | 5 . . | . . . | . . 6 |
//         | . . 9 | . 5 . | 3 . . |
//         | . 3 . | . . 2 | . . . |
//         +-------+-------+-------+
//         | 8 . . | 7 . . | . . 9 |
//         | . . 2 | . . . | 8 . . |
//         | 4 . . | . . 6 | . . 3 |
//         +-------+-------+-------+
//         | . . . | 3 . . | . 4 . |
//         | . . 3 | . 8 . | 2 . . |
//         | 9 . . | . . . | . . 7 |
//         +-------+-------+-------+
// Output: true

// Example 2:
// board = +-------+-------+-------+
//         | 5 . . | . . . | . . 6 |
//         | . . 9 | . 5 . | 3 . . |
//         | . 3 . | . . 2 | . . . |
//         +-------+-------+-------+
//         | 8 . . | 7 . . | . . 9 |
//         | . . 2 | . . . | 8 . . |
//         | 4 . . | . . 6 | . . 3 |
//         +-------+-------+-------+
//         | . . . | 3 . . | . 4 . |
//         | . . 3 | . 8 . | 7 . . |
//         | 9 . . | . . . | . . 7 |
//         +-------+-------+-------+
// Output: false
// Explanation: The bottom-right 3x3 subgrid has a duplicate, 7.

// Example 3:
// board = +-------+-------+-------+
//         | . . . | . . . | . . . |
//         | . . . | . . . | . . . |
//         | . . . | . . . | . . . |
//         +-------+-------+-------+
//         | . . . | . . . | . . . |
//         | . . . | . . . | . . . |
//         | . . . | . . . | . . . |
//         +-------+-------+-------+
//         | . . . | . . . | . . . |
//         | . . . | . . . | . . . |
//         | . . . | . . . | . . . |
//         +-------+-------+-------+
// Output: true
// Explanation: An empty board has no conflicts.
// ```

// https://iio-beyond-ctci-images.s3.us-east-1.amazonaws.com/valid-sudoku-1.png

// Constraints:
// - board.length == 9
// - board[i].length == 9
// - board[i][j] is a digit between 0 and 9.

/* 
Design:
We should only ever have to visit each value in the 9x9 grid once.
Create 27 Sets for each of the groupings that must have unique values
(9 rows, 9 columns, 9 subgrids).  As we traverse, check the sets for
the 3 groupings the cell is in (its row, its column, and its subgrid).
If the value is already in the set, we can exit immediately with false.
Otherwise put the value into the set.  The worst case occurs when there
are no duplicates, in which case we will visit each cell to the very end,
81 of them.
*/

function hasNoConflicts(b) {
  const rowSets = Array.from({ length: 9 }, () => new Set());
  const colSets = Array.from({ length: 9 }, () => new Set());
  const subgridSets = Array.from({ length: 9 }, () => new Set());

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (b[r][c] !== 0 && rowSets[r].has(b[r][c])) {
        return false;
      }
      if (b[r][c] != 0) rowSets[r].add(b[r][c]);

      if (b[r][c] !== 0 && colSets[c].has(b[r][c])) {
        return false;
      }
      if (b[r][c] != 0) colSets[c].add(b[r][c]);

      if (b[r][c] !== 0 && subgridSets[((r/3 | 0) * 3) + (c/3 | 0)].has(b[r][c])) {
        return false;
      }
      if (b[r][c] != 0) subgridSets[((r/3 | 0) * 3) + (c/3 | 0)].add(b[r][c]);
    }
  }
  return true;
}

/*
Complexity:
Space: O(n), where n is the 81 values in the 9 x 9 grid.
We create 3 groups of 9 sets of integers, representing the 9 rows, 9 columns,
and 9 subgrid in the puzzle.  Worst case, if every value is filled in and the 
board is valid, each of the 27 sets will contain 9 unique values, never any more.
In addition, we track the current row and column being inspected.
Time: O(n).
We process 9 rows, with 9 columns nested inside, with 3 subgroups checked inside.  Worst case, when the board is valid, all n * 3 => O(3n) => O(n) checks are done, never any more, and often less if an invalid duplicate is found.
*/

let b1 = [
  [5, 0, 0, 0, 0, 0, 0, 0, 6],
  [0, 0, 9, 0, 5, 0, 3, 0, 0],
  [0, 3, 0, 0, 0, 2, 0, 0, 0],
  [8, 0, 0, 7, 0, 0, 0, 0, 9],
  [0, 0, 2, 0, 0, 0, 8, 0, 0],
  [4, 0, 0, 0, 0, 6, 0, 0, 3],
  [0, 0, 0, 3, 0, 0, 0, 4, 0],
  [0, 0, 3, 0, 8, 0, 2, 0, 0],
  [9, 0, 0, 0, 0, 0, 0, 0, 7]
];

let b2 = [
  [5, 0, 0, 0, 0, 0, 0, 0, 6],
  [0, 0, 9, 0, 5, 0, 3, 0, 0],
  [0, 3, 0, 0, 0, 2, 0, 0, 0],
  [8, 0, 0, 7, 0, 0, 0, 0, 9],
  [0, 0, 2, 0, 0, 0, 8, 0, 0],
  [4, 0, 0, 0, 0, 6, 0, 0, 3],
  [0, 0, 0, 3, 0, 0, 0, 4, 0],
  [0, 0, 3, 0, 8, 0, 7, 0, 0],
  [9, 0, 0, 0, 0, 0, 0, 0, 7]
];

let b3 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

console.log('b1 has no conflicts: ', hasNoConflicts(b1));
console.log('b2 has no conflicts: ', hasNoConflicts(b2));
console.log('b3 has no conflicts: ', hasNoConflicts(b3));
