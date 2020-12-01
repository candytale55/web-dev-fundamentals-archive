class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error('Next node must be a member of the Node class.');
    }
  }

  getNextNode() {
    return this.next;
  }
}




/*
ice cream shop that sells three flavors: strawberry, vanilla, and coconut. 
The signature sundae is made of these three flavors, 
but new hires have a hard time remembering the order.
*/

const strawberryNode = new Node('Berry Tasty');
const vanillaNode = new Node('Vanilla');
const coconutNode = new Node('Coconuts for Coconut');

vanillaNode.setNextNode(strawberryNode);
strawberryNode.setNextNode(coconutNode);

// Will use currentNode to iterate through the nodes,
let currentNode = vanillaNode;
while(currentNode) {
  console.log(currentNode.data);
  currentNode = currentNode.getNextNode();
}

module.exports = Node;


/*
NOTES:

constructor(data)
Will create a basic node that contains data and one link to another node. 
The node’s data will be specified when creating the node and immutable 
(can’t be updated). A node’s link to the next node is initially null.

setNextNode(node)
we want to allow the next node to be updated so it can be traversed 
and used in more complex data structures. For this, we will use a setter
to modify this.next node property.

add in a check that only allows arguments that are instanceof nodes or null.
We want to allow null values as an argument in the event that we want 
to break the link between a node and its next node.

getNextNode() 
method that just returns the next node property.
*/
