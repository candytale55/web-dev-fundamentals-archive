# Blog Post Card – GenAI 2025

A visually engaging and responsive **blog post card** built with **HTML5** and **CSS3**, designed to showcase a featured article in a card layout.

This project was developed as part of [freeCodeCamp’s Blog Post Card Lab](https://www.freecodecamp.org/learn/full-stack-developer/lab-blog-post-card/lab-blog-post-card), which focuses on practicing layout techniques using background colors, borders, spacing, and responsive design principles.

---

## Project Status

**Completed: July 2025**
The project satisfies all user stories and passes all lab tests. It features a GenAI-themed style, distinct from the example project, and adapts to various screen sizes.

---

## Technologies Used

* **HTML5** – Semantic structure and accessibility
* **CSS3** – Flexbox, `border-radius`, responsive design with media queries, and `clamp()` for fluid typography

Tested on Chrome.

---

## Features

* Clean, modern card layout for showcasing a blog post
* Fully responsive design with fluid typography and layout scaling
* Custom color palette optimized for contrast and visual appeal
* Styled CTA button with hover effect
* Semantic and accessible markup structure

---

## Setup Instructions

This project lives inside a larger tutorial projects folder. To use or edit this specific project:

1. Copy the `index.html` and `styles.css` files from the **Blog Post Card** subfolder.
2. Place them in your own directory, and open `index.html` in your browser:

```bash
open index.html
```

No server or build tools needed — just open the file locally.

---

## Project Structure

```
.
├── index.html          # HTML structure for the card
├── styles.css          # Custom responsive CSS styling
└── img/                # Screenshots
    ├── scsh-001.jpg    # Wide screen view
    ├── scsh-002.jpg    # Small screen
    └── scsh-003.jpg    # Very small screen
```

---

## Screenshots

| Wide Screen                    | Tablet / Small Screen           | Mobile / Very Small Screen     |
| ------------------------------ | ------------------------------- | ------------------------------ |
| ![Wide View](img/scsh-001.JPG) | ![Small View](img/scsh-002.JPG) | ![Tiny View](img/scsh-003.JPG) |

---

## Key CSS Concepts Used

| Concept             | Description                                          |
| ------------------- | ---------------------------------------------------- |
| `flex-direction`    | Used to vertically stack the card’s elements         |
| `border-radius`     | Rounds the corners of the card and image             |
| `object-fit: cover` | Ensures image fills its container without distortion |
| `clamp()`           | Scales text size responsively without media queries  |
| `hover` selector    | Adds interactivity to the "Read More" button         |
| `@media` queries    | Improves layout and text scaling on smaller devices  |
| `max-width / vw`    | Makes the layout fluid and adaptable                 |

---

## Educational Purpose

This project was built as part of freeCodeCamp’s Full Stack Developer curriculum. It’s intended to help learners:

* Practice styling layouts using real-world UI patterns
* Understand semantic HTML structure for accessibility
* Use Flexbox and responsive design techniques
* Apply visual hierarchy with padding, font sizes, and color

---

## Acknowledgements

* Built for [freeCodeCamp's Blog Post Card Lab](https://www.freecodecamp.org/learn/full-stack-developer/lab-blog-post-card/lab-blog-post-card)
