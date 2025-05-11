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
| Add spacing between items          | Use `gap` or margins on items                    |
| Allow items to wrap                | Use `flex-wrap: wrap` on the container           |
| Change the visual order            | Use `order` on items                             |
| Align an individual item           | Use `align-self` on a specific item              |
| Fit images and avoid distortion    | Use `object-fit` (see bonus below)               |
| Avoid: Misapplying `display: flex` | Don’t apply `display: flex` to the children      |
| Best for                           | 1D layouts (horizontal OR vertical)              |

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


---

## 🖼️ Bonus: `object-fit` for Media in Flexbox Layouts

Use `object-fit` when placing images or videos inside a Flexbox layout — like cards or galleries — to control how they fill their containers.

### 🎨 What It Does

`object-fit` defines how the media fits inside its container when the aspect ratios don't match. Think of it like `background-size`, but for images and videos.

### 🔧 Common Values

| Value        | Description                                              |
| ------------ | -------------------------------------------------------- |
| `fill`       | Stretches to fill container (may **distort**)            |
| `contain`    | Fits within container without cropping (may leave space) |
| `cover`      | Fills container and **crops** excess content             |
| `none`       | Shows original size                                      |
| `scale-down` | Uses `none` or `contain`, whichever is smaller           |

### ✅ Example: Flexbox Gallery

```html
<div class="flex-container">
  <div class="image-box">
    <img src="photo.jpg" alt="Gallery image" />
  </div>
</div>
```

```css
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.image-box {
  width: 200px;
  height: 150px;
  overflow: hidden;
}

.image-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
```

### ❗ Common Mistakes

* ❌ **Not setting width/height** on media or container → `object-fit` won’t work.
* ❌ **Using on non-media elements** → Only works on `<img>`, `<video>`, `<iframe>`, etc.
* ❌ **Forgetting `object-position`** → Use `center` to crop symmetrically.

---

### 💡 When to Use

| Scenario                            | Use `object-fit` with: |
| ----------------------------------- | ---------------------- |
| Gallery Grid                        | `cover`                |
| Responsive Image Cards              | `cover` or `contain`   |
| Full-width Hero Images              | `cover`                |
| Keeping Whole Image Visible         | `contain`              |
| Show native image only when smaller | `scale-down`           |


---
---

## 🧱 Order: 

While there isn't a strict requirement for the order of properties in CSS, there are some best practices and conventions that can help keep your CSS organized, maintainable, and readable. The order you use can depend on your team's style guide or personal preference, but generally, the following order is widely recommended for Flexbox:

### **Container CSS Rules (Flex Container)**

1. **Display & Layout Basics**

   * `display: flex;` or `display: inline-flex;` should be the first property because it activates Flexbox on the container.
   * `flex-direction: row | column | ...;` — Controls the main axis direction.
   * `flex-wrap: wrap | nowrap | wrap-reverse;` — Decides if items should wrap or stay in a single line.

   Example:

   ```css
   .flex-container {
     display: flex;             /* Always first */
     flex-direction: row;       /* Defines the main axis direction */
     flex-wrap: wrap;           /* Enables wrapping of items */
   }
   ```

2. **Alignment and Distribution**

   * `justify-content: flex-start | center | space-between | ...;` — Aligns items horizontally (main axis).
   * `align-items: flex-start | center | stretch | ...;` — Aligns items vertically (cross-axis).
   * `align-content: flex-start | center | space-between | ...;` — If wrapping, aligns the lines of items.

   Example:

   ```css
   .flex-container {
     justify-content: center;  /* Aligns items horizontally */
     align-items: center;      /* Aligns items vertically */
     align-content: center;    /* Aligns lines of items if they wrap */
   }
   ```

3. **Other Properties (If Needed)**

   * `gap: 10px;` (or `row-gap`, `column-gap`) — Defines spacing between items (used with `flex-wrap`).
   * `order: value;` (for reordering the flex items in the container)

   Example:

   ```css
   .flex-container {
     gap: 10px;  /* Space between items */
     order: 2;   /* (Only applies if using 'order' on container) */
   }
   ```

---

### **Item CSS Rules (Flex Items)**

1. **Flex Properties (Mainly for Flexibility)**

   * `flex: value;` — A shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`. Controls item growth and shrinkage.
   * `flex-grow`, `flex-shrink`, `flex-basis` — When not using the shorthand `flex`, you can specify these individually.

   Example:

   ```css
   .item {
     flex: 1;  /* Make items take equal space */
   }
   ```

2. **Alignment**

   * `align-self: auto | flex-start | center | ...;` — Allows overriding `align-items` on a specific item.
   * `order: value;` — Controls the visual order of the item.

   Example:

   ```css
   .item {
     align-self: center;  /* Aligns the item vertically based on its container */
     order: 1;            /* Defines the visual order */
   }
   ```

3. **Styling (Padding, Margin, Background, etc.)**

   * Properties like `padding`, `margin`, `background-color`, `width`, `height`, and others generally come after Flex properties to define the appearance of items.

   Example:

   ```css
   .item {
     margin: 5px;              /* Space between items */
     padding: 20px;            /* Padding inside the item */
     background-color: #add8e6; /* Background color */
   }
   ```

---

### **General Best Practices:**

1. **Logical Grouping:**
   Group related properties together. For example, `display` and `flex-direction` are part of the layout, so they should come first. Follow with alignment properties (`justify-content`, `align-items`, etc.) and then spacing properties (`gap`, `margin`, etc.).

2. **Consistency:**
   Whatever order you choose, be consistent throughout your project. If you start with layout properties in your container and flex properties in your items, try to keep this pattern throughout your CSS.

3. **Shorthand Properties:**
   Use shorthand properties where possible (like `flex` for `flex-grow`, `flex-shrink`, and `flex-basis`).

---

### **Example of Container and Item Best Practices:**

#### Flex Container

```css
.flex-container {
  display: flex;             /* 1. Display */
  flex-direction: row;       /* 2. Direction */
  flex-wrap: wrap;           /* 3. Wrap */
  
  justify-content: center;   /* 4. Horizontal alignment */
  align-items: center;       /* 5. Vertical alignment */
  align-content: center;     /* 6. Line alignment (if wrapping) */
  
  gap: 20px;                 /* 7. Spacing between items */
}
```

#### Flex Item

```css
.item {
  flex: 1;                   /* 1. Flex grow/shrink/basis */
  align-self: center;        /* 2. Vertical alignment (overrides container) */
  order: 2;                  /* 3. Visual order */
  
  margin: 10px;              /* 4. Spacing around the item */
  padding: 20px;             /* 5. Padding inside the item */
  background-color: #f0f0f0; /* 6. Styling */
}
```

By following these simple conventions, your CSS will be easier to read, maintain, and debug in the future.
