// # Aligned Chain

// Given a binary tree, we say a node is _aligned_ if its value is equal to its depth (distance from root).
// A _descendant chain_ is a sequence of nodes where each node is the parent of the next node.
// Return the length of the longest descendant chain of aligned nodes. The chain does not need to start at the root.

// ```
// Example:
//                 7
//                / \
//               1   3
//              / \   \
//             2   8   2
//            / \     / \
//           4   3   3   3

// Output: 3
// The aligned nodes are the circled ones:
// Depth
//   0             7
//                / \
//   1          (1)   3
//              / \   \
//   2        (2)  8  (2)
//            / \     / \
//   3       4  (3) (3) (3)

// The longest descendant chain of aligned nodes is 1 -> 2 -> 3 on the left subtree.
// ```

// Constraints:

// - The number of nodes is at most `10^5`
// - The height of the tree is at most `500`
// - Each node has a value between `0` and `10^9`

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function longestAlignedChain(root) {

  let longestChain = 0;

  function longestAlignedChainR(root, level) {
    if (!root) return 0;
    let leftChain = longestAlignedChainR(root.left, level + 1);
    let rightChain = longestAlignedChainR(root.right, level + 1);
    let curChain = 0;
    if (root.val === level) {
      curChain = 1 + Math.max(leftChain, rightChain);
      longestChain = Math.max(longestChain, curChain);
    }
    return curChain;
  }
  
  longestAlignedChainR(root, 0);
  return longestChain;
}

const root1 = new Node(7, new Node(1, new Node(2, new Node(4), new Node(3)),
                    new Node(8)), new Node(3, new Node(2, new Node(3))));
console.log(root1);
console.log(longestAlignedChain(root1));

const root2 = new Node(0,
              new Node(1,
                 new Node(2,
                    new Node(3),
                    null),
                 new Node(4)),
              new Node(5));
console.log(root2);
console.log(longestAlignedChain(root2));

// Test 3: Empty tree
const root3 = null; // 0
console.log(root3);
console.log(longestAlignedChain(root3));

// Test 4: Single node aligned at root
const root4 = new Node(0); // 1
console.log(root4);
console.log(longestAlignedChain(root4));

// Test 5: Single node not aligned
const root5 = new Node(1); // 0
console.log(root5);
console.log(longestAlignedChain(root5));

// Test 6: Multiple valid chains, should return longest
const root6 = new Node( 0,
                        new Node(1,
                              new Node(2,
                                  new Node(4),
                                  null),
                              new Node(2,
                                  new Node(3),
                                  null))); // 4
console.log(root6);
console.log(longestAlignedChain(root6));

// Test 7: No aligned nodes
const root7 = new Node( 5,
                        new Node(4,
                              new Node(3),
                              new Node(3)),
                        new Node(2)); // 0
console.log(root7);
console.log(longestAlignedChain(root7));

// Test 8
const root8 = new Node( 0,
                        new Node(1),
                        new Node(1)); // 2
console.log(root8);
console.log(longestAlignedChain(root8));

