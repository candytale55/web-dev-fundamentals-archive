# JS-Singly-Linked-Lists
LinkedList is a class for creating a sequential chain of nodes , each containing two elements: data and a link to the next node.  Uses nodes from Node class in Node.js. It has these methods:   addToHead(data),  addToTail(data),  removeHead()  and  printList().

addToHead(data):
takes one parameter called data. Inside the method, create a Node const variable named newHead, and pass data as an argument. It checks if there is a current head to the list. If there is, it set the list’s head’s next node to currentHead.

addToTail(data):
takes one parameter called data and starts with a variable tail set equal to the list’s head. If there is no head, that means that the list is empty, and we will be creating the head and tail with the data passed in. Otherwise, we will iterate through the list until we find the last node (current tail) and we will add a pointer from that node to our new tail.

removeHead() 
takes no parameters. Sets variable removedHead to the list’s original head to keep track of it. It checks to see if the list had a head. If it doesn’t it returns nothing. If there is a head, it will remove it by setting the list’s head equal to the original head’s next node, and then return that original head data. 

printList()
creates a String (output) that holds the data from every node in the list starting at the list’s head set to variable currentNode. It iterates through the list adding currentNode's data and a ' ' to output and then updating currentNode to its next node. It does it while currentNode doesn’t equal null.


This uses Node.js created here: https://github.com/candytale55/JS_Node_Class_Getting_Started_DataStructs/blob/main/Node.js
