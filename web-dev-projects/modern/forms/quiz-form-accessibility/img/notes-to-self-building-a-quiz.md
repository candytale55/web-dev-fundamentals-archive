# Questions I had building this

While I was building this project I had some doubts, Ok. So I asked chatGPT and I didn't know where to keep its answers so I can check them if/when I revisit this project. 


## 📚 Table of Contents

- [`.sr-only`](#sr-only)
- [Typeface](#typeface)
- [Fallback fonts](#fallback-fonts)
- [Contrast-ratio](#contrast-ratio)
- [flex-wrap](#flex-wrap)
- [Styling `<button>`](#styling-button)
- [scroll-behavior: smooth;](#scroll-behavior-smooth)

---

## `.sr-only`

The `.sr-only` class is a common accessibility technique used to **visually hide content** while keeping it **accessible to screen readers**. Here's a breakdown of what each CSS rule does and the reasoning behind it:

### 🔍 **What `.sr-only` Does**

```css
.sr-only {
  position: absolute;       /* Removes the element from the document flow */
  width: 1px;               /* Shrinks width to 1px */
  height: 1px;              /* Shrinks height to 1px */
  overflow: hidden;         /* Hides overflowing content */
  clip: rect(0, 0, 0, 0);   /* Clips the visible region */
  clip-path: inset(50%);    /* Modern method to achieve same as above */
  white-space: nowrap;      /* Prevents line breaks that could reveal content */
}
```

These combined styles make the element:

* Present in the **accessibility tree** (screen readers can access it),
* **Invisible** to sighted users,
* **Non-interfering** with layout or user interactions.

---

### ✅ **When to Use `.sr-only`**

Use this class to:

* Add **descriptive labels** for screen readers (e.g., labeling icons or buttons).
* Provide **contextual information** that's only relevant for screen reader users.
* Hide **redundant text** visually, but leave it accessible (e.g., form labels).

**Examples:**

```html
<button>
  🔍 <span class="sr-only">Search</span>
</button>
```

```html
<p class="sr-only" id="form-description">This form collects user contact info.</p>
<form aria-describedby="form-description">...</form>
```

---

### 🚫 **When Not to Use `.sr-only`**

Avoid using it:

* To **hide content from everyone**, including screen readers (use `aria-hidden="true"` or `display: none` instead).
* On **interactive elements** (like buttons or links) unless they have visible focus indicators.
* As a way to "cheat" visual design—use it for accessibility, not layout tricks.

---

### ⚠️ **Common Mistakes**

1. **Using only `display: none`** or `visibility: hidden` — these hide content from everyone, including screen readers.
2. **Applying `.sr-only` to elements that users need to interact with visually**, like buttons or form fields.
3. **Forgetting `white-space: nowrap`** — without this, screen readers might misread or break up hidden text.
4. **Neglecting keyboard users** — if you're hiding visible labels and relying on `.sr-only`, be sure there's still visible focus and context.

---

### ✅ Alternative (Optional: Make It Focusable)

Sometimes you'll want the hidden content to **become visible when focused** (e.g., via keyboard navigation). You can use a companion class like this:

```css
.sr-only-focusable:active,
.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  clip: auto;
  clip-path: none;
  white-space: normal;
  overflow: visible;
}
```

Use case:

```html
<a href="#main-content" class="sr-only sr-only-focusable">Skip to main content</a>
```

---

### Summary

| ✅ Good For                     | ❌ Avoid For                   |
| ------------------------------ | ----------------------------- |
| Screen reader-only labels      | Hiding content from all users |
| Non-visible descriptive text   | Interactive visible elements  |
| Skip links / ARIA descriptions | Layout or spacing hacks       |



---
[🔝 Back to Table of Contents](#-table-of-contents)



## Typeface

### What is a Typeface?

A **typeface** is a set of characters (letters, numbers, and symbols) that share a common design. In simpler terms, it’s the overall style of the text used in design, which includes characteristics like shape, weight, size, and spacing.

The term "typeface" is often confused with "font," but there's a subtle difference:

* **Typeface** refers to the design or style of the text itself.
* **Font** refers to a specific instance of that typeface, including details like weight, size, and style (e.g., Arial Bold 12pt).

For example, **Arial** is a typeface, and **Arial Bold 12pt** is a specific font.

### How Does a Typeface Work?

A typeface works by defining a collection of letterforms (also known as **glyphs**) that are designed in a uniform style. These letterforms are used across multiple characters in a cohesive design to ensure that text is easy to read and visually appealing.

When you use a typeface on your website or in any document, the computer renders the text by using the vector outlines of the typeface’s glyphs. Each character in a typeface is typically designed as a set of vectors (paths) that can be scaled to any size without losing clarity or becoming pixelated. These outlines are what give the characters their shape.

### Components of a Typeface

* **Weight**: How thick or thin the lines of a typeface are (e.g., Regular, Bold, Light).
* **Style**: The tilt or inclination of the type (e.g., Italic, Oblique).
* **Size**: The size of the typeface. This is controlled by adjusting the font-size property in CSS, for example.
* **Line Spacing (Leading)**: The vertical distance between lines of text.
* **Letter Spacing (Tracking)**: The space between all characters in the text.
* **Kerning**: The space between two specific characters to improve visual harmony.

### Typefaces vs. Fonts

In modern usage, people often use the terms **typeface** and **font** interchangeably. However, traditionally:

* A **typeface** refers to the design itself (e.g., Helvetica, Times New Roman).
* A **font** refers to a specific implementation of that design (e.g., Helvetica Regular 12pt, Helvetica Bold 14pt).

To give a clearer distinction:

* **Typeface**: Helvetica, Times New Roman, Arial
* **Font**: Helvetica Regular 12pt, Times New Roman Bold 16pt

### Examples of Popular Typefaces

* **Serif Typefaces**: Have small lines or strokes at the ends of letters. Examples: **Times New Roman**, **Georgia**, **Merriweather**.
* **Sans-serif Typefaces**: Do not have the small lines or strokes at the ends of letters. Examples: **Arial**, **Helvetica**, **Roboto**.
* **Monospace Typefaces**: Each character occupies the same amount of space. Examples: **Courier**, **Consolas**, **Monaco**.
* **Display Typefaces**: Decorative typefaces designed for large sizes and headlines. Examples: **Impact**, **Lobster**, **Bebas Neue**.

### How Typeface Is Applied

When working with web design, you typically specify a **font family** (which refers to a typeface) in CSS. For example:

```css
body {
  font-family: 'Arial', sans-serif;
}
```

This CSS rule means that the text will be displayed in the **Arial** typeface, and if Arial is not available, the browser will use the default sans-serif font.

In web design, it's common to specify a fallback list of fonts:

```css
body {
  font-family: 'Roboto', 'Arial', sans-serif;
}
```

If **Roboto** is not available, the browser will fall back to **Arial**, and if neither is available, it will use the default sans-serif font available on the system.

### Conclusion

A typeface is essentially the visual identity of text. It provides a style and feeling to the content, influencing how readable and appealing the text appears. Whether it’s for body text, headers, or other types of content, choosing the right typeface can significantly impact the effectiveness of communication on a website, app, or printed material.

## Fallback fonts

When you're asked to use **Verdana** as the primary font and a **web-safe font** from the **sans-serif** family as a fallback, it's important to choose fallback fonts that maintain readability and aesthetic harmony in case **Verdana** is unavailable.

Here are some good fallback font options, along with reasons why they are suitable:

### 1. **Arial**

**CSS Example:**

```css
h1, h2 {
  font-family: 'Verdana', 'Arial', sans-serif;
}
```

* **Reason:** Arial is one of the most widely available sans-serif fonts across operating systems and devices. It’s simple, clean, and highly readable, which makes it a good alternative when Verdana is unavailable.
* **Why it works:** Arial shares many characteristics with Verdana, like wide letter spacing, which helps maintain good readability.

### 2. **Helvetica**

**CSS Example:**

```css
h1, h2 {
  font-family: 'Verdana', 'Helvetica', sans-serif;
}
```

* **Reason:** Helvetica is a highly popular and widely supported sans-serif font, commonly used in both print and digital design. It has a clean, neutral look that works well in a wide variety of contexts.
* **Why it works:** Helvetica has a slightly more compact style than Verdana, but it is still very readable. It's often seen as a "workhorse" font in design.

### 3. **Tahoma**

**CSS Example:**

```css
h1, h2 {
  font-family: 'Verdana', 'Tahoma', sans-serif;
}
```

* **Reason:** Tahoma is a close relative of Verdana, designed with similar proportions. It’s widely supported and maintains high readability on screen.
* **Why it works:** Tahoma shares the wide spacing and legible design of Verdana, making it a perfect fallback when Verdana isn’t available.

### 4. **Trebuchet MS**

**CSS Example:**

```css
h1, h2 {
  font-family: 'Verdana', 'Trebuchet MS', sans-serif;
}
```

* **Reason:** Trebuchet MS is another web-safe sans-serif font that has a more modern and slightly rounded appearance compared to Verdana. It’s still highly readable and commonly available across platforms.
* **Why it works:** It’s a good alternative when a slightly more stylish sans-serif is needed while maintaining legibility.

### 5. **Calibri**

**CSS Example:**

```css
h1, h2 {
  font-family: 'Verdana', 'Calibri', sans-serif;
}
```

* **Reason:** Calibri is the default font for Microsoft Office applications and is widely supported on Windows and other platforms. It has a modern sans-serif style that’s easy to read, especially on screens.
* **Why it works:** Calibri is slightly softer and rounder than Verdana, but still clear and easy to read, which makes it a great fallback option.

### Why These Fonts Are Good Choices:

1. **Web-Safe Fonts:** All these fonts are widely available across operating systems like Windows, macOS, and Linux, ensuring that users will have an appropriate fallback even if Verdana is unavailable.
2. **Consistency in Readability:** All the suggested fonts are sans-serif, which maintains the clean, minimal aesthetic that Verdana has, promoting legibility.
3. **User Experience:** Each of these fallback fonts is optimized for screen readability, meaning that your typography will still be effective and visually pleasing even if the primary choice is unavailable.

### Final Code Example:

```css
h1, h2 {
  font-family: 'Verdana', 'Arial', 'Helvetica', 'Tahoma', sans-serif;
}
```

This code sets **Verdana** as the primary font and uses **Arial**, **Helvetica**, or **Tahoma** as fallback fonts in case Verdana is not available. If none of those are available, the browser will default to any available **sans-serif** font on the system.

By using this approach, you're ensuring that your headings (h1 and h2) will maintain a similar appearance across all devices and platforms, improving consistency and user experience.


---
[🔝 Back to Table of Contents](#-table-of-contents)

## Contrast-ratio

Contrast-ratio is **not a CSS property**

However, **contrast ratio** is a **concept** used to measure the difference in luminance between two colors, typically **text and background**, to ensure readability and accessibility.



### ✅ **How Contrast Ratio Works (Concept)**

Contrast ratio is calculated between the **foreground color (like text)** and **background color**. It ranges from:

* **1:1** (no contrast, e.g., white on white)
* to **21:1** (maximum contrast, e.g., black on white)

---

### 🎯 **Accessibility Requirements (WCAG 2.1)**

| Text Type                        | Minimum Ratio (AA) | Enhanced Ratio (AAA) |
| -------------------------------- | ------------------ | -------------------- |
| Normal text (< 18pt)             | 4.5:1              | 7:1                  |
| Large text (≥ 18pt bold or 24pt) | 3:1                | 4.5:1                |
| UI components / graphics         | 3:1                | —                    |

---

### 🔍 **How to Test Contrast Ratio**

Although not a CSS property, you can **check contrast ratio** using tools like:

* [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
* Chrome DevTools (Accessibility tab)
* VS Code extensions like “Color Highlight” or “WCAG Contrast Checker”

---

### 🛠️ Example Use in Practice

Let's say you have:

```css
body {
  background-color: #ffffff;
}

p {
  color: #777777;
}
```

You'd check the contrast ratio between `#ffffff` (white) and `#777777` (gray), which is about **4.48:1**, just barely meeting the minimum for body text.

If it were `#999999`, the contrast would fall to **3.91:1**, which fails the WCAG AA requirement for normal-sized text.

---

### ❗Common Mistakes

* Assuming that dark colors always have enough contrast against white.
* Using light gray on white or muted pastels that look nice but are unreadable.
* Relying solely on color to communicate meaning (e.g., red text without symbols).

---

### ✅ Best Practices

* Always **test text contrast** for accessibility.
* Favor **darker or bolder foreground colors** on light backgrounds.
* Use design tokens or a color system that enforces contrast compliance.
* Don’t just eyeball it—**verify with tools**.


---

### ✅ **Step-by-Step: Ensuring Good Contrast with `color`**

To reiterate: **`contrast-ratio` is not a CSS property**—you can't use it in your stylesheet like `color` or `font-family`. Instead, it's a **measurement** you check **between your text color (`color`) and background color (`background-color`)** to ensure they meet accessibility standards.

However, here's how to **use `color` and `background-color` effectively** to **achieve a good contrast ratio**:


#### Example:

```css
body {
  background-color: #ffffff; /* White background */
}

h1 {
  color: #000000; /* Black text - Excellent contrast */
  font-family: Verdana, Geneva, sans-serif;
}
```

This combination of black on white has a **contrast ratio of 21:1**, which **meets all accessibility standards**.

---

### 🎯 How to Choose a Good `color` for Text

1. **Start with your background color** (e.g., white `#ffffff` or dark gray `#121212`).
2. Use a tool like [WebAIM's Contrast Checker](https://webaim.org/resources/contrastchecker/) to test your text color.
3. Adjust the `color` (text) until it reaches:

   * **≥ 4.5:1** for normal text
   * **≥ 3:1** for large text (≥18pt bold / 24pt regular)

---

### 🧪 Sample Failing and Passing Combos

#### ❌ Fails:

```css
p {
  color: #bbbbbb;  /* Too light */
  background-color: #ffffff;
}
```

This has a contrast ratio of \~2:1 and fails WCAG.

#### ✅ Passes:

```css
p {
  color: #333333;  /* Dark enough for white background */
  background-color: #ffffff;
}
```

This gives you a contrast ratio of \~15:1 — very readable.

---

### 🚫 Common Mistakes

* Using light gray on white (`#ccc` on `#fff`) — fails contrast.
* Assuming that any dark color on a light background passes.
* Using a background image without ensuring legible text.

---

### 📌 Summary

| CSS Property       | Purpose                                            |
| ------------------ | -------------------------------------------------- |
| `color`            | Sets the text color                                |
| `background-color` | Sets the background color                          |
| `font-family`      | Optional for legibility, but unrelated to contrast |

Then you **verify the contrast ratio manually** using a contrast checker.

---

**I need that my anchor elements have a contrast ratio at least of 7:1 . The current background color is #f5f6f7**

Great! You’re targeting **WCAG AAA** compliance with a **minimum contrast ratio of 7:1** for your anchor (`<a>`) text against a background color of `#f5f6f7` (a very light gray). Let’s find safe **text colors** that meet or exceed that ratio.

---

### ✅ **Colors with ≥ 7:1 Contrast Against `#f5f6f7`**

Here are **accessible color options** for your links:

| Text Color  | Hex Code  | Contrast Ratio | Notes                         |
| ----------- | --------- | -------------- | ----------------------------- |
| Black       | `#000000` | **21:1**       | Max contrast                  |
| Dark Navy   | `#1a1a7e` | **8.5:1**      | Professional feel             |
| Dark Green  | `#004400` | **12.7:1**     | Strong but not black          |
| Deep Purple | `#3b0079` | **8.1:1**      | Good for branding or emphasis |
| Dark Red    | `#700000` | **8.6:1**      | Attention-grabbing            |
| Charcoal    | `#2e2e2e` | **12.4:1**     | Great for clean, modern UI    |

---

### 🧾 **Example CSS for Your Anchor Elements**

```css
a {
  color: #1a1a7e; /* Dark navy link color */
  text-decoration: underline;
  background-color: #f5f6f7; /* Your current background */
}
```

You can replace `#1a1a7e` with any of the other colors listed above based on your design aesthetic.

---

### 🎯 Tips

* If you're using hover/focus styles, make sure those also meet contrast guidelines.
* Always test combinations using tools like:

  * [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
  * [Accessible Colors](https://accessible-colors.com/)



---
[🔝 Back to Table of Contents](#-table-of-contents)

## flex-wrap

Absolutely! Let's break down each property in this CSS rule:

```css
nav > ul {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  padding-inline-start: 0; 
  margin-block: 0;
  height: 100%;
}
```

### 🔍 **What each property does**

| Property                         | Description                                                                                                                                                                |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `display: flex;`                 | Turns the `<ul>` into a **flex container**, allowing its `<li>` children to be laid out with flexible spacing.                                                             |
| `justify-content: space-evenly;` | Distributes items **evenly across the main axis** (horizontal), with equal space between and around each item. Prevents items from being bunched up or pushed to one side. |
| `flex-wrap: wrap;`               | Allows items to **wrap to the next line** if there isn’t enough space on one line. Helps **prevent horizontal overflow**.                                                  |
| `align-items: center;`           | Vertically centers the `<li>` elements **along the cross-axis** (vertical, since the flex direction is row by default).                                                    |
| `padding-inline-start: 0;`       | Removes the default left padding browsers apply to `<ul>`. Helps align the content properly and eliminate unwanted space.                                                  |
| `margin-block: 0;`               | Removes default **top and bottom margins** on the `<ul>`, helping it stay within the intended height and avoid overflow.                                                   |
| `height: 100%;`                  | Ensures the `<ul>` takes up the full height of its parent (`nav`). Useful if vertical centering or alignment is needed.                                                    |

---

### ✅ **Why this helps fix horizontal overflow**

The two most important properties for fixing right overflow are:

* `flex-wrap: wrap;` – avoids elements being forced into a single row, which can push layout boundaries.
* `padding-inline-start: 0;` – removes default indentation that could contribute to overflow.

---

### ⚠️ **Common mistakes to avoid**

* Forgetting `flex-wrap: wrap` when items don’t fit in one line.
* Not resetting default `ul`/`li` styles (like padding or margin), which can cause layout shifts or overflow.
* Using `space-evenly` on narrow containers may result in awkward spacing; consider `space-between` or `center` in tight layouts.



---
[🔝 Back to Table of Contents](#-table-of-contents)


## Stylyng `<button>`

This CSS rule is styling all `<button>` elements in your HTML. Here’s what each property does and how it contributes to the button's appearance and layout:

---

### 🔍 Code Breakdown

```css
button {
  display: block;
  margin: 40px auto;
  width: 40%;
  padding: 15px;
  font-size: 1.438rem;
  background: #d0d0d5;
  border: 3px solid #3b3b4f;
}
```

---

### 🧱 Property-by-Property Explanation

| Property                     | Description                                                                                                                                |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `display: block;`            | Makes the button a block-level element, meaning it will take up the full width available by default and allow `margin: auto` to center it. |
| `margin: 40px auto;`         | Adds `40px` of vertical spacing above and below the button, and centers it horizontally (`auto` left/right margins) within its container.  |
| `width: 40%;`                | Sets the button's width to 40% of its parent container’s width.                                                                            |
| `padding: 15px;`             | Adds 15px of space **inside** the button (between the text and the edges), increasing click area and readability.                          |
| `font-size: 1.438rem;`       | Makes the button text size about 23px (since 1rem = 16px by default), giving it emphasis.                                                  |
| `background: #d0d0d5;`       | Gives the button a light gray background color.                                                                                            |
| `border: 3px solid #3b3b4f;` | Adds a thick, dark bluish-gray border, giving the button visual definition.                                                                |

---

### ✅ What This Code Achieves

* A **visibly styled, centered button** that scales responsively (because of `%`-based width).
* Button is easy to spot and interact with due to padding, larger font, and contrast between background and border.

---

### 🛑 Common Mistakes to Avoid

* Using `display: block` without `margin: auto` will not center the element.
* If the parent container is too narrow, `width: 40%` might make the button too small.
* Not ensuring enough contrast between `background` and `border/text` could make it hard to see.



---
[🔝 Back to Table of Contents](#-table-of-contents)


## scroll-behavior: smooth;

The rule:

```css
* {
  scroll-behavior: smooth;
}
```

applies **smooth scrolling** to all elements on the page (`*` is the universal selector). Here's what it does and what to keep in mind:

---

### 🧾 What It Does

* **`scroll-behavior: smooth`** enables animated, gradual scrolling when:

  * You click on anchor links like `<a href="#section1">`
  * You programmatically scroll with JavaScript (e.g., `element.scrollIntoView()`)

---

### ✅ When It’s Useful

* For **improved user experience**, especially in:

  * One-page sites with internal anchor navigation
  * Sticky menus or scroll-to-top buttons
* Helps users maintain visual context while navigating

---

### ⚠️ Caveats & Common Mistakes

| ⚠️ Pitfall               | Why It Matters                                                                                                                                |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Applying to `*` selector | Affects **all** scrollable elements, which might not be ideal — you might want to restrict it to `html { scroll-behavior: smooth; }` instead. |
| Incompatibility          | Not supported in **all** older browsers (e.g., some versions of IE).                                                                          |
| Performance              | On large or complex pages, automatic smooth scrolling can feel **sluggish** or buggy if not managed carefully.                                |

---

### 🔧 Safer Alternative

```css
html {
  scroll-behavior: smooth;
}
```

This targets the **main document scroll**, not every scrollable box on the page.



---
[🔝 Back to Table of Contents](#-table-of-contents)


## @media (prefers-reduced-motion: no-preference)

This code snippet:

```css
@media (prefers-reduced-motion: no-preference) {
  * {
    scroll-behavior: smooth;
  }
}
```

### 🔍 What It Does

This **CSS media query** checks the user's system preferences and **only applies smooth scrolling if the user has **not** requested reduced motion**.

---

### 📘 Explanation

* `@media (prefers-reduced-motion: no-preference)`:

  * Targets users who **have not opted out** of animations or transitions.
  * If a user has **enabled "Reduce Motion"** in their system settings (e.g., for accessibility reasons), this rule is skipped.

* Inside the block:

  ```css
  * {
    scroll-behavior: smooth;
  }
  ```

  * Applies smooth scrolling globally **only** if animations are OK.

---

### ✅ Why It’s Good Practice

This shows **respect for accessibility** preferences:

* Some users (e.g. with vestibular disorders) may experience discomfort with motion effects.
* Using `prefers-reduced-motion` ensures your site is inclusive.

---

### 🛠️ Optional Improvement

Instead of applying it to all elements, you could limit it just to the `html` element:

```css
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}
```

This is usually more predictable and avoids unintended effects on other scrollable containers.



[🔝 Back to Table of Contents](#-table-of-contents)
