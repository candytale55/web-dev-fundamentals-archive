

# 🧭 Flex Alignment Cheatsheet for UI Layouts

This reference helps you recall essential techniques for aligning text and elements using CSS Flexbox, especially when working with content like nutrition labels or data summaries.

---

### 🧱 1. Basic Flex Row Alignment

Use flex to place two elements at opposite ends of a line.

**Example: Left label, right value**

```html
<div class="row">
  <p class="item-label">Calories</p>
  <p class="item-value">230</p>
</div>
```

```css
.row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0; /* Reset margin to avoid spacing gaps */
}

.item-label,
.item-value {
  margin: 0; /* Reset p-tag default margin */
}
```

✅ **Use When**: Simple label-value pairs on the same line.
⚠️ **Avoid**: Nested complex content or multi-line wrapping inside a single row.

---

### 🔁 2. Reversed or Right-Aligned Content

Align content (like titles or values) to the right side of its container.

```html
<div class="right-align">
  <p class="highlight">Daily Value %</p>
</div>
```

```css
.right-align {
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

.highlight {
  margin: 0;
  font-weight: bold;
}
```

✅ **Use When**: Title or summary element needs alignment to the right.

---

### 🧍‍♂️ 3. Nested Spans for Inline Control

When part of a sentence needs alignment control, wrap related inline items in a `span`.

```html
<p class="inline-wrap">
  <span class="bold">Total Fat</span> 8g
</p>
```

```css
.inline-wrap {
  display: flex;
  justify-content: space-between;
  margin: 0;
}

.bold {
  font-weight: 700;
}
```

✅ **Use When**: Inline elements need style or spacing, like bold values or underlined headings.
⚠️ **Avoid**: Wrapping full paragraphs — this is meant for *small units of text*.

---

### ➡️ 4. Indented Items for Hierarchy

```html
<p class="indented">Saturated Fat 1g</p>
```

```css
.indented {
  margin-left: 1em;
  margin-top: 0;
  margin-bottom: 0;
}
```

✅ **Use When**: Creating visual hierarchy (sub-items).
⚠️ **Avoid**: Excessive nesting or too many indent levels — can reduce readability.

---

### ❗ 5. \:not() Pseudo Selector

Useful to exclude specific elements from a rule.

```css
.row p:not(.no-divider) {
  border-bottom: 1px solid #ccc;
  margin: 0;
}
```

✅ **Use When**: You want most elements styled the same way, but a few need exceptions.
⚠️ **Avoid**: Overusing complex negations — keep selectors readable.

---

### ⬅️ 6. Double Indentation for Deep Nesting

```html
<p class="double-indent">Includes 10g Added Sugars</p>
```

```css
.double-indent {
  margin-left: 2em;
  margin-top: 0;
  margin-bottom: 0;
}
```

✅ **Use When**: Content is a sub-item of an indented element.

---

### 📏 7. Aligning Multiple `<span>` Elements (Left / Center / Right)

#### 🔹 Two Items (Left + Right)

```html
<p class="flex-line">
  <span class="left">Protein</span>
  <span class="right">3g</span>
</p>
```

```css
.flex-line {
  display: flex;
  justify-content: space-between;
  margin: 0;
}

.left,
.right {
  flex: 1;
  margin: 0;
}
```

#### 🔹 Three Items (Left + Center + Right)

```html
<p class="flex-line">
  <span class="left">Sodium</span>
  <span class="center">160mg</span>
  <span class="right">7%</span>
</p>
```

```css
.flex-line {
  display: flex;
  justify-content: space-between;
  margin: 0;
}

.left {
  flex: 1;
  text-align: left;
  margin: 0;
}

.center {
  flex: 1;
  text-align: center;
  margin: 0;
}

.right {
  flex: 1;
  text-align: right;
  margin: 0;
}
```

✅ **Use When**:

* Creating compact data rows with equal spacing.
* Values are short and won’t wrap.

⚠️ **Avoid**:

* Long strings inside any of the spans (they’ll break the layout).
* Nested tags or complex inline markup.


