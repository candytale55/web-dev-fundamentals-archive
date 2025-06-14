const Node = require('./node')

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(data){
    const newHead = new Node(data);
    const currentHead = this.head;

    if (currentHead) {
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead);
    }
    this.head = newHead;
    if (!this.tail) {
      this.tail = newHead;
    }
  } //addToHead

  addToTail(data){
    const newTail = new Node(data);
    const currentTail = this.tail;

    if (currentTail){
      currentTail.setNextNode(newTail);
      newTail.setPreviousNode(currentTail);
    }
    this.tail = newTail;
    if (!this.head){
      this.head = newTail;
    }
  } //addToTail

  removeHead(){
    const removedHead = this.head;
    if(!removedHead){
      return;
    }
    this.head = removedHead.getNextNode();
    if (this.head){
      this.head.setPreviousNode(null);
    }
    if (removedHead === this.tail){
      this.removeTail();
    }
    return removedHead.data;
  } // removeHead

  removeTail(){
    const removedTail = this.tail;
    if (!removedTail){
      return;
    }
    this.tail = removedTail.getPreviousNode();
    if (this.tail){
      this.tail.setNextNode(null);
    }
    if (removedTail === this.head){
      this.removeHead();
    }
    return removedTail.data;
  } // removeTail

  removedByData(data){
    let nodeToRemove;
    let currentNode = this.head;
    while (currentNode !== null){
      if (currentNode.data === data){
        nodeToRemove = currentNode;
        break;
      }
      currentNode = currentNode.getNextNode();
    }
    if (!nodeToRemove){
      return null;
    }
    if (nodeToRemove === this.tail){
      this.removeTail();
    } 
    else {
      const nextNode = nodeToRemove.getNextNode();
      const previousNode = nodeToRemove.getPreviousNode();
      nextNode.setPreviousNode(previousNode);
      previousNode.setNextNode(nextNode);
    }
    return nodeToRemove;
  } // removedByData

  printList() {
    let currentNode = this.head;
    let output = '<inicio> '
    while (currentNode !== null) {
      output += currentNode.data + '   ';
      currentNode = currentNode.getNextNode();
    }
    output += '<fin>'
    console.log(output);
  }
} // DoublyLinkedList

module.exports = DoublyLinkedList;
