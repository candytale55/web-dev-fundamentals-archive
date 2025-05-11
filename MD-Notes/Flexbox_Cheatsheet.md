# 🧰 Flexbox Cheatsheet for Beginners

This is a simple, beginner-friendly guide to help you use CSS Flexbox effectively.

---

## 🧱 What is `display: flex`?

Adding `display: flex` to a container allows it to arrange its direct children (flex items) in rows or columns.

**Important**: You must add `display: flex` to the container, **not** the items.

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

#### `flex-direction`

Defines the direction in which the flex items are placed in the flex container.

* `row` (default) — items are placed in a row, left to right.
* `row-reverse` — items are placed in a row, right to left.
* `column` — items are placed in a column, top to bottom.
* `column-reverse` — items are placed in a column, bottom to top.

```css
.flex-container {
  display: flex;
  flex-direction: row; /* Or row-reverse, column, column-reverse */
}
```

#### `justify-content`

Aligns items horizontally (main axis).

* `flex-start` — items are aligned at the start of the container.
* `flex-end` — items are aligned at the end of the container.
* `center` — items are centered in the container.
* `space-between` — items are evenly spaced, with no space at the start or end.
* `space-around` — items are evenly spaced with space around them.
* `space-evenly` — items are evenly spaced with equal space between and around them.

```css
.flex-container {
  display: flex;
  justify-content: center; /* Or flex-start, flex-end, space-between, space-around, space-evenly */
}
```

#### `align-items`

Aligns items vertically (cross-axis).

* `flex-start` — items are aligned at the start of the container (top for row, left for column).
* `flex-end` — items are aligned at the end of the container (bottom for row, right for column).
* `center` — items are centered in the container.
* `baseline` — items are aligned to their baseline.
* `stretch` (default) — items stretch to fill the container.

```css
.flex-container {
  display: flex;
  align-items: center; /* Or flex-start, flex-end, baseline, stretch */
}
```

#### `align-self`

Allows individual items to override `align-items`.

* `auto` (default) — inherits the `align-items` value.
* `flex-start`, `flex-end`, `center`, `baseline`, `stretch` — overrides alignment for the specific item.

```css
.item {
  align-self: flex-start; /* Or flex-end, center, baseline, stretch */
}
```

#### `flex-wrap`

Controls whether flex items should wrap onto multiple lines when needed.

* `nowrap` (default) — items will not wrap.
* `wrap` — items will wrap onto the next line if necessary.
* `wrap-reverse` — items will wrap in the opposite direction.

```css
.flex-container {
  display: flex;
  flex-wrap: wrap; /* Or nowrap, wrap-reverse */
}
```

### 4. Style the Flex Items

#### `flex`

A shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`. It defines how items will grow, shrink, and take up space in the container.

* `flex-grow` — how much an item should grow relative to others.
* `flex-shrink` — how much an item should shrink if there is not enough space.
* `flex-basis` — the initial size of an item before flex-grow or flex-shrink are applied.

```css
.item {
  flex: 1; /* Equivalent to flex-grow: 1; flex-shrink: 1; flex-basis: 0; */
}
```

#### `order`

Changes the visual order of the items. By default, all items have an `order` of 0, but you can change this to reorder them.

```css
.item {
  order: 2; /* Change the order of the item */
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
  flex-direction: row; /* Change to column for vertical layout */
  flex-wrap: wrap; /* Allow wrapping */
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

| Task                               | What to Do                                       |
| ---------------------------------- | ------------------------------------------------ |
| Start a flex layout                | Add `display: flex` to a container               |
| Align items horizontally           | Use `justify-content` on the container           |
| Align items vertically             | Use `align-items` on the container               |
| Control the direction              | Use `flex-direction` to change row/column layout |
| Make items flexible                | Use `flex: 1` on each child                      |
| Allow items to wrap                | Use `flex-wrap: wrap` on the container           |
| Change the visual order            | Use `order` on items                             |
| Align an individual item           | Use `align-self` on a specific item              |
| Avoid: Misapplying `display: flex` | Don’t apply `display: flex` to the children      |

---

## 🚫 Common Mistakes to Avoid

1. **Misapplying `display: flex`**
   Ensure you apply `display: flex` to the container and **not** the items.

2. **Forgetting to use `flex-wrap`**
   If you want your items to wrap in smaller screens, don’t forget `flex-wrap: wrap;`.

3. **Not understanding the main and cross axis**
   Remember that `justify-content` controls alignment on the main axis, and `align-items` controls it on the cross axis.

4. **Using `flex` without specifying `flex-basis`**
   Always make sure your flex items have enough initial size to grow or shrink based on the container’s size.

---

## 🎯 Tip

Flexbox is best used for **1D layouts** (horizontal **OR** vertical). For more complex 2D layouts, consider using CSS Grid instead.
