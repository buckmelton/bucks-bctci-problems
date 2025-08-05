// # Doubly Linked List Design

// Implement a `DoublyLinkedList` class with the following methods:

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

class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.theSize = 0;
    this.head = null;
    this.tail = null;
  }

  pushFront(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.theSize++;
  }

  popFront() {
    if (!this.head) {
      return null;
    }
    let popNode = this.head;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head.next.prev = null;
      this.head = this.head.next;
    }
    popNode.next = null;
    this.theSize--;
    return popNode.val;
  }

  pushBack(val) {
    const newNode = new Node(val);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.theSize++;
  }

  popBack() {
    if (!this.tail) {
      return null;
    }
    let popNode = this.tail;
    if (!this.tail.prev) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      popNode.prev = null;
    }
    this.theSize--;
    return popNode.val;
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

  size() {
    return this.theSize;
  }

  printHead() {
    let printStr = "head -> ";
    let curNode = this.head;
    while (curNode) {
      printStr += curNode.val + " -> ";
      curNode = curNode.next;
    }
    printStr += "null";
    console.log(printStr);
  }

  printTail() {
    let printStr = "tail -> ";
    let curNode = this.tail;
    while (curNode) {
      printStr += curNode.val + " -> ";
      curNode = curNode.prev;
    }
    printStr += "null";
    console.log(printStr);
  }
}


// Example 1:
const list1 = new DoublyLinkedList();
list1.pushFront(1);  // List is now: 1
list1.pushFront(2);  // List is now: 2<->1
// console.log(list1.popFront());
list1.pushBack(3);   // List is now: 2<->1<->3
list1.printHead();
list1.printTail();
console.log(list1.contains(2));   // Returns node with value 2
console.log(list1.contains(4));    // Returns None (value not found)
console.log(list1.size());         // Returns 3
console.log(list1.popFront());    // Returns 2, list is now: 1<->3
console.log(list1.popBack());     // Returns 3, list is now: 1
list1.printHead();
list1.printTail();


// Example 2:
const list2 = new DoublyLinkedList();
list2.popFront();    // Returns None (empty list)
list2.popBack();     // Returns None (empty list)
list2.size();         // Returns 0

// This diagram shows the typical structure of a doubly linked list:

// https://iio-beyond-ctci-images.s3.us-east-1.amazonaws.com/doubly-linked-list-design-1.png

// The `push_front()`, `pop_front()`, `push_back()`, `pop_back()`, and `size()` methods should all take `O(1)` time.

// Constraints:

// - You have to create the `Node` class with a `val` field and `prev` and `next` pointers. If your language is typed, you can either make the type of `val` be generic or integer.
// - The list can contain up to `10^5` nodes.