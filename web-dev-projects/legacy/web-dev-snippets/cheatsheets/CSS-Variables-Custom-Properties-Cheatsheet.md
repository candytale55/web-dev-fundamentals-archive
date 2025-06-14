
# 🎨 CSS Variables (Custom Properties) Cheatsheet

## ✅ What are CSS Variables?

CSS variables (also called *custom properties*) allow you to store values in reusable "placeholders" directly in your CSS.

```css
:root {
  --main-color: #3498db;
  --padding: 1rem;
}
```

You can then use them with the `var()` function:

```css
button {
  background-color: var(--main-color);
  padding: var(--padding);
}
```

---

## 🧪 Syntax Overview

| Syntax                  | Description                              |
| ----------------------- | ---------------------------------------- |
| `--name: value;`        | Declares a variable                      |
| `var(--name)`           | Retrieves the value                      |
| `var(--name, fallback)` | Uses fallback if `--name` is not defined |

```css
:root {
  --font-size: 16px;
  --accent: var(--main-color, blue); /* fallback if not set */
}
```

---

## 🧱 Scoping Variables

Variables are scoped like CSS rules:

```css
:root {
  --color: black; /* global */
}

.card {
  --color: red; /* local to .card */
  color: var(--color); /* uses red */
}
```

If a variable is **not found locally**, it looks up the hierarchy.

---

## 💡 Best Practices

| ✅ Do                                           | ❌ Avoid                                       |
| ---------------------------------------------- | --------------------------------------------- |
| Use `:root` for global variables               | Over-nesting or redefining without purpose    |
| Use semantic names: `--text-color`, `--btn-bg` | Avoid vague names: `--a`, `--value1`          |
| Organize them in themes or layers              | Don't overuse for single-use values           |
| Use fallbacks when uncertain                   | Don't rely on legacy browsers without support |

---

## 🚫 Common Mistakes

1. **Using variables outside of a selector:**

   ```css
   /* ❌ Invalid */
   --bad-variable: 20px;
   ```

   ✅ Must be inside a selector:

   ```css
   :root {
     --good-variable: 20px;
   }
   ```

2. **Forgetting the `--` prefix or `var()` function:**

   ```css
   padding: --padding; /* ❌ wrong */
   padding: var(--padding); /* ✅ correct */
   ```

3. **Incompatible with media queries in older browsers:**

   * CSS variables are **not supported** in IE11 or below.

---

## 🧭 When to Use

✅ Use CSS Variables:

* To store **theme values** (colors, spacing, typography)
* To **customize UI components** (e.g., cards, buttons)
* For **dark/light mode** themes
* When values **repeat across stylesheets**

❌ Avoid using:

* For values that are used **only once**
* Inside CSS frameworks that already manage design tokens
* For logic-heavy CSS (complex fallbacks or JS-driven theming may be better)

---

## 🌈 Theming Example

```css
:root {
  --bg: white;
  --text: black;
}

[data-theme="dark"] {
  --bg: #111;
  --text: #eee;
}

body {
  background-color: var(--bg);
  color: var(--text);
}
```

---

## 🧪 CSS Variable vs Preprocessor Variable (e.g. Sass)

| Feature                  | CSS Variable                  | Sass/LESS Variable            |
| ------------------------ | ----------------------------- | ----------------------------- |
| Runtime?                 | ✅ Yes (can be changed via JS) | ❌ No (compiled at build time) |
| Reacts to media queries? | ✅ Yes                         | ❌ No                          |
| Can be scoped?           | ✅ Yes                         | ❌ No                          |
| Nesting & logic          | ❌ No built-in logic           | ✅ Yes (if/else, mixins)       |

---

## 📚 Bonus: JavaScript Integration

```js
// Change variable via JS
document.documentElement.style.setProperty('--main-color', '#e74c3c');
```

---

Great question — let’s break it down clearly so you can confidently use CSS variables (custom properties) in modern web development.

---

## ✅ **Browser Support (as of 2025)**

CSS variables (`--custom-properties`) are **well supported** in all major modern browsers:

| Browser           | Support                              |
| ----------------- | ------------------------------------ |
| Chrome            | ✅ Full (since v49)                   |
| Firefox           | ✅ Full (since v31)                   |
| Safari            | ✅ Full (since v9.1)                  |
| Edge (Chromium)   | ✅ Full                               |
| Opera             | ✅ Full                               |
| Mobile Browsers   | ✅ Full                               |
| Internet Explorer | ❌ **Not supported (IE11 and below)** |

> 💡 **Conclusion**: Unless you *must* support **Internet Explorer**, you're safe using CSS variables.

---

## 🛡️ **Fallbacks for Compatibility**

If you’re targeting **older or non-compliant environments** (like email clients or very old browsers), **declare fallback values** using the `var()` function’s second parameter or by duplicating styles.

### 🧪 Method 1: Use `var(--property, fallback)`

```css
button {
  background-color: var(--btn-color, #3498db); /* fallback value */
}
```

### 🧪 Method 2: Declare a fallback property first (older pattern)

```css
button {
  background-color: #3498db; /* fallback */
  background-color: var(--btn-color); /* will override if supported */
}
```

> ✅ **Best practice**: Use both methods if you're unsure about your user base.

---

## ❗ Gotchas & Errors to Avoid

| ❌ Mistake                                        | 💡 Correction                                      |
| ------------------------------------------------ | -------------------------------------------------- |
| Using `var()` without fallback                   | Always use fallback if variable might be undefined |
| Expecting variables to work outside selectors    | Declare them inside `:root` or valid rules         |
| Forgetting that CSS variables are case-sensitive | `--MainColor` ≠ `--maincolor`                      |

---

## 🔄 Changing Variables Dynamically

Variables shine when you want **live theming** (like dark mode), which you can easily toggle using attributes or classes:

```css
:root {
  --bg-color: white;
  --text-color: black;
}

[data-theme="dark"] {
  --bg-color: #111;
  --text-color: #eee;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}
```

Toggle the theme in HTML or JS:

```html
<body data-theme="dark">
```

---

## ✅ Final Recommendation

* **Use variables** for color, spacing, fonts, sizing – especially in reusable components and themes.
* **Always define a fallback** if there's a chance a variable might be missing.
* **Don't worry about IE11** unless you're working on a legacy project.

---
