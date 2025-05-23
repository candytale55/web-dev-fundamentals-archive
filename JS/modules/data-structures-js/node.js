
class Node {
  constructor(data){
    this.data = data;
    this.next = null;
    this.previous = null;
  }

  setNextNode(node){
    if (node instanceof Node || node === null){
      this.next = node;
    }
    else {
      throw new Error('El siguiente nodo debe pertenecer a la clase Node')
    }
  }

  setPreviousNode(node){
    if (node instanceof Node || node === null){
      this.previous = node;
    } 
    else {
      throw new Error('El nodo anterior debe pertenecer a la clase Node')
    }
  }

  getNextNode(){
    return this.next;
  }

  getPreviousNode(){
    return this.previous;
  }
} // Fin Node

module.exports = Node