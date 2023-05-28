// #implement queue using stack

class Queue {
  constructor() {
    this.S1 = new Stack();
    this.S2 = new Stack();
  }
  push(value) {
    while (!this.S1.isEmpty()) {
      this.S2.push(this.S1.top());
      this.S1.pop();
    }
    this.S1.push(value);
    while (!this.S2.isEmpty()) {
      this.S1.push(this.S2.top());
      this.S2.pop();
    }
  }

  pop() {
    return this.S1.pop();
  }
  front() {
    return this.S1.top();
  }
  isEmpty() {
    return this.S1.isEmpty();
  }
}

// # stack using queue

class Stack {
  constructor() {
    this.Q1 = new Queue();
    this.Q2 = new Queue();
  }
  push(value) {
    //write your code here..

    while (!this.Q1.isEmpty()) {
      this.Q2.push(this.Q1.front());
      this.Q1.pop();
    }
    this.Q1.push(value);
    while (!this.Q2.isEmpty()) {
      this.Q1.push(this.Q2.front());
      this.Q2.pop();
    }
  }
  pop() {
    //write your code here.
    return this.Q1.pop();
  }
  top() {
    //write your code here..
    return this.Q1.front();
  }
  isEmpty() {
    //write your code here..
  }
}

//# Link List Node in palindrome

const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};
// Complete the function below
var isPalindrome = function (head) {
  let s = [];
  let ip = true;
  let current = head;

  while (current !== null) {
    s.push(current.data);
    current = current.next;
  }

  while (head !== null) {
    let x = s.pop();
    if (head.data !== x) {
      ip = false;
      break;
    }
    head = head.next;
  }
  return ip;
};
