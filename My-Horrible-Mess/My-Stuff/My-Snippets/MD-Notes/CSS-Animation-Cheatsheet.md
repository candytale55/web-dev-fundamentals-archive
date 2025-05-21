
# 🎞️ CSS Animation Cheatsheet

A **comprehensive yet quick-reference Markdown cheatsheet** for CSS animations. It combines your previous example, explains the shorthand, lists all available values, and gives practical guidance for when and why to use each one.


## 📌 Basic Anatomy

```css
animation: [name] [duration] [timing-function] [delay] [iteration-count] [direction] [fill-mode] [play-state];
```

You don’t need to use all of them every time—use only what you need.

---

## 🎯 Example

```css
animation: spin 2s linear infinite;
```

This is equivalent to:

```css
animation-name: spin;
animation-duration: 2s;
animation-timing-function: linear;
animation-iteration-count: infinite;
```

### 🔁 Keyframes Example

```css
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

---

## 💡 Common Use Case

```css
.wheel {
  animation: wheel 10s linear infinite;
}

@keyframes wheel {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

---

## 🧱 Longhand Properties

| Property                    | Description                  | Example                                 |
| --------------------------- | ---------------------------- | --------------------------------------- |
| `animation-name`            | Name of `@keyframes`         | `fadeIn`                                |
| `animation-duration`        | How long the animation runs  | `2s`, `500ms`                           |
| `animation-timing-function` | Easing (speed curve)         | `linear`, `ease`                        |
| `animation-delay`           | Wait before animation starts | `1s`                                    |
| `animation-iteration-count` | Number of times              | `1`, `3`, `infinite`                    |
| `animation-direction`       | Direction of animation       | `normal`, `reverse`, `alternate`        |
| `animation-fill-mode`       | Retain styles before/after   | `none`, `forwards`, `backwards`, `both` |
| `animation-play-state`      | Control playback             | `running`, `paused`                     |

---

## ⏱️ `animation-timing-function` Reference

| Value               | Description                             | Use When...         |
| ------------------- | --------------------------------------- | ------------------- |
| `linear`            | Same speed throughout                   | Spinners, wheels    |
| `ease`              | Starts slow, then fast, ends slow       | Natural UI motion   |
| `ease-in`           | Starts slow, ends fast                  | Tooltips, fading in |
| `ease-out`          | Starts fast, ends slow                  | Modals, fading out  |
| `ease-in-out`       | Starts and ends slow                    | Buttons, dropdowns  |
| `steps(n)`          | Jumps between frames (sprite animation) | Sprite sheets       |
| `cubic-bezier(...)` | Custom easing                           | Fine-tuned control  |

---

## 🔄 `animation-direction`

| Value               | Description                 |
| ------------------- | --------------------------- |
| `normal`            | Plays forward (default)     |
| `reverse`           | Plays backward              |
| `alternate`         | Alternates forward/backward |
| `alternate-reverse` | Alternates backward/forward |

---

## 🎬 `animation-fill-mode`

| Value       | Description                        |
| ----------- | ---------------------------------- |
| `none`      | Don't retain styles before/after   |
| `forwards`  | Keep the end style after animation |
| `backwards` | Apply styles at `0%` during delay  |
| `both`      | Combine `forwards` and `backwards` |

---

## ⛔ Common Mistakes

* **Forgetting `animation-duration`** → no visible animation.
* **Missing `@keyframes`** with the same name.
* **Using `infinite` unnecessarily** on complex animations (hurts performance).
* **Not using `fill-mode: forwards`** when you want the animation’s final state to stick.

---

## ✅ Best Practices

* Use **shorthand** when possible for clean code.
* Use `ease`, `ease-in-out` for natural motion.
* Use `linear` for continuous, mechanical effects (like spinning).
* Avoid `infinite` unless it’s part of the UX (e.g., loading).
* Keep animations **short** for better UX (0.2–0.5s is ideal for UI interactions).

---

Would you like a companion table for `@keyframes` animation patterns (e.g., bounce, fade, slide)?

Yes please!:   
[CSS Keyframes Animation Patterns Cheatsheet](https://github.com/candytale55/my-snippets/blob/main/MD-Notes/CSS-Keyframes-Animation-Patterns.md)

