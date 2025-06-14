/*
Subway lines have a first and last element, and are comprised of nodes (or stops) with links to the elements before and after them.
*/



const DoublyLinkedList = require('./DoublyLinkedList.js');

const subway = new DoublyLinkedList();

subway.addToHead('TimesSquare');
subway.addToHead('GrandCentral');
subway.addToHead('CentralPark');
//subway.printList();

subway.addToTail('PennStation');
subway.addToTail('WallStreet');
subway.addToTail('BrooklynBridge');
subway.printList();

/*
There’s construction happening on the subway line: the Central Park and Brooklyn Bridge stops will temporarily be closed. Remove them from your list without iterating through the entire list.
*/
subway.removeHead();
subway.removeTail();
subway.printList();

/*
The Times Square station is under construction. Remove it from the list
*/
subway.removeByData('TimesSquare');
subway.printList();
