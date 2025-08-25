Problem 35.5 - Triangle Count
Get asked this question by our AI Interviewer
Interview now
Given the root of a binary tree, return the number of triangles. A triangle is a set of three distinct nodes, a, b, and c, where:

a is the lowest common ancestor of b and c.
b and c have the same depth.
the path from a to b only consists of left children (the nodes in the path can have right children).
the path from a to c only consists of right children (the nodes in the path can have left children).

Example 1:
         0
     /       \
    1         2
     \       / \
      3     4   5
     / \   /     \
    6   7 8       9

Output: 4.
The triangles are: (0, 1, 2), (3, 6, 7), (2, 4, 5), (2, 8, 9).
Triangle count 1

Example 2:
      0
   /      \
  1        4
 /  \       \
2    3       5
Output: 3.
The triangles are: (0, 1, 4), (1, 2, 3), (0, 2, 5).
Constraints:

The number of nodes is at most 10^5
The height of the tree is at most 500
The value at each node doesn't matter.
See Solution
Problem 35.5 - Triangle Count: Solution
Python
The first question we should ask for binary tree problems is: "What information do I need to pass through the tree, and in which direction?"

Information directions
We don't want to count triangles one by one; this would be too inefficient. Instead, we can find, for each node u, the number of triangles with u at the top.

For this, we need to:

Pass two things up the tree: left_side, the number of consecutive left descendants, and right_side, the number of consecutive right descendants.
Compute the triangles with u at the top as min(left_side, right_side).
Add the count to a running total, which can be stored as "global" state.
Here is the implementation:

class Node:
  def __init__(self, val, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

def triangle_count(root):
  res = 0

  def visit(node):
    nonlocal res
    if not node:
      return 0, 0  # left_side, right_side counts

    left_side, _ = visit(node.left)  # Only care about left descendants
    _, right_side = visit(node.right)  # Only care about right descendants

    # Number of triangles with this node at the top is min of left and right sides
    res += min(left_side, right_side)

    # Return counts of consecutive left/right descendants
    return (left_side + 1, right_side + 1)

  visit(root)
  return res
Time & Space Analysis
n: the number of nodes in the tree

h: the height of the tree

Time: O(n)

Extra space: O(h) - for the call stack

Tests
Here are some test cases to verify the solution:

def run_tests():
  tests = [
      # Example
      (Node(1,
            Node(2,
                 Node(4),
                 Node(5)),
            Node(3,
                 Node(6),
                 Node(7))), 4),
      (None, 0),  # Empty tree
      (Node(1), 0),  # Single node
      # No triangles - only left children
      (Node(1,
            Node(2,
                     Node(3),
                     None),
            None), 0),
      # No triangles - only right children
      (Node(1,
            None,
            Node(2,
                 None,
                 Node(3))), 0),
      (Node(1,
            Node(2),
            Node(3)), 1),
  ]

  for _, (root, want) in enumerate(tests):
    got = triangle_count(root)
    assert got == want, f"\ntriangle_count(): got: {got}, want: {want}\n"