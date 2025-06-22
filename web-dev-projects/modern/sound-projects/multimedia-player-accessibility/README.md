
# Steampunk Multimedia Player

A responsive multimedia player built with **semantic HTML5** and **CSS3**, focused on accessibility best practices.
This project showcases how to properly embed and style audio and video content with descriptive text and captions, while maintaining full screen-reader support.

This is a personalized version of the [freeCodeCamp Multimedia Player Lab](https://www.freecodecamp.org/learn/full-stack-developer/lab-multimedia-player/lab-multimedia-player). The theme was adapted to represent a fictional steampunk band.

---

## Project Status

**Completed: June 2025**
This mockup project was completed as part of a tutorial archive and adapted to better understand media accessibility with `aria-label`, `track`, and semantic HTML elements.

---

## Technologies Used

* **HTML5** – Semantic layout with proper use of `<audio>`, `<video>`, `<source>`, `<track>`, and ARIA roles
* **CSS3** – Responsive styling for mobile and wide screens
* **No JavaScript required** – Pure HTML & CSS demo

> Tested in Chrome and Firefox.

---

## Features

* Two audio players for music and transcript playback
* One embedded video with subtitles
* `<track>` element with `.vtt` captions file
* Accessible markup using `aria-label` attributes
* Responsive layout that adjusts between mobile and desktop screens
* Fully semantic structure using `<section>`, `<h1>`, `<h2>`, and `<p>` elements

---

## Setup Instructions

1. Copy or download this specific project folder from your tutorial projects repository.
   You can either:

   * Download the entire repo as a ZIP and extract this project folder, or
   * Navigate to this project folder in GitHub and download the `index.html`, `styles.css`, and `img/` files individually.

2. Open the `index.html` file in your browser:

   ```
   open index.html
   ```

   No server or build tools required — just open it in your browser.

---

## Project Structure

```
.
├── index.html          # Core HTML structure
├── styles.css          # Responsive and accessible styling
└── img/                # Screenshots and videos of the player
    ├── scsht-01 wide.png
    └── scsht-02 mobile.png
    └── video-steampunk-dancers-2.mp4
    └── video-steampunk-dancers.mp4
```

---

## Screenshots

| Wide Layout                             | Mobile Layout                             |
| --------------------------------------- | ----------------------------------------- |
| ![Wide Screen](img/scsht-01%20wide.png) | ![Mobile View](img/scsht-02%20mobile.png) |

---

## Key HTML & Accessibility Concepts Used

| Concept               | Description                                         |
| --------------------- | --------------------------------------------------- |
| `<audio>` & `<video>` | Core media embedding elements with controls         |
| `<source>`            | Specifies the media file and type                   |
| `type` attribute      | Helps the browser determine how to decode the media |
| `aria-label`          | Provides descriptive labels for screen readers      |
| `<track>`             | Enables subtitles or captions using `.vtt` files    |
| `srclang` & `label`   | Language and naming metadata for the captions track |
| `<section>` & `<h2>`  | Organizes content semantically and accessibly       |

---

## Educational Purpose

This project was created to:

* Practice using `<audio>` and `<video>` elements
* Learn how to embed accessible multimedia content
* Understand the purpose of `<track>` for captions
* Apply ARIA attributes (`aria-label`) effectively
* Use `<source>` with correct `type` values for compatibility
* Gain hands-on experience with responsive layout design

---


## Acknowledgements

* Based on the [freeCodeCamp Multimedia Player Lab](https://www.freecodecamp.org/learn/full-stack-developer/lab-multimedia-player/lab-multimedia-player)
* Media files from the [freeCodeCamp CDN](https://cdn.freecodecamp.org)
* Customized theme inspired by fictional steampunk aesthetics

---


## Common Mistakes (for future reference)

Future self: Below is the **original code** so you can easily spot what needed to be changed or added the first time around.

---

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Multimedia Player</title>
</head>

<body>
  <h1>Multimedia Player</h1>

  <section>
    <h2>Steampunk Dance</h2>
    <audio 
      controls
      aria-label="audio-file"
      src="https://cdn.freecodecamp.org/curriculum/js-music-player/sailing-away.mp3"
      **>** <!-- ❌ MISTAKE: You're using the `src` directly on <audio>. It needs a <source> inside instead -->
      **</audio>**
  </section>
    
  <section>
    <h2>Steampunk Dance</h2>
    <video controls **>** <!-- ❌ MISTAKE: Missing required `width` attribute -->
      <track 
        src="subtitles.vtt" 
        kind="subtitles" 
        srclang="en" 
        label="English"
        > <!-- ✅ Valid track, but real file should exist or be correctly linked -->
      <source src="https://cdn.freecodecamp.org/curriculum/labs/What is the map method and how does it work.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    **</video>**
  </section>

  <section>
    <audio 
      controls
      aria-label="audio-file"
      src="https://cdn.freecodecamp.org/curriculum/js-music-player/sailing-away.mp3"
      type="audio/mp3"
      **>** <!-- ❌ Again, using `src` directly on <audio> instead of using a <source> inside -->
      **</audio>**
    <h2>Transcript</h2>
    <p>This is the transcript of the video</p>
  </section>

</body>
</html>
```

---

### 🔧 Summary of Mistakes:

| Issue                                        | Explanation                                                                                                           |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| ❌ `<audio>` with `src` directly              | You should nest a `<source>` inside the `<audio>` element with `src` and `type` attributes.                           |
| ❌ `<audio>` with `type` attribute            | The `<audio>` tag itself doesn't need a `type`. Use it inside `<source>` instead.                                     |
| ❌ Missing `width` on `<video>`               | The `<video>` element should have a `width` attribute like `width="640"` to pass the requirement.                     |
| ❌ Placeholder subtitle `src="subtitles.vtt"` | This file likely doesn’t exist. Replace with an actual `.vtt` URL or a placeholder note that it’s not functional yet. |

Original code: web-dev-projects/modern/sound-projects/multimedia-player-accessibility/index.html 

shame on you, shame on you . . .


---
