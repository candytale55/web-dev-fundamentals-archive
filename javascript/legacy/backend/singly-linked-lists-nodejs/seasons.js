const LinkedList = require('./LinkedList');

const seasons = new LinkedList();
seasons.printList(); // <head> <tail>

seasons.addToHead('summer');
seasons.addToHead('spring');
seasons.printList(); 
// <head> spring summer <tail>

seasons.addToTail('fall');
seasons.addToTail('winter');
seasons.printList(); 
// <head> spring summer fall winter <tail>

seasons.removeHead();
seasons.printList(); 
// <head> summer fall winter <tail>
