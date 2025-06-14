# Singly-Linked-Lists_JS

## General info

LinkedList.js contains a class for creating a sequential chain of nodes , each containing two elements: data and a link to the next node.   

Depending on the end-use of the linked list, there are a variety of methods that we can define. Here we want to be able to:

* add a new node to the beginning (head) of the list
* add a new node to the end (tail) of the list
* remove a node from the beginning (head) of the list
* print out the nodes in the list in order from head to tail

LinkedList class has these methods:   addToHead(data),  addToTail(data),  removeHead()  and  printList().

**_addToHead(data)_**:
takes one parameter called data. Inside the method, create a Node const variable named newHead, and pass data as an argument. It checks if there is a current head to the list. If there is, it set the list’s head’s next node to currentHead.

**_addToTail(data)_**:
takes one parameter called data and starts with a variable tail set equal to the list’s head. If there is no head, that means that the list is empty, and we will be creating the head and tail with the data passed in. Otherwise, we will iterate through the list until we find the last node (current tail) and we will add a pointer from that node to our new tail.

**_removeHead()_**:  
takes no parameters. Sets variable removedHead to the list’s original head to keep track of it. It checks to see if the list had a head. If it doesn’t it returns nothing. If there is a head, it will remove it by setting the list’s head equal to the original head’s next node, and then return that original head data. 

**_printList()_**:
creates a String (output) that holds the data from every node in the list starting at the list’s head set to variable currentNode. It iterates through the list adding currentNode's data and a ' ' to output and then updating currentNode to its next node. It does it while currentNode doesn’t equal null.


## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Status](#status)
* [References](#references)


## Technologies
* JavaScript ES6

## Status
Project is: _finished_. This will pop-up probably pop-up in other repositories along with Node.js.

## Inspiration
Based on exercises from Codecademy course _Pass the Technical Interview with JavaScript_ 
Here: https://www.codecademy.com/learn/paths/pass-the-technical-interview-with-javascript

## References
This uses Node.js created here:https://github.com/candytale55/Nodes_JS_DataStructs
