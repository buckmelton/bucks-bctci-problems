# Matrix Rotation

# Given a square `n x n` matrix, `mat`, rotate it 90 degrees clockwise in place, using `O(1)` extra space.

# Example: mat =  [[25, 15],
#                  [10, 30]]
# Output:    mat = [[10, 25],
#                  [30, 15]]
# We should not create a new matrix.

# Example: mat = [[1, 2, 3],
#                 [4, 5, 6],
#                 [7, 8, 9]]
# Output:  mat = [[7, 4, 1],
#                 [8, 5, 2],
#                 [9, 6, 3]]

# Constraints:

# - `1 <= n <= 1000` where `n` is the size of the square matrix
# - `-10^9 <= mat[i][j] <= 10^9` (matrix elements are integers)

def rotate_clockwise m
  return m if m.length == 0
  for r in 0..m.length-1 do
    for c in r+1..m[0].length-1 do
      m[r][c], m[c][r] = m[c][r], m[r][c]
    end
  end
  for r in 0..m.length-1 do
    m[r].reverse!
  end
  m
end

# Complexity:
# Time: In the first for loop, we go through every element
# above the diagonal = N^2 / 2, and in the 2nd for loop, the code processes each row, and the #reverse method presumably touches
#   each element in the row, which is N^2, so overall O(N^2)
# Space: We only use row and column indices, so O(1).

mat =  [[25, 15],
        [10, 30]]

# Output:    mat = [[10, 25],
#                  [30, 15]]

p rotate_clockwise mat

mat = [[1, 2, 3],
       [4, 5, 6],
       [7, 8, 9]]

p rotate_clockwise mat

mat = []
p rotate_clockwise mat

mat = [[]]
p rotate_clockwise mat

mat = [[4]]
p rotate_clockwise mat




