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

---

