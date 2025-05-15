# 💃 CSS `@keyframes` Animation Patterns

Here's a companion **CSS `@keyframes` pattern cheatsheet** with the most common animation effects like bounce, fade, and slide — perfect for quick reference.

Each animation includes a sample `@keyframes` block and recommended use cases.

---

### 🔄 **Fade In / Fade Out**

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes fadeOut {
  from { opacity: 1; }
  to   { opacity: 0; }
}
```

**Use for:** tooltips, modals, loading screens.

---

### ➡️ **Slide In / Slide Out (Left to Right)**

```css
@keyframes slideIn {
  from { transform: translateX(-100%); opacity: 0; }
  to   { transform: translateX(0); opacity: 1; }
}

@keyframes slideOut {
  from { transform: translateX(0); opacity: 1; }
  to   { transform: translateX(100%); opacity: 0; }
}
```

**Use for:** side panels, off-canvas menus, notifications.

---

### 🔼 **Bounce**

```css
@keyframes bounce {
  0%, 100%   { transform: translateY(0); }
  50%        { transform: translateY(-20px); }
}
```

**Use for:** playful buttons, icons, call-to-action highlights.

---

### ⬇️ **Drop In**

```css
@keyframes dropIn {
  0%   { transform: translateY(-200%); opacity: 0; }
  80%  { transform: translateY(10%); }
  100% { transform: translateY(0); opacity: 1; }
}
```

**Use for:** modal windows, banners, popups.

---

### ↻ **Spin (Infinite Rotation)**

```css
@keyframes spin {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

**Use for:** loaders, gears, rotating icons.

---

### 👀 **Pulse**

```css
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%      { transform: scale(1.05); opacity: 0.7; }
}
```

**Use for:** attention indicators, live status badges.

---

### 💡 Tips for Custom Animations

* Combine **opacity** with **transform** for a smoother, more engaging effect.
* Use `animation-delay` to **sequence** animations.
* Keep animations under **500ms** for performance and accessibility.
* Avoid overusing bounce/pulse in serious UIs (feels unprofessional if misused).

---

Also check the CSS-Animation-Cheatsheet.md 
