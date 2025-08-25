// # Invert a Binary Tree

// Given a binary tree, invert it by modifying the `left` and `right` pointers (do not modify the values in the nodes or create new nodes).

// The left subtree of the root should become the right subtree inverted, and the right subtree of the root should become the left subtree inverted.

// Return the root of the tree after modifying it.

// Example:
//      1
//    /   \
//   6     7
//  / \   /
// 4  11 2
//  \     \
//   5     9

// Output:
//      1
//    /   \
//   7     6
//    \   / \
//     2 11  4
//    /     /
//   9     5

// https://iio-beyond-ctci-images.s3.us-east-1.amazonaws.com/trees_fig13.png

// Constraints:

// - The number of nodes is at most `10^5`
// - The height of the tree is at most `500`
// - Each node has a value between `0` and `10^9`

class Node {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function invertBinaryTree(root) {
  if (!root) {
    return null;
  }

  let temp = root.left;
  root.left = invertBinaryTree(root.right);
  root.right = invertBinaryTree(temp);
  return root;
}

/*
Complexity:
Time:
We visit each of the N nodes exactly once, to reverse its children.
Therefore the time complexity is O(N).

Space:
We have at most log N (depth of the tree) calls on the recursion call
stack, and each call has a constant temp variable O(1).  So the space
complexity is O(N * 1) => O(N).
*/

// Test 1: Example from the book - tree with 4 triangles
let root1a = new Node(1,
                      new Node(6,
                               new Node(4,
                                        null,
                                        new Node(5)),
                               new Node(11)),
                      new Node(7,
                               new Node(2,
                                        null,
                                        new Node(9)),
                               null));

console.log(invertBinaryTree(root1a));

let root1b = new Node(1);
root1b.left = new Node(7);
root1b.right = new Node(6);
root1b.left.right = new Node(2);
root1b.left.right.left = new Node(9);
root1b.right.left = new Node(11);
root1b.right.right = new Node(4);
root1b.right.right.left = new Node(5);

console.log(invertBinaryTree(root1b));

// Test 2: Empty tree
let root2 = null;

console.log(invertBinaryTree(root2));

// Test 3: Single node
let root3 = new Node(1);

console.log(invertBinaryTree(root3));

let root4a = new Node(1,
              new Node(2,
                    new Node(3),
                    null),
              null);


console.log(invertBinaryTree(root4a));

let root4b = new Node(1,
                      null,
                      new Node(2,
                               null,
                               new Node(3)));

console.log(invertBinaryTree(root4b));
