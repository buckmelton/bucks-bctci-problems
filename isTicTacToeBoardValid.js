// # Tic-Tac-Toe Position

// Given a generalized Tic-tac-toe board as a 2D grid, return `true` if and only if it is possible to reach this board position during a valid Tic-tac-toe game.

// The board is an `NxN` grid containing the characters `' '`, `'X'`, and `'O'`. The `''` character represents an empty square.

// Here are the rules of Tic-tac-toe:

// 1. Players take turns placing characters into empty squares (`' '`).
// 2. The first player always places `'X'` characters, while the second places `'O'` characters.
// 3. `'X'` and `'O'` characters are always placed into empty squares, never filled ones.
// 4. The game ends when there are `N` of the same (non-empty) character filling any row, column, or diagonal.
// 5. The game also ends if all squares are non-empty.
// 6. No more moves can be played if the game is over.

// Example 1:
// Input: board = [
//   ['O', '', ''],
//   ['', '', ''],
//   ['', '', '']
// ]
// Output: false
// Explanation: Tic tac toe always starts with an X going first.

// Example 2:
// Input: board = [
//   ['O', '', ''],
//   ['', 'X', ''],
//   ['', '', '']
// ]
// Output: true
// Explanation: This is a valid potential board. Neither player has won yet.

// Example 3:
// Input: board = [
//   ['X', 'X', 'X'],
//   ['O', 'O', 'O'],
//   ['', '', '']
// ]
// Output: false
// Explanation: Both players have won, which is not possible in a valid game.

// Constraints:

// - `2 <= board.length <= 100`
// - `board.length == board[i].length`
// - `board[i][j]` is either `'X'`, `'O'`, or `' '`
