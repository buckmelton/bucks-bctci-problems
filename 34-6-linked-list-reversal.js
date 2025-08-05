// Linked-List Reversal

// Given the head, `head`, of a singly linked list, reverse the nodes **in place** and return the new head of the list. The list may be empty.

// ```
// Example 1:
// Input: 1 -> 2 -> 3 -> null
// Output: 3 -> 2 -> 1 -> null

// Example 2:
// Input: null
// Output: null

// Example 3:
// Input: 1 -> null
// Output: 1 -> null
// ```

// Constraints:

// - You have to create the `Node` class with an integer `val` field and a `next` pointer.
// - The list can contain up to `10^5` nodes.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const reverse = (head) => {
  let prev = null;
  let cur = head;
  let nxt = undefined;
  while (cur) {
    nxt = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nxt;
  }
  return prev;
}

let head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);
let reversed1 = reverse(head1);
console.log(reversed1);

let head2 = null;
let reversed2 = reverse(head2);
console.log(reversed2);

let head3 = new Node(1);
let reversed3 = reverse(head3);
console.log(reversed3);

