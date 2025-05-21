
# 🎯 `:root`, `html`, and `*` selectors in CSS

> Understanding the differences between `:root`, `html`, and `*` in CSS is essential to writing clean, maintainable, and efficient stylesheets. Here's a breakdown of their **scope**, **usage**, and **common pitfalls**:



## ✅ `:root` — The Global Custom Property Scope

### 🔍 What It Selects:

* The `:root` pseudo-class targets the **highest-level element** in the DOM: the `<html>` element.
* But it’s **more specific** than just writing `html`, which makes it perfect for **CSS variables**.

### 🎯 Use Case:

* **Declaring global CSS variables**.
* Establishing a theme or base design system.

### ✅ Example:

```css
:root {
  --main-bg: #ffffff;
  --font-size-base: 16px;
}
```

You can now use `var(--main-bg)` anywhere in the stylesheet.

### ❗ Common Mistakes:

* ❌ Declaring variables inside components when they should be global.
* ❌ Using `html` instead of `:root` for CSS variables — works, but is **less specific** and could be overridden unintentionally.

---

## ✅ `html` — The HTML Element

### 🔍 What It Selects:

* Directly targets the `<html>` tag.

### 🎯 Use Case:

* Setting **base font-size**, scroll behavior, or layout-wide settings.
* Sometimes used for **accessibility** or **zoom scaling** techniques.

### ✅ Example:

```css
html {
  font-size: 100%; /* good for responsive scaling */
  scroll-behavior: smooth;
}
```

### ❗ Common Mistakes:

* ❌ Confusing `html` and `:root` — they both select the same element, but `:root` is more specific (especially for variables).
* ❌ Applying global resets here (better suited for `*` or `body`).

---

## ✅ `*` — Universal Selector

### 🔍 What It Selects:

* **Every single element** on the page (except pseudo-elements unless explicitly included).

### 🎯 Use Case:

* **Global resets** or consistent behavior across all elements.
* Setting `box-sizing` or resetting margin/padding.

### ✅ Example:

```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

### ❗ Common Mistakes:

* ❌ Overusing `*` for performance-heavy styles (e.g., adding transitions or shadows).
* ❌ Using `*` to apply styles that should only go to specific components.

---

## ⚖️ Summary Comparison Table

| Selector | Targets                  | Common Use                      | Best For                           | Specificity |
| -------- | ------------------------ | ------------------------------- | ---------------------------------- | ----------- |
| `:root`  | Topmost element (`html`) | Declaring global CSS variables  | Theming, design tokens             | High        |
| `html`   | `<html>` element         | Base font size, scroll behavior | Accessibility, root-level settings | Medium      |
| `*`      | All elements             | Reset styles                    | Box-sizing, margin reset           | Low         |

---

## 🔍 Best Practices

* ✅ Use `:root` to declare global CSS variables.
* ✅ Use `html` for layout-level behavior (e.g. font scaling or smooth scroll).
* ✅ Use `*` for universal resets, but **limit** to structural rules (e.g., spacing or box model).
* ⚠️ Avoid performance-heavy styles in `*` (like transitions or animations).
* ⚠️ Use variable fallbacks with `var(--color, fallback)` especially when scoping is local.

---
