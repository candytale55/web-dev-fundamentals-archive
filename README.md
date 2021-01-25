# Doubly-Linked-List_JS
A doubly linked list implementation in JS.  A doubly linked list is a sequential chain of nodes that contains two elements: data and links to the next and previous nodes.


## Table of contents
* [General info](#general-info)
* [Features](#features)
* [Methods](#methods)
* [Technologies](#technologies)
* [Setup](#setup)
* [Status](#status)
* [Credits](#credits)
* [References](#references)


## General info
A doubly linked list is a sequential chain of nodes that contains two elements: data and links to the next and previous nodes.

This means that the doubly linked list data structure has a tail property in addition to the head property that’s present in the linked list data structure.

## Features: 
This is an implementation of a doubly linked list JS in a class named _DoublyLinkedList_.

The class functionalities include:
* add a new node to the beginning (head) of the list
* add a new node to the end (tail) of the list
* remove a node from the beginning (head) of the list
* remove a node from the end (tail) of the list
* find and remove a specific node by its data
* print out the nodes in the list in order from head to tail

The nodes are instances of the Node class in Node.js.

## Methods

**_(of class DoublyLinkedList)_**

__.addToHead(data)__: sets the list’s head to a new Node.
  * It creates (1) a Node const _newHead_ that takes _data_ as argument and (2) a const variable _currentHead_  set to the list's head.
  * Then it checks if there is a current head to the list.

If there is (so the list is not empty) it resets the pointers at the head of the list by:
  * Setting current head’s previous node to the new head in currentHead.setPreviousNode(newHead);
  * Setting new head’s next node to the current head in newHead.setNextNode(currentHead);
  * Set the list’s head to the new head.

If there wasn’t a current tail to the list (the list was empty) it: 
  * Updates the tail property to be the new head since that node will be both the head and tail



__.addToTail(data)__  does the same as .addToHead but in the opposite direction (tail to head)



__.removeHead()__  takes no parameters and it removes the head of the list. It creates a const variable _removedHead_ and sets it to the list’s headm then:
* (1) Checks if removedHead has value. If not, there’s nothing to remove because the list was empty, so _return_ to end the method otherwise it updates the list’s head to be the current head’s next node.
* (2) If there is still a head to the list, it means the list had more than one element when we started, so it sets the head’s previous node to null, since the head of the list shouldn’t have a previous node.
* (3) If removedHead was also the tail of the list, it calls _removeTail()_ to change the tail of the list. 
* (4) It returns the old head's data.



__.removeTail()__ takes no perameters and removes the tail of the list. It mirrors the .removeHead() method.


__.removeByData(data)__ allows to remove a node from the list no matter where it is. It creates two variables nodeToRemove and currentNode, then:

Iterates through the list and finds the matching node with a while loop that runs while currentNode isn’t null. Inside the loop, currentNode updates to be its next node. 
  * If there is no matching element in the list: Returns null
  * If there is a matching node, we will then check to see if it is the head or tail of the list:
    - If its the head or the tail, it calls the .removeHead() or .removeTail() method.
    - If it's not the head and the tail, that means the node was somewhere in the middle of the list, so it removes the node by changing the pointers for its previous and next nodes
  * Finally, returns the node


## Technologies
* Javascript E6

## Setup
NA - It's only coding examples, there's no setup.

## Code Examples
`na`

## Status
Project is: _in progress_

## Credits
Based on exercises from Codecademy course _Pass the Technical Interview with JavaScript_ 
Here: https://www.codecademy.com/learn/paths/pass-the-technical-interview-with-javascript

## References
This uses Node.js created here:https://github.com/candytale55/Nodes_JS_DataStructs

Example of subway model using these classes here: https://github.com/candytale55/subdway_routes_with_doubly_linked_lists_JS
