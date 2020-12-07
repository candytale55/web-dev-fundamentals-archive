const LinkedList = require('./LinkedList');


const months = new LinkedList();

months.addToTail('November');
months.printList(); 
//<head> November <tail>

months.addToTail('December');
months.printList();
// <head> November December <tail>

months.addToHead('October');
months.addToHead('September');
months.addToHead('August');
months.printList();
// <head> August September October November December <tail>

months.addToHead('July');
months.addToHead('June');
months.addToHead('May');
months.addToHead('April');
months.addToHead('March');
months.addToHead('January');
months.addToHead('February');
months.printList();
//<head> February January March April May June July August September October November December <tail>

months.removeHead();
months.removeHead();
months.printList();
// <head> March April May June July August September October November December <tail>


months.addToHead('February');
months.addToHead('January');
months.printList();
// <head> January February March April May June July August September October November December <tail>
