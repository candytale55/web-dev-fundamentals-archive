let todoList = [];

const addTask = (task) => {
    todoList.push(task);
    console.log(`Task "${task}" added. You now have ${todoList.length} tasks.`)
}

const removeTask = (task) => {
    if (todoList.includes(task)) {
        const index = todoList.indexOf(task);
        todoList.splice(index, 1);
        console.log(`Task "${task}" removed. ${todoList.length} tasks remaining`);
    }
    else {
        console.log(`Task "${task}" not found.`);
    }
} 



// All tasks are case-sensitive (no normalization).
// Do not log anything except what's specified.
// <N> must be dynamically calculated.



// TESTS: Test it by calling the functions with the examples
addTask("Walk the dog");
// logs: Task "Walk the dog" added. You now have 1 tasks.

addTask("Buy milk");
// logs: Task "Buy milk" added. You now have 2 tasks.

removeTask("Buy milk");
// logs: Task "Buy milk" removed. 1 tasks remaining.

removeTask("Do taxes");
// logs: Task "Do taxes" not found.

