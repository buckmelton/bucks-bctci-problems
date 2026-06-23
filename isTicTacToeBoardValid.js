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

function validTicTacToeBoard(b) {
  // Go through all elements and count up number of X's and O's.
  let x = 0;
  let o = 0;
  for (let r=0; r<b.length; r++) {
    for (let c=0; c<b[0].length; c++) {
      if (b[r][c] === 'X') {
        x++;
      } else {
        if (b[r][c] === 'O') {
          o++;
        }
      }
    }
  }

  // There must be either an equal number of X's and O's or 1 more X than
  if (!(x == o || x == o+1)) {
    return false;
  }

  // Need to track separately, since a valid board may have two wins
  // by the same player if their last move was at the intersection
  // of two winning rows/columns/diagonals.  But a board can't have 1
  // win by X and 1 win by O.
  let xWon = 0;
  let oWon = 0;

  // Check rows
  for (let r=0; r<b.length; r++) {
    if (b[r].every(elt => elt === 'X')) xWon++;
    if (b[r].every(elt => elt === 'O')) oWon++;
  }

  // Check columns
  for (let c=0; c<b[0].length; c++) {
    let colArr = [];
    for (let r=0; r<b.length; r++) {
      colArr.push(b[r][c]);
    }
    if (colArr.every(elt => elt === 'X')) xWon++;
    if (colArr.every(elt => elt === 'O')) oWon++;
  }

  // Check tl-br diagonal
  let diagArr = [];
  for (let r=0; r<b.length; r++) {
    diagArr.push(b[r][r]);
  }
  if (diagArr.every(elt => elt === 'X')) xWon++;
  if (diagArr.every(elt => elt === 'O')) oWon++;

  // Check bl-tr diagonal
  diagArr = [];
  for (let r=b.length-1; r>=0; r--) {
    diagArr.push(b[r][b.length-1-r]);
  }
  if (diagArr.every(elt => elt === 'X')) xWon++;
  if (diagArr.every(elt => elt === 'O')) oWon++;

  if (((xWon <= 2 && oWon == 0) && (x == o+1)) ||
      ((oWon <= 2 && xWon == 0) && (x == o))) return true;
  return false;
}

