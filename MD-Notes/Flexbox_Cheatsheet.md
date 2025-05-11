
# 🧰 Flexbox Cheatsheet for Beginners

This is a simple, beginner-friendly guide to help you use CSS Flexbox effectively.

---

## 🧱 What is `display: flex`?

Adding `display: flex` to a container allows it to arrange its **direct children** (flex items) in rows or columns.

**Important:** You must add `display: flex` to the *container*, not the items.

---

## 🔧 How to Use Flexbox — Step by Step

### 1. Create a Container

```html
<div class="flex-container">
  <div class="item">One</div>
  <div class="item">Two</div>
  <div class="item">Three</div>
</div>
```

### 2. Add `display: flex` in CSS

```css
.flex-container {
  display: flex;
}
```

### 3. Control Layout with Flex Properties

```css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

### 4. Style the Flex Items

```css
.item {
  flex: 1;
  padding: 20px;
  background-color: lightblue;
  border: 1px solid #000;
  text-align: center;
}
```

---

## ✅ Full Example

### HTML

```html
<div class="flex-container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

### CSS

```css
.flex-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 150px;
  background-color: #f2f2f2;
}

.item {
  flex: 1;
  margin: 0 10px;
  padding: 20px;
  background-color: #add8e6;
  text-align: center;
  border: 2px solid #333;
}
```

---

## 🧠 Quick Recap

| Task                        | What to Do                                 |
|----------------------------|---------------------------------------------|
| Start a flex layout        | Add `display: flex` to a container          |
| Align items horizontally   | Use `justify-content` on the container      |
| Align items vertically     | Use `align-items` on the container          |
| Make items flexible        | Use `flex: 1` on each child                 |
| Common mistake to avoid    | Don’t apply `display: flex` to the children |

---

**Tip:** Flexbox is best used for 1D layouts (horizontal OR vertical). Use Grid for complex 2D layouts.
