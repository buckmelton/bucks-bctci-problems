// # Subgrid Sums

// Given a rectangular `RxC` grid of integers, `grid`, with `R > 0` and `C > 0`, return a new grid with the same dimensions where each cell `[r, c]` contains the sum of all the elements in the subgrid with `[r, c]` in the top-left corner and `[R - 1, C - 1]` in the bottom-right corner.

// ```
// Example 1:
// grid =  [[-1,  2,  3],
//          [ 4,  0,  0],
//          [-2,  0,  9]]
// Output: [[15, 14, 12],
//          [11,  9,  9],
//          [ 7,  9,  9]]

// Example 2:
// grid =  [[5]]
// Output: [[5]]
// Explanation: For a 1x1 grid, each cell's subgrid is just itself.

// Example 3:
// grid =  [[1, 2, 3]]
// Output: [[6, 5, 3]]
// Explanation: For a single row, each cell's subgrid includes all elements to its right.
// ```

// Constraints:

// - 1 ≤ R, C ≤ 10^3
// - -10^3 ≤ grid[i][j] ≤ 10^3

function subgridSums(grid) {
  const output = Array.from({ length: grid.length }, () => Array.from({ length: grid[0].length }, () => null));
  let R = grid.length;
  let C = grid[0].length;

  function isValid(r, c) {
    return (
      r >= 0 && r < R &&
      c >= 0 && c < C
    );
  }

  function subgridSumsRecurse(r, c) {
    if (!isValid(r, c)) {
      return 0;
    }

    if (r == R - 1 && c == C - 1) {
      output[r][c] = grid[r][c];
      return output[r][c];
    }

    if (output[r][c]) {
      return output[r][c];
    }

    output[r][c] =
      grid[r][c] +
      subgridSumsRecurse(r+1, c) +
      subgridSumsRecurse(r, c+1) -
      subgridSumsRecurse(r+1, c+1);
    return output[r][c];
  }

  subgridSumsRecurse(0, 0);

  return output;
  // console.log(output);
}

/*
Complexity:
Time: O(N) where N is the number of grid elements.
Because we are using memoization, we should only have one recursive call per grid element.  Each recursive call is either a memoized value or a simple sum. => O(N).
Space: O(N).
We create a few integer variables, and a grid of the same size N as the original grid, at the top level scope. => O(N)
*/

let grid1 = [[5]];
console.log(subgridSums(grid1));

let grid2 = [
  [1, 2]
];
console.log(subgridSums(grid2));

let grid3 = [
  [1],
  [2],
  [3]
];
console.log(subgridSums(grid3));

let grid4 = [[1, 2, 3]];
console.log(subgridSums(grid4));

let grid5 = [
  [-1,  2,  3],
  [ 4,  0,  0],
  [-2,  0,  9]
];
console.log(subgridSums(grid5));

/*
AI Interviewer Analysis:

Me: OK, I've finished. I first observe that the subgrid sum of a cell equals the sum of the subgrid sums of the cell below it and the cell to the right of it, minus the subgrid sum of the cell one down and one right.  So I can now recursively calculate the subgrid sum of each cell by adding the recursive subgrid sum call of the cell below and the cell to the right, minus the recursive call of the cell one down and one to the right.  If a cell is out of bounds, its subgrid sum is zero.  The base case is the bottom right corner, whose subgrid sum is itself.  I also take advantage of memoization: if a call in the output (result) grid is not null, its value has already been calculated.  I therefore don't need to repeat recursive calls for cells that have already been calculated.  I've made notes for the time and space complexity after the code.  I've include edge case and happy-path test cases.
I've reviewed your solution, and it looks solid! Your recursive approach with memoization is well-implemented.

AI Interview:

Let's discuss your solution:

You correctly identified the recurrence relation: the subgrid sum of a cell equals the cell's value plus the subgrid sums of the cells below and to the right, minus the subgrid sum of the cell diagonally down-right (to avoid double counting).

Your base case handling is correct - the bottom-right cell's subgrid sum is just its own value.

You've implemented memoization effectively to avoid redundant calculations.

Your edge case handling with the isValid function is good.

For the time and space complexity:

Time: O(R*C) as you noted, since each cell is processed exactly once due to memoization.
Space: O(RC) for the output grid and the recursion stack (which is also bounded by RC).
Your test cases cover various scenarios including the examples provided, single-cell grids, single-row grids, and single-column grids.

Is there anything specific about your solution that you'd like to discuss further?

#
Me: Is this the optimal solution?


AI Interviewer:
Yes, your solution is optimal in terms of time and space complexity.

For this problem:

Time complexity: O(R*C) is optimal because we need to process each cell at least once to compute its subgrid sum.
Space complexity: O(R*C) is also optimal because we need to store the result for each cell.
Your recursive approach with memoization ensures that each cell is processed exactly once, which achieves this optimal time complexity.

An alternative implementation could use a bottom-up dynamic programming approach, starting from the bottom-right corner and working backwards, filling in the result grid iteratively rather than recursively. This would have the same time and space complexity but might avoid the overhead of function calls.

But in terms of the core algorithm and complexity, your solution is indeed optimal.

*/