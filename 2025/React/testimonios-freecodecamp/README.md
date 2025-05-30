# Testimonios FreeCodeCamp (Functional Components)

---

## About this project

This is a **testimonial display app** built using functional components in React, based on the [freeCodeCamp React tutorial](https://youtu.be/6Jfk8ic3KVk). It dynamically renders user feedback cards using `props`, `map()`, and a clean responsive layout.

This project introduces React fundamentals such as reusable components, props handling, conditional formatting, and responsive styling. It serves as the first hands-on exercise in the course.

---

## Technologies and Versions

* **React 18.x** — Frontend framework
* **JavaScript (ES6+)** — Arrow functions, destructuring, `map()`
* **CSS3** — Responsive styling with classes and media queries
* **Create React App (CRA)** — Initial project setup

---

## Features (Things Learned)

* Dynamic rendering of multiple testimonial components via `.map()`
* `Testimonio` receives data via `props` and conditionally formats content
* Highlights the word “freeCodeCamp” in bold inside testimonial text
* Semantic HTML usage: alt tags, heading levels, accessibility
* Responsive layout using CSS media queries
* Capitalized names programmatically using `.toUpperCase()` and props

---

## Setup and Running

1. Clone the repository:

```
   git clone https://github.com/estefaniacn/testimonios-freecodecamp.git
```

2. Navigate to the folder:

   ```
   cd testimonios-freecodecamp
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm start
   ```

5. Once in your machine, visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## Project Structure Overview

```
/src
├── App.js                     # Root component with map() logic
├── /componentes
│   └── Testimonio.jsx         # Reusable functional component
├── /hojas-de-estilo
│   └── Testimonio.css         # Styling for testimonial cards
├── /imagenes
│   ├── imagen1.jpg
│   └── imagen2.jpg
├── testimonios.js             # Array of testimonial objects
└── index.js                   # ReactDOM render entry point
```

---

## Screenshots

<p align="center">
  <img src="src/imagenes/scsh01.png" alt="Screenshot" width="400" />
</p>

---

## Useful Scripts

* `npm start` — Start the development server
* `npm run build` — Build for production
* `npm test` — Run tests (if configured)
* `npm run eject` — Eject CRA configs (advanced)

---

## References

* 📘 Full tutorial (Functional version):
  [https://youtu.be/6Jfk8ic3KVk](https://youtu.be/6Jfk8ic3KVk)
* 📂 GitHub repo:
  [https://github.com/estefaniacn/testimonios-freecodecamp](https://github.com/estefaniacn/testimonios-freecodecamp)
* 📝 Note to self — "Retos" section:
  [https://youtu.be/6Jfk8ic3KVk?si=yvgGuOhCkjyEO\_O9\&t=9867](https://youtu.be/6Jfk8ic3KVk?si=yvgGuOhCkjyEO_O9&t=9867)
