# Testimonios FreeCodeCamp (Class Components Version)

---

## About this project

This is a **modified version** of the original Testimonios app from the [freeCodeCamp React course](https://youtu.be/6Jfk8ic3KVk). It was rewritten using **class components** instead of functional components to learn an alternative React architecture.

The logic and layout remain the same, but component definition now uses `class extends React.Component` and includes a `render()` method. This version reinforces concepts like component lifecycle and structure prior to Hooks.

---

## Technologies and Versions

* **React 18.x** — Frontend library
* **JavaScript (ES6+)** — `class`, `this.props`, arrow functions
* **CSS3** — Card layout, image styling, responsiveness
* **Create React App (CRA)** — Bootstrapped starter project

---

## Features (Class-Based Additions)

* Uses `class App extends React.Component` instead of `function App()`
* All JSX is returned inside a `render()` method
* Props are accessed via `this.props` instead of destructuring
* Supports dynamic rendering and reusable UI just like functional components
* Practiced converting functional code to class-based as a React exercise

---

## Setup and Running

1. Clone the class component version:

   ```bash
   git clone https://github.com/estefaniacn/testimonios-freecodecamp-clase.git
````

2. Navigate to the folder:

   ```bash
   cd testimonios-freecodecamp-clase
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser to [http://localhost:3000](http://localhost:3000)

---

## Project Structure Overview

```
/src
├── App.js                     # Root class-based component
├── /componentes
│   └── Testimonio.jsx         # Still functional, could also be converted
├── /hojas-de-estilo
│   └── Testimonio.css         # Shared styling logic
├── /imagenes
│   └── imagenes.jpg           # Headshot assets
├── testimonios.js             # Data objects array
└── index.js                   # ReactDOM render root
```

---

## Screenshots

<p align="center">
  <img src="src/imagenes/scsh01.png" alt="Screenshot" width="400" />
</p>

---

## Useful Scripts

* `npm start` — Start the local server
* `npm run build` — Create optimized production build
* `npm test` — (Optional) Run test suite
* `npm run eject` — Eject Create React App settings

---

## References

* 📘 Class Components tutorial timestamp:
  [https://youtu.be/6Jfk8ic3KVk?si=XkPdKz5VufEYgmnd\&t=26966](https://youtu.be/6Jfk8ic3KVk?si=XkPdKz5VufEYgmnd&t=26966)
* 📂 GitHub repo (class version):
  [https://github.com/estefaniacn/testimonios-freecodecamp-clase](https://github.com/estefaniacn/testimonios-freecodecamp-clase)
* 📂 Functional Component first project: https://github.com/candytale55/web-dev-fundamentals-archive/tree/master/2025/React/testimonios-freecodecamp

---

## Learning Purpose

This version was created specifically to explore **legacy React practices** and to contrast them with the modern `useState`/Hooks approach. Though class components are less common in new projects, they’re still used in enterprise codebases and legacy systems.


