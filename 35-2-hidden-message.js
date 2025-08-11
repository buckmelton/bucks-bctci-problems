// # Hidden Message

// The self-proclaimed 'cryptography expert' in your friend group has devised their own schema to hide messages in binary trees. Each node has a text field with exactly two characters. The first character is either `'b'`, `'i'`, or `'a'`. The second character is part of the hidden message. To decode the message, you have to read the hidden-message characters in the following order:

// - If the first character in a node is `'b'`, the node goes before its left subtree, and the left subtree goes before the right subtree.
// - If it is `'a'`, the node goes after its right subtree, and the right subtree goes after the left subtree.
// - If it is `'i'`, the node goes after its left subtree and before its right subtree.

// Given the root of the binary tree, return the hidden message as a string.

// ```
// Example:

//                  bn
//                /    \
//              i_      a!
//             /  \     /
//           ae    it  br
//          /  \         \
//        bi    bc        ay

// Output: "nice_try!"
// ```

// https://iio-beyond-ctci-images.s3.us-east-1.amazonaws.com/trees_fig10.png

// Constraints:

// - Assume we have a binary tree node class with a `left` and `right` fields, and a `text` field.
// - The number of nodes is at most `10^5`
// - The height of the tree is at most `500`
// - The text field is a string of length `2`. The first character is either `'b'`, `'i'`, or `'a'`. The second character is a letter or number.

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function hiddenMessage(root) {
  let res = [];

  function hiddenMsgR(root) {
    if (!root) return;
    switch (root.val[0]) {
      case 'b':
        res.push(root.val[1]);
        hiddenMsgR(root.left);
        hiddenMsgR(root.right);
        break;
      case 'a':
        hiddenMsgR(root.left);
        hiddenMsgR(root.right);
        res.push(root.val[1]);
        break;
      case 'i':
        hiddenMsgR(root.left);
        res.push(root.val[1]);
        hiddenMsgR(root.right);
        break;
      default:
        console.log('invalid input');
    }
  }

  hiddenMsgR(root);

  return res.join('');
}

  // Test 1: Example from the book - "nice_try!"
  const root1 = new Node("bn");
  root1.left = new Node("i_");
  root1.left.left = new Node("ae");
  root1.left.right = new Node("it");
  root1.left.left.left = new Node("bi");
  root1.left.left.right = new Node("bc");
  root1.right = new Node("a!");
  root1.right.left = new Node("br");
  root1.right.right = new Node("ay");
  console.log(hiddenMessage(root1));

  // // Test 2: Empty tree
  const root2 = null;
  console.log(hiddenMessage(root2));

  // // Test 3: Single TreeNode with before order
  const root3 = new Node("bx");
  console.log(hiddenMessage(root3));

  // Test 4: Single TreeNode with in order
  const root4 = new Node("ix");
  console.log(hiddenMessage(root4));

  // Test 5: Single TreeNode with after order
  const root5 = new Node("ax");
  console.log(hiddenMessage(root5));

  // Test 6: All before order TreeNodes
  const root6 = new Node("b1",
                  new Node("b2",
                        new Node("b4", null, null),
                        new Node("b5", null, null)),
                  new Node("b3",
                        new Node("b6", null, null),
                        new Node("b7", null, null)));
  console.log(hiddenMessage(root6));

  // Test 7: All in order TreeNodes
  const root7 = new Node("i1",
                  new Node("i2",
                        new Node("i4", null, null),
                        new Node("i5", null, null)),
                  new Node("i3",
                        new Node("i6", null, null),
                        new Node("i7", null, null)));
  console.log(hiddenMessage(root7));

  // Test 8: All after order TreeNodes
  const root8 = new Node("a1",
                    new Node("a2",
                          new Node("a4", null, null),
                          new Node("a5", null, null)),
                    new Node("a3",
                          new Node("a6", null, null),
                          new Node("a7", null, null)));
  console.log(hiddenMessage(root8));

  // Test 9: Mixed orders forming "hello"
  const root9 = new Node("bh",
                    new Node("be",
                          new Node("bl", null, null),
                          new Node("il", null, null)),
                    new Node("ao", null, null));
  console.log(hiddenMessage(root9));

  // Test 10: Invalid first character
  const root10 = new Node("cx");
  console.log(hiddenMessage(root10));

  // Test 11: Text too short
  const root11 = new Node("i");
  console.log(hiddenMessage(root11));

  // Test 12: Text too long
  const root12 = new Node("bxy");
  console.log(hiddenMessage(root12));

