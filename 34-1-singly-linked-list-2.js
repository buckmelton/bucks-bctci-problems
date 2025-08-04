// Singly Linked List Design
// Implement a `SinglyLinkedList` class with the following methods:

// ```
// push_front(v):
//     Adds a node with value v at the beginning of the list.

// pop_front():
//     Removes the node at the beginning of the list and returns its value.
//     If the list is empty, returns None.

// push_back(v):
//     Adds a node with value v at the end of the list.

// pop_back():
//     Removes the node at the end of the list and returns its value.
//     If the list is empty, returns None.

// size():
//     Returns the number of nodes in the list.

// contains(v):
//     Return the first node with value v, if any, or null otherwise.
// ```

// Here are some examples:

// ```
// Example 1:
// list = SinglyLinkedList()
// list.push_front(1)  # List is now: 1
// list.push_front(2)  # List is now: 2->1
// list.push_back(3)   # List is now: 2->1->3
// list.contains(2)    # Returns node with value 2
// list.contains(4)    # Returns None (value not found)
// list.size()         # Returns 3
// list.pop_front()    # Returns 2, list is now: 1->3
// list.pop_back()     # Returns 3, list is now: 1

// Example 2:
// list = SinglyLinkedList()
// list.pop_front()    # Returns None (empty list)
// list.pop_back()     # Returns None (empty list)
// list.size()         # Returns 0
// ```

// This diagram shows the typical structure of a singly linked list:

// https://iio-beyond-ctci-images.s3.us-east-1.amazonaws.com/singly-linked-list-design-1.png

// Constraints:

// - You have to create the `Node` class with a `val` field and a `next` pointer. If your language is typed, you can either make the type of `val` be generic or integer.
// - The `push_front()`, `pop_front()`, and `size()` methods should take `O(1)` time if the elements are integers.
// - The list can contain up to `10^5` nodes.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.theSize = 0;
  }

  pushFront(val) {
    const newNode = new Node(val);
    if (this.head) {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.theSize++;
  }

  popFront() {
    if (!this.head) {
      return null;
    }
    const popNode = this.head;
    this.head = this.head.next;
    this.theSize--;
    return popNode.val;
  }

  pushBack(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    }
    let curNode = this.head;
    while (curNode.next) {
      curNode = curNode.next;
    }
    curNode.next = newNode;
    this.theSize++;
  }

  popBack() {
    if (!this.head) {
      return null;
    }
    let popNode = undefined;
    if (!this.head.next) {
      popNode = this.head;
      this.head = null;
      return popNode.val;
    }
    let curNode = this.head;
    while(curNode.next.next) {
      curNode = curNode.next;
    }
    popNode = curNode.next;
    curNode.next = null;
    this.theSize--;
    return popNode.val;
  }

  size() {
    return this.theSize;
  }

  contains(val) {
    let curNode = this.head;
    while (curNode) {
      if (curNode.val == val) {
        break;
      }
      curNode = curNode.next;
    }
    return curNode;
  }

  print() {
    let printStr = "head -> ";
    let curNode = this.head;
    while (curNode) {
      printStr += curNode.val + " -> ";
      curNode = curNode.next;
    }
    printStr += "null";
    console.log(printStr);
  }
}

/*
Time Complexity: O(1) or O(N), depending on method.
The time complexity of popFront, pushFront, and size is O(1), because the first node and the size are immediately available.
The time complexity of popBack, pushBack, and contains is O(N) where N is the number of nodes in the list.  popBack and pushBack will always have exactly O(N) since we must iterate through all nodes to get to the last node.  contains has complexity of an average of O(N), since the the node with the desired value may be anywhere along the linked list.

Space Complexity: O(1)
The space complexity of all methods is O(1), because we don't require and additional space except sometimes for a tracking node pointer.
*/

// Example 1:
let list1 = new SinglyLinkedList();
list1.pushFront(1);  // List is now: 1
list1.pushFront(2);  // List is now: 2->1
list1.pushBack(3);   // List is now: 2->1->3
console.log(list1.contains(2));    // Returns node with value 2
console.log(list1.contains(4));    // Returns None (value not found)
console.log(list1.size());         // Returns 3
list1.popFront();    // Returns 2, list1 is now: 1->3
list1.popBack();     // Returns 3, list1 is now: 1
list1.print();

// Example 2:
let list2 = new SinglyLinkedList();
list2.popFront();    // Returns None (empty list)
list2.popBack();     // Returns None (empty list)
console.log(list2.size());        // Returns 0
list2.print();

// Example 3: popBack from a single-node list
let list3 = new SinglyLinkedList();
list3.pushFront(3);
console.log(list3.popBack());
list3.print();
