# Gradients in CSS Cheatsheet 

> Gradients in CSS let you **smoothly transition between two or more colors**, creating visually rich backgrounds without needing images. There are several types of gradients in CSS, and each offers customization through angles, positions, shapes, and color stops.


## 🎨 Types of Gradients in CSS

### 1. **Linear Gradient**

#### ✅ Syntax:

```css
background: linear-gradient(direction, color-stop1, color-stop2, ...);
```

#### ✅ Example:

```css
background: linear-gradient(to right, red, orange, yellow);
```

#### 🔧 Options:

* `to right`, `to bottom`, `to top left`, etc.
* Or use angles like `45deg`, `180deg`

#### 🔁 With Color Stops:

```css
background: linear-gradient(to right, red 0%, blue 50%, green 100%);
```

---

### 2. **Radial Gradient**

#### ✅ Syntax:

```css
background: radial-gradient(shape size at position, color-stops);
```

#### ✅ Example:

```css
background: radial-gradient(circle, red, yellow, green);
```

#### 🔧 Options:

* Shapes: `circle`, `ellipse`
* Position: `at center`, `at top left`, `at 50% 30%`

#### 🔁 With Stops:

```css
background: radial-gradient(circle at center, red 0%, yellow 70%, green 100%);
```

---

### 3. **Conic Gradient** (🎯 CSS4 & modern browser support)

#### ✅ Syntax:

```css
background: conic-gradient(from angle at position, color-stops);
```

#### ✅ Example:

```css
background: conic-gradient(red, yellow, green, red);
```

#### 🔧 Options:

* Start angle: `from 90deg`
* Position: `at center`, `at 50% 50%`

---

## 💡 Practical Uses

* Buttons with hover gradients
* Background highlights
* Pie-chart effects (conic gradients)
* Loading spinners
* Layering with `background-image` and `background-blend-mode`

---

## 🚫 Common Mistakes to Avoid

| Mistake                                          | Fix                                                             |
| ------------------------------------------------ | --------------------------------------------------------------- |
| Using `background-color` instead of `background` | Gradients require `background`, not `background-color`          |
| Forgetting the direction or stops                | Always define direction or percentage stops if precision needed |
| Poor color contrast                              | Test gradients for accessibility and readability                |
| Using too many color stops                       | Simplicity is better unless you're going for rainbow effects    |

---

## ✅ Best Practices

* Use fallback solid color before gradient for older browser support.

  ```css
  background-color: red;
  background: linear-gradient(to right, red, orange);
  ```

* Combine multiple gradients:

  ```css
  background: 
    linear-gradient(to right, rgba(255,0,0,0.5), rgba(0,0,255,0.5)),
    url("image.jpg");
  ```

* Use `transparent` wisely for overlays or fading edges:

  ```css
  background: linear-gradient(to bottom, rgba(0,0,0,0.8), transparent);
  ```

---

## 🧪 Bonus: Gradient Generator Tools

If you don’t want to write it from scratch:

* [CSS Gradient](https://cssgradient.io/)
* [Gradient Hunt](https://gradienthunt.com/)
* [Conic Gradient Generator](https://css-generators.com/conic-gradient/)


Absolutely! Let's break it down:

---

### 🎯 What’s Happening in This Gradient?

```css
.bb2b {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    var(--building-color2) 0%,
    var(--building-color2) 6%,
    var(--window-color2) 6%,
    var(--window-color2) 9%
  );
}
```

This CSS uses a **linear gradient with hard stops**, which means **abrupt transitions between color bands**, instead of smooth fades.

---

### 💡 What's a "Hard Stop"?

A **hard stop** in a gradient means there's **no smooth transition** between two colors — instead, one color **immediately jumps** to the next. You do this by repeating percentage values at which the color change happens.

---

### 🧠 Breakdown of the Code:

```css
background: linear-gradient(
  var(--building-color2) 0%,        /* Start with building color */
  var(--building-color2) 6%,        /* Keep building color until 6% */
  var(--window-color2) 6%,          /* At 6%, instantly switch to window color */
  var(--window-color2) 9%           /* Keep window color until 9% */
);
```

* `0% to 6%`: solid `--building-color2`
* `6% to 9%`: solid `--window-color2`
* No in-between fading. The **color jumps sharply** at the 6% mark.

This creates **distinct, banded layers** — useful for:

* Simulating **stripes**, **windows**, **floor levels**, etc.
* Designing **building facades**, like in your Ferris Wheel cabins or buildings.

---

### 🖼️ Visualization (simplified):

```
|---building-color2---|--window-color2--|
0%                  6%                9%
```

---

### ✅ Best Practices

* Always **pair the ending value of one color** with the **starting value of the next** to make the transition sharp (like 6% → 6%).
* Use **units like `%` or `px`** to tightly control where changes happen.
* Keep values **in increasing order** — gradients won’t render properly if out of order.

---

### 🧪 Pro Tip

You can repeat this pattern to **create multiple windows** or stripes like so:

```css
background: linear-gradient(
  var(--building-color2) 0%,
  var(--building-color2) 6%,
  var(--window-color2) 6%,
  var(--window-color2) 9%,
  var(--building-color2) 9%,
  var(--building-color2) 15%,
  var(--window-color2) 15%,
  var(--window-color2) 18%
);
```

