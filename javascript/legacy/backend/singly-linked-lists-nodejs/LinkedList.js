const Node = require('./Node');

class LinkedList {  
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }
  
  printList(){
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null){
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }
} // end LinkedList class



module.exports = LinkedList;



/*
A linked list is a sequential chain of nodes, each of which 
contains two elements: data and a link to the next node. 
Uses nodes from Node class in Node.js.

addToHead(data):
takes one parameter called data. Inside the method, create 
a Node const variable named newHead, and pass data as an argument. 
It checks if there is a current head to the list. If there is, 
it set the list’s head’s next node to currentHead.

addToTail(data):
takes one parameter called data and starts with a variable tail 
set equal to the list’s head. If there is no head, that means that 
the list is empty, and we will be creating the head and tail with 
the data passed in. Otherwise, we will iterate through the list until 
we find the last node (current tail) and we will add a pointer 
from that node to our new tail.

removeHead() 
takes no parameters. Sets variable removedHead to the list’s 
original head to keep track of it. It checks to see if the list 
had a head. If it doesn’t it returns nothing. If there is a head, 
it will remove it by setting the list’s head equal to the original 
head’s next node, and then return that original head data. 

printList()
creates a String (output) that holds the data from every node 
in the list starting at the list’s head set to variable currentNode. 
It iterates through the list adding currentNode's data and a ' ' to 
output and then updating currentNode to its next node. It does it 
while currentNode doesn’t equal null. 
*/
