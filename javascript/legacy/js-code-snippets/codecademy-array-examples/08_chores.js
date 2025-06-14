// The .pop() Method

const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
console.log(chores);

chores.pop();
console.log(chores);



const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop();

console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2



/*
Another array method, .pop(), removes the last item of an array.

In the example above, calling .pop() on the newItemTracker array removed item 2 from the end.

.pop() does not take any arguments, it simply removes the last element of newItemTracker.

.pop() returns the value of the last element. In the example, we store the returned value in a variable removed to be used for later.

.pop() is a method that mutates the initial array.

*/
