// # Tree Layout

// You are given the root of a non-empty binary tree. We lay out the tree on a grid as follows:

// 1. We put the root at `(r, c) = (0, 0)`
// 2. We recursively lay out the left subtree one unit below the root (increasing `r` by one)
// 3. We recursively lay out the right subtree one unit to the root's right (increasing `c` by one)

// For instance, the left child of the root goes on `(1, 0)` and the right child goes on `(0, 1)`.

// Two nodes are _stacked_ if they are laid on the same `(r, c)` coordinates. For instance, `root.left.right` and `root.right.left` would overlap at `(1, 1)`.

// Return the maximum number of nodes stacked on the same coordinate.

// ```
// Example:

// Input:
//          1
//        /   \
//      2       3
//    /  \     /
//   4    5   6
//    \      / \
//     7    8   9

// Output: 2
// The layout looks like this:

// 1 -- 3
// |    |
// 2 - 5,6 - 9
// |    |
// 4 - 7,8

// The most stacked nodes are 5,6 or 7,8.
// ```

// https://iio-beyond-ctci-images.s3.us-east-1.amazonaws.com/trees_fig11.png

// Constraints:

// - The number of nodes is at most `10^5`
// - The height of the tree is at most `500`
// - The value at each node doesn't matter.

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function maxStackedNodes(root) {
  const coordMap = new Map();

  function maxStackedR(root, r, c) {
    if (!root) return;
    if (!coordMap.has(JSON.stringify([r, c]))) {
      coordMap.set(JSON.stringify([r, c]), 0);
    }
    // console.log(coordMap.get([r, c]));
    coordMap.set(JSON.stringify([r, c]), coordMap.get(JSON.stringify([r, c])) + 1);
    maxStackedR(root.left, r + 1, c);
    maxStackedR(root.right, r, c + 1);
  }

  maxStackedR(root, 0, 0);

  return Math.max(...coordMap.values());
}

  // Test 1: Example from the book - two nodes stacked
  const root1 = new Node(1);
  root1.left = new Node(2);
  root1.right = new Node(3);
  root1.left.left = new Node(4);
  root1.left.right = new Node(5);
  root1.left.left.right = new Node(7);
  root1.right.left = new Node(6);
  root1.right.left.left = new Node(8);
  root1.right.left.right = new Node(9);
  console.log(maxStackedNodes(root1));

  const root2 = new Node(1);
  console.log(maxStackedNodes(root2));

  const root3 = new Node(1,
                  new Node(2),
                  new Node(3));
  console.log(maxStackedNodes(root3));

  // // Test 4: Perfect binary tree of depth 4
  const root4 = new Node(1,
                    new Node(2,
                          new Node(4,
                              new Node(8),
                              new Node(9, null, new Node(16))),
                          new Node(5,
                              new Node(10, null, new Node(17)),
                              new Node(11, new Node(18), null))),
                    new Node(3,
                          new Node(6,
                              new Node(12),
                              new Node(13)),
                          new Node(7,
                              new Node(14, new Node(19), null),
                              new Node(15, new Node(20), null))));
                              
  console.log(maxStackedNodes(root3));
