
# 🧭 Concentric CSS Property Order Cheat Sheet

Organized from **outside → in** (like the layers of an onion 🍥):

---

## 1. Positioning
- `position`
- `top`, `right`, `bottom`, `left`
- `z-index`
- `display`
- `float`, `clear`
- `visibility`

---

## 2. Box Model
- `box-sizing`
- `width`, `min-width`, `max-width`
- `height`, `min-height`, `max-height`
- `margin`
- `padding`
- `overflow`, `overflow-x`, `overflow-y`

---

## 3. Visual Appearance
- `border`, `border-radius`, `border-color`, `border-style`, `border-width`
- `background`, `background-color`, `background-image`, `background-size`, `background-position`
- `box-shadow`
- `opacity`
- `filter`

---

## 4. Typography
- `color`
- `font`, `font-family`, `font-size`, `font-style`, `font-weight`, `line-height`
- `letter-spacing`, `word-spacing`
- `text-align`, `text-decoration`, `text-transform`
- `white-space`

---

## 5. Miscellaneous / UX
- `cursor`
- `pointer-events`
- `transition`, `animation`
- `transform`

---

## Example Style Block Using This Order

```css
.card {
  /* 1. Positioning */
  position: relative;
  display: flex;
  z-index: 10;

  /* 2. Box Model */
  box-sizing: border-box;
  width: 300px;
  padding: 16px;
  margin: 24px auto;

  /* 3. Visual */
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  /* 4. Typography */
  color: #333;
  font-family: Arial, sans-serif;
  font-size: 16px;
  text-align: center;

  /* 5. UX */
  cursor: pointer;
  transition: box-shadow 0.3s ease;
}
```
