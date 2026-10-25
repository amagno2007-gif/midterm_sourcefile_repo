// execute safer and cleaner, easy to catch bugs
'use strict'; 

function showSection(title){
    console.log('\n' + '='.repeat(72));
    console.log(title);
    console.log('='.repeat(72));
}

function showTopic(title){
    console.log('\n---' + title + '---');
}

showSection('LINKED LISTS');

/**
 * A singly linked-list node stores a value and a reference to the next node.
 */
class Node {
  /** Create a node that is not yet connected to another node. */
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

/**
 * A singly linked list begins at head and follows next references.
 */
class LinkedList {
  /** Create an empty linked list. */
  constructor() {
    this.length = 0;
    this.head = null;
  }

  /** Add a new element at the end of the list. */
  append(element) {
    // Place the value inside a new node.
    const node = new Node(element);

    // Make the new node the head when the list is empty.
    if (this.head === null) {
      this.head = node;
    } else {
      // Begin at the head and search for the final node.
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      // Connect the old final node to the new node.
      current.next = node;
    }

    // Increase the stored node count.
    this.length++;
  }

  /** Insert an element at a valid position from zero through length. */
  insert(position, element) {
    // Reject a negative position or a position beyond the list end.
    if (position < 0 || position > this.length) {
      return false;
    }

    // Create the node and start traversal at the head.
    const node = new Node(element);
    let current = this.head;

    // Handle insertion at the first position.
    if (position === 0) {
      node.next = current;
      this.head = node;
    } else {
      // Track the nodes before and at the insertion position.
      let previous = null;
      let index = 0;

      // Move both references until the desired position is reached.
      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }

      // Connect the new node between previous and current.
      node.next = current;
      previous.next = node;
    }

    // Record the successful insertion.
    this.length++;
    return true;
  }

  /** Remove and return the element at a valid position. */
  removeAt(position) {
    // Reject any position outside zero through length minus one.
    if (position < 0 || position >= this.length) {
      return null;
    }

    // Begin with the first node as the current target.
    let current = this.head;

    // Handle removal of the first node.
    if (position === 0) {
      this.head = current.next;
    } else {
      // Track the node before the target and the target itself.
      let previous = null;
      let index = 0;

      // Traverse until current reaches the requested position.
      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }

      // Skip current by linking previous directly to the following node.
      previous.next = current.next;
    }

    // Decrease the node count and return the removed value.
    this.length--;
    return current.element;
  }

  /** Find and return the position of an element or negative one. */
  indexOf(element) {
    // Begin at the head and position zero.
    let current = this.head;
    let index = 0;

    // Compare every node until a match is found or the list ends.
    while (current !== null) {
      if (current.element === element) {
        return index;
      }

      current = current.next;
      index++;
    }

    // Indicate that the element does not exist.
    return -1;
  }

  /** Remove an element by finding its position and reusing removeAt. */
  remove(element) {
    return this.removeAt(this.indexOf(element));
  }

  /** Return true when the list contains no nodes. */
  isEmpty() {
    return this.length === 0;
  }

  /** Return the number of nodes in the list. */
  size() {
    return this.length;
  }

  /** Return the first node reference. */
  getHead() {
    return this.head;
  }

  /** Convert all element values into one readable string. */
  toString() {
    // Start at the head with an empty output string.
    let current = this.head;
    let result = '';

    // Append each element and move to the next node.
    while (current !== null) {
      result += current.element;
      result += current.next !== null ? ', ' : '';
      current = current.next;
    }

    // Return the completed text.
    return result;
  }
}

// --------------------------------------------------------------------------
// 5.1 Using a singly linked list
// --------------------------------------------------------------------------

showTopic('Using a singly linked list');

// Create an empty list and append three values.
const singlyList = new LinkedList();
singlyList.append(15);
singlyList.append(10);
singlyList.append(25);

// Display the list after appending.
console.log('After append:', singlyList.toString());

// Insert at the beginning, middle, and end.
singlyList.insert(0, 5);
singlyList.insert(2, 12);
singlyList.insert(singlyList.size(), 30);

// Display the list after all insertions.
console.log('After insertions:', singlyList.toString());

// Search for existing and missing values.
console.log('Index of 12:', singlyList.indexOf(12));
console.log('Index of 100:', singlyList.indexOf(100));

// Remove one value by position and another by value.
console.log('Removed at position 0:', singlyList.removeAt(0));
console.log('Removed value 12:', singlyList.remove(12));

// Display the final contents and state.
console.log('Final singly linked list:', singlyList.toString());
console.log('List size:', singlyList.size());
console.log('Is the list empty?', singlyList.isEmpty());