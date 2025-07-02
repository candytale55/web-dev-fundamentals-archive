# To-Do List Logger


### ✅ **Requirement Matching & Output Precision**

**Why?**
You’ve already seen how *“code that works”* might still *fail tests* or not meet expectations. This area teaches attention to **detail**, **interpretation**, and **discipline** — all essential for long-term success.

---

## 🎯 Goal of This Practice Set

* Improve your ability to **translate specs into exact code behavior**
* Practice writing **log messages and outputs exactly as required**
* Catch subtle mismatches in **logic, casing, or message formatting**

---

## 🧪 Exercise 1: To-Do List Logger

You are asked to implement a very simple *to-do manager*.

---

### 📄 Specification

Create a program with the following behavior:

1. You have an empty array `todoList` to start with.
2. You must write a function `addTask(task)` that:

   * Adds the task string to the list.
   * Logs:

     ```
     Task "<task>" added. You now have <N> tasks.
     ```
3. Write a function `removeTask(task)` that:

   * Removes the task if it exists.
   * Logs:

     ```
     Task "<task>" removed. <N> tasks remaining.
     ```
   * If the task does not exist, log:

     ```
     Task "<task>" not found.
     ```

> ⚠️ Notes:
>
> * All tasks are case-sensitive (no normalization).
> * Do **not** log anything except what's specified.
> * `<N>` must be dynamically calculated.

---

### ✅ Example Run

```js
addTask("Walk the dog");
// logs: Task "Walk the dog" added. You now have 1 tasks.

addTask("Buy milk");
// logs: Task "Buy milk" added. You now have 2 tasks.

removeTask("Buy milk");
// logs: Task "Buy milk" removed. 1 tasks remaining.

removeTask("Do taxes");
// logs: Task "Do taxes" not found.
```

---

## 🧰 Deliverables

* Write the code for this logic in a JS file.
* Test it by calling the functions with the examples above.
* Check if every output **matches exactly** the expected result — punctuation, spacing, everything.

---

## ✅ Success Criteria

* Output matches character-for-character with spec.
* Edge cases handled (task not found).
* You didn't “over-code” (e.g., no features not asked for).

---

