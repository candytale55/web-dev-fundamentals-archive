
# CSS Resetting

When setting `box-sizing: border-box`, the **best practice** is generally to use the **universal selector with inheritance** like this:

```css
*, *::before, *::after {
  box-sizing: border-box;
}
```

### Why this is better than just `html { box-sizing: border-box; }`:

* `html { box-sizing: border-box; }` only sets the box-sizing on the `<html>` element. It does not affect other elements unless you explicitly override them.
* `*` selects all elements but does **not** include pseudo-elements like `::before` and `::after`.
* `*, *::before, *::after` ensures that **everything** — all elements and their pseudo-elements — use `border-box`. This makes layout more predictable because padding and border won't increase the declared width/height.

---

### What is `border-box` and why use it?

Normally in CSS (with `content-box`), if you say:

```css
width: 200px;
padding: 20px;
```

The actual rendered width will be `200 + 20*2 = 240px`.

With `border-box`, the padding and border are included *inside* the declared width:

```css
width: 200px; /* total width stays 200px */
padding: 20px;
```

Much easier to manage layout!

---

### Other useful reset values when starting a project

Here’s a basic CSS reset or "normalization" snippet that’s commonly used:

```css
/* 1. Set box-sizing for everything */
*, *::before, *::after {
  box-sizing: border-box;
}

/* 2. Remove default margin and padding */
body, h1, h2, h3, h4, h5, h6, p, ul, ol, figure {
  margin: 0;
  padding: 0;
}

/* 3. Remove list styles */
ul, ol {
  list-style: none;
}

/* 4. Set a base font family and size */
body {
  font-family: system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  background-color: #fff;
  color: #333;
}

/* 5. Ensure media elements are responsive */
img, video, canvas, svg {
  max-width: 100%;
  height: auto;
  display: block;
}

/* 6. Set default link styles */
a {
  text-decoration: none;
  color: inherit;
}
```

This isn't as aggressive as something like [Eric Meyer's Reset](https://meyerweb.com/eric/tools/css/reset/), but it's a practical foundation for modern layouts.

---

### Summary

* ✅ Use `*, *::before, *::after { box-sizing: border-box; }`
* ✅ Combine with a small reset for consistency across browsers
* ❌ Avoid setting `box-sizing` only on `html` — it's not enough on its own

Let me know if you'd like a downloadable reset file or a customized boilerplate!
