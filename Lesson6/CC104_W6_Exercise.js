'use strict';

// ================================================================
// CAMPUS IT SUPPORT REQUEST MANAGER
// CC104 - Week 6 Hands-On Exercise: Stacks, Queues, and Linked Lists
// ================================================================

console.log('CAMPUS IT SUPPORT REQUEST MANAGER');

// ================================================================
// PART A: STACK
// A Stack stores actions in Last-In-First-Out (LIFO) order, so the
// most recently performed action is the first one that gets undone.
// ================================================================

class Stack {
  // Use a plain array as the only internal storage for the stack.
  constructor() {
    this.items = [];
  }

  // Add an element to the top of the stack.
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element of the stack.
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop();
  }

  // Return the top element without removing it.
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }

  // Return true when the stack has no elements.
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the number of elements currently in the stack.
  size() {
    return this.items.length;
  }

  // Return all elements as a single comma-separated string.
  toString() {
    return this.items.join(', ');
  }
}

console.log('\nPART A: UNDO HISTORY');

const actionHistory = new Stack();

// Push the three required actions, in order, onto the stack.
actionHistory.push('Opened Ticket #101');
actionHistory.push('Assigned Ticket #101');
actionHistory.push('Closed Ticket #101');

// Display the current top action.
console.log(`Top Action: ${actionHistory.peek()}`);

// Undo (pop) the most recent action and display it.
const undoneAction = actionHistory.pop();
console.log(`Undo Action: ${undoneAction}`);

// Display the actions that remain on the stack, and the stack size.
console.log(`Remaining Actions: ${actionHistory.toString()}`);
console.log(`Stack Size: ${actionHistory.size()}`);

// ================================================================
// PART B: QUEUE
// A Queue stores requests in First-In-First-Out (FIFO) order, so
// requests are processed in the same order they arrived.
// ================================================================

class Queue {
  // Use a plain array as the only internal storage for the queue.
  constructor() {
    this.items = [];
  }

  // Add an element to the back of the queue.
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the front element of the queue.
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.shift();
  }

  // Return the front element without removing it.
  front() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[0];
  }

  // Return true when the queue has no elements.
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the number of elements currently in the queue.
  size() {
    return this.items.length;
  }

  // Return all elements as a single comma-separated string.
  toString() {
    return this.items.join(', ');
  }
}

console.log('\nPART B: WAITING REQUESTS');

const waitingRequests = new Queue();

// Enqueue the four required requests, in arrival order.
waitingRequests.enqueue('Ticket #201 - Password Reset');
waitingRequests.enqueue('Ticket #202 - No Internet');
waitingRequests.enqueue('Ticket #203 - Printer Problem');
waitingRequests.enqueue('Ticket #204 - Software Installation');

// Display the request currently at the front of the queue.
console.log(`Next Request: ${waitingRequests.front()}`);

// Process (dequeue) two requests, displaying each as it is handled.
console.log(`Processed: ${waitingRequests.dequeue()}`);
console.log(`Processed: ${waitingRequests.dequeue()}`);

// Display the requests that remain in the queue, and the queue size.
console.log(`Remaining Requests: ${waitingRequests.toString()}`);
console.log(`Queue Size: ${waitingRequests.size()}`);

// ================================================================
// PART C: PRIORITY QUEUE
// A Priority Queue keeps items ordered by priority (1 = Critical,
// 2 = High, 3 = Normal). Items that share a priority keep the order
// they arrived in.
// ================================================================

class PriorityQueue {
  // Use a plain array as the only internal storage for the queue.
  constructor() {
    this.items = [];
  }

  // Insert a request at the position that matches its priority.
  enqueue(request, priority) {
    const queueItem = { request, priority };

    // Walk the array and insert right before the first item that is
    // strictly less urgent (a higher priority number). Because equal
    // priorities never trigger this condition, items with the same
    // priority keep their original arrival order.
    let inserted = false;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > queueItem.priority) {
        this.items.splice(i, 0, queueItem);
        inserted = true;
        break;
      }
    }

    // If every existing item is equally or more urgent, add it last.
    if (!inserted) {
      this.items.push(queueItem);
    }
  }

  // Remove and return the first (most urgent) item in the queue.
  dequeue() {
    if (this.items.length === 0) {
      return undefined;
    }
    return this.items.shift();
  }

  // Return the number of items currently in the queue.
  size() {
    return this.items.length;
  }

  // Display every request together with its priority.
  print() {
    this.items.forEach((item) => {
      console.log(`${item.request}, Priority ${item.priority}`);
    });
  }
}

console.log('\nPART C: URGENT REQUESTS');

const urgentRequests = new PriorityQueue();

// Enqueue the four required requests, in the given order.
urgentRequests.enqueue('Ticket #301 - Install Browser', 3);
urgentRequests.enqueue('Ticket #302 - Server Offline', 1);
urgentRequests.enqueue('Ticket #303 - Faculty PC Failure', 2);
urgentRequests.enqueue('Ticket #304 - Internet Laboratory Down', 1);

// Display the initial priority order.
console.log('Initial Priority Order:');
urgentRequests.print();

// Process the first (most urgent) request and display it.
const processedUrgentRequest = urgentRequests.dequeue();
console.log(
  `Processed Priority Request: ${processedUrgentRequest.request}, Priority ${processedUrgentRequest.priority}`
);

// Display the priority requests that remain.
console.log('Remaining Priority Requests:');
urgentRequests.print();

// ================================================================
// PART D: LINKED LIST
// A Linked List stores completed requests as a chain of Node objects,
// each pointing to the next, instead of using an array.
// ================================================================

class Node {
  // Store the element's value and set the link to the next node.
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  // Track the first node (head) and the number of nodes in the list.
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // Add a new node containing element to the end of the list.
  append(element) {
    const node = new Node(element);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }

    this.length++;
  }

  // Insert a new node containing element at the given position.
  insert(position, element) {
    if (position < 0 || position > this.length) {
      return false;
    }

    const node = new Node(element);

    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let previous = null;
      let current = this.head;
      let index = 0;

      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }

      previous.next = node;
      node.next = current;
    }

    this.length++;
    return true;
  }

  // Remove the node at the given position and return its element.
  removeAt(position) {
    if (position < 0 || position >= this.length) {
      return null;
    }

    let current = this.head;

    if (position === 0) {
      this.head = current.next;
    } else {
      let previous = null;
      let index = 0;

      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }

      previous.next = current.next;
    }

    this.length--;
    return current.element;
  }

  // Traverse the list and return the position of element, or -1.
  indexOf(element) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.element === element) {
        return index;
      }
      current = current.next;
      index++;
    }

    return -1;
  }

  // Find element by value and remove it, reusing indexOf and removeAt.
  remove(element) {
    const position = this.indexOf(element);
    return this.removeAt(position);
  }

  // Return true when the list has no nodes.
  isEmpty() {
    return this.length === 0;
  }

  // Return the number of nodes currently in the list.
  size() {
    return this.length;
  }

  // Traverse the list and return all elements as a joined string.
  toString() {
    const elements = [];
    let current = this.head;

    while (current !== null) {
      elements.push(current.element);
      current = current.next;
    }

    return elements.join(', ');
  }
}

console.log('\nPART D: COMPLETED REQUESTS');

const completedRequests = new LinkedList();

// Append the three required requests, in order.
completedRequests.append('Ticket #401 - Account Activated');
completedRequests.append('Ticket #402 - Printer Connected');
completedRequests.append('Ticket #403 - Antivirus Updated');

// Insert Ticket #400 at the very beginning of the list.
completedRequests.insert(0, 'Ticket #400 - Computer Diagnosed');

// Insert Ticket #405 at the end of the list using insert().
completedRequests.insert(completedRequests.size(), 'Ticket #405 - Browser Updated');

// Display the complete list before any removals.
console.log(`Complete List: ${completedRequests.toString()}`);

// Find and display the index of Ticket #402.
const indexOfTicket402 = completedRequests.indexOf('Ticket #402 - Printer Connected');
console.log(`Index of Ticket #402: ${indexOfTicket402}`);

// Remove the item at position 1 using removeAt() and display it.
const removedAtPosition1 = completedRequests.removeAt(1);
console.log(`Removed at Position 1: ${removedAtPosition1}`);

// Remove Ticket #403 by value using remove() and display it.
const removedByValue = completedRequests.remove('Ticket #403 - Antivirus Updated');
console.log(`Removed by Value: ${removedByValue}`);

// Display the final list and its size.
console.log(`Final List: ${completedRequests.toString()}`);
console.log(`Final Size: ${completedRequests.size()}`);