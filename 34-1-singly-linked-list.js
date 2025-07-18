// # Singly Linked List Design

// Implement a `SinglyLinkedList` class with the following methods. Assume the `Node` class below is already defined. The `size()` method should take `O(1)` time.

// The class should look like this:

// ```
// class SinglyLinkedList:
//   constructor(self):
//     self.head = None
//     self.size = 0
// ```

// And should have the following methods:

// ```
// - push_front(v): Adds a node with value v at the beginning of the list.
// - pop_front(): Removes the node at the beginning of the list and returns its value. If the list is empty, returns None.
// - push_back(v): Adds a node with value v at the end of the list.
// - pop_back(): Removes the node at the end of the list and returns its value. If the list is empty, returns None.
// - size(): Returns the number of nodes in the list.
// - contains(v): Return the first node with value v, if any, or null otherwise.
// ```

// Here are some examples uses

// ```
// Example 1:
// Input: [1, 2, 3], push_front(0), pop_back()
// Output: [0, 1, 2]

// Example 2:
// Input: [], push_back(1), pop_front()
// Output: []

// Example 3:
// Input: [1], pop_front(), pop_back()
// Output: []
// ```

// https://iio-beyond-ctci-images.s3.us-east-1.amazonaws.com/singly-linked-list-design-1.png

// Constraints:

// - The list can contain up to 10^5 nodes.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  head = null;
  theSize = 0;

  pushFront(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.theSize++;
    this.head = newNode;
  }

  popFront() {
    if (!this.head) {
      return null;
    }
    let popVal = this.head.val;
    this.head = this.head.next;
    this.theSize--;
    return popVal;
  }

  pushBack(val) {
    let pushNode = new Node(val);
    if (!this.head) {
      this.head = pushNode;
    } else {
      let curNode = this.head;
      while (curNode.next) {
        curNode = curNode.next;
      }
      curNode.next = pushNode;
    }
    this.theSize++;
  }

  popBack() {
    if (!this.head) {
      return null;
    } else {
      let popVal = undefined;
      if (!this.head.next) {
        popVal = this.head.val;
        this.head = null
      } else {
        let curNode = this.head;
        while (curNode.next.next) {
          curNode = curNode.next
        }
        popVal = curNode.next.val;
        curNode.next = null;
      }
      this.theSize--;
      return popVal;
    }
  }
  
  size() {
    return this.theSize;
  }

  contains(val) {
    let curNode = this.head;
    while (curNode) {
      if (curNode.val == val) {
        return curNode;
      }
      curNode = curNode.next;
    }
    return null;
  }

  print() {
    let curNode = this.head;
    let linkedListString = '[';
    while (curNode) {
      linkedListString = linkedListString + curNode.val + '->';
      curNode = curNode.next;
    }
    linkedListString = linkedListString + ']'
    console.log(linkedListString);
  }
}

/*
Complexity:

Time: pushFront, popFront, and size are O(1).  pushBack, popBack, and contain are O(N) since
for the first two we are always traversing the entire list, and for contain we are, worst case,
traversing the entire list.

Space: O(1).
We're never creating more than a few constant-sized variables.
*/

let mySLL = new SinglyLinkedList();
mySLL.pushBack(1);
mySLL.pushBack(2);
mySLL.pushBack(3);
mySLL.pushFront(0);
console.log(mySLL.popBack());
mySLL.print();
console.log('size: ', mySLL.size());
console.log(mySLL.contains(1));

let mySLL2 = new SinglyLinkedList();
mySLL2.pushBack(1);
console.log(mySLL2.popFront());
mySLL2.print();

let mySLL3 = new SinglyLinkedList();
mySLL3.popFront();
mySLL3.popBack();
mySLL3.print();