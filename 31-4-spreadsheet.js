// # Spreadsheet

// Design a class called Spreadsheet with the following API. Spreadsheets have between `1` and `100` rows and columns. The values at each cell are integers.

// Spreadsheet API:

// - `new(rows, cols)`: initializes a spreadsheet with the specified size and 0 in every cell.
// - `set(row, col, value)`: sets the cell at (row, col) to value.
// - `get(row, col)`: gets the value at (row, col).
// - `sort_columns_by_row(row)`: sorts all the columns based on the values in the given row. Sorting should be stable.
// - `sort_rows_by_column(col)`: sorts all the rows based on the values in the given column. Sorting should be stable.

// Rows and columns start at `0`. Assume that no rows or columns will be out of bounds.

// ```
// Example 1:
// spreadsheet = Spreadsheet()
// spreadsheet.new(3, 3)
// spreadsheet.set(0, 0, 5)
// spreadsheet.set(0, 1, 3)
// spreadsheet.set(0, 2, 8)
// spreadsheet.set(1, 0, 6)
// spreadsheet.set(2, 1, 1)
// spreadsheet.sort_columns_by_row(0)
// spreadsheet.sort_rows_by_column(1)
// spreadsheet.get(1, 1)  # Returns 5

// Example 2:
// spreadsheet = Spreadsheet()
// spreadsheet.new(1, 1)
// spreadsheet.set(0, 0, 42)
// spreadsheet.get(0, 0)  # Returns 42

// Example 3:
// spreadsheet = Spreadsheet()
// spreadsheet.new(3, 2)
// spreadsheet.sort_rows_by_column(0)
// spreadsheet.get(0, 0)  # Returns 0
// ```

// Constraints:

// - `1 ≤ rows, cols ≤ 100`
// - All values set in cells are integers between `-10^9` and `10^9`

class Spreadsheet {
  constructor() {
    this.sheet = [[]];
  }

  new(rows, cols) {
    this.sheet = Array.from({length: rows}, () => new Array(cols).fill(0));
  }

  set(row, col, value) {
    this.sheet[row][col] = value;
  }

  get(row, col) {
    return this.sheet[row][col];
  }

  sort_columns_by_row(row) {
    const rowValsWithIndices = [];
    // Create a mapping from original col value to orig index
    for (let i = 0; i < this.sheet[0].length; i++) {
      rowValsWithIndices[i] = [this.sheet[row][i], i];
    }

    // Sort by the orig value
    rowValsWithIndices.sort((a, b) => a[0] - b[0]);

    // Strip out the orig indices
    const idxMapping = rowValsWithIndices.map(elt => elt[1]);

    // Use the original indices to transform each row
    for (let j = 0; j < this.sheet.length; j++) {
      let newRow = [];
      for (let k = 0; k < this.sheet[0].length; k++) {
        newRow.push(this.sheet[j][idxMapping[k]]);
      }
      this.sheet[j] = newRow;
    }
  }

  sort_rows_by_column(col) {
    this.sheet.sort((a, b) => a[col] - b[col]);
  }
}

/*
Complexity:
Time: set and get are O(1).  sort_rows_by_column is O(R log R) where R is the number of rows.  sort_columns_by_row is O(R * C) where C is the number of columns.
Space: O(C), for sort_columns_by_row we need 3 tracking arrays of length C to transform each row according to the proper sorting.
*/

// Example 1:
let spreadsheet = new Spreadsheet();
spreadsheet.new(3, 3);
console.log(spreadsheet);
spreadsheet.set(0, 0, 5);
spreadsheet.set(0, 1, 3);
spreadsheet.set(0, 2, 8);
spreadsheet.set(1, 0, 6);
spreadsheet.set(2, 1, 1);
console.log(spreadsheet);
spreadsheet.sort_columns_by_row(0);
spreadsheet.sort_rows_by_column(1);
console.log(spreadsheet);
console.log(spreadsheet.get(1, 1));  // Returns 5

// Example 2:
spreadsheet = new Spreadsheet();
spreadsheet.new(1, 1);
spreadsheet.set(0, 0, 42);
console.log(spreadsheet.get(0, 0));  // Returns 42

// Example 3:
spreadsheet = new Spreadsheet();
spreadsheet.new(3, 2);
spreadsheet.sort_rows_by_column(0);
console.log(spreadsheet.get(0, 0));  // Returns 0

