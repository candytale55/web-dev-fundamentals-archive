// React 18+ root rendering example (without JSX)
// There's an html file with <div id="root"></div>
// Usage: Replace <h1> with any component or JSX tree

import { createRoot } from "react-dom/client"

const container = document.getElementById("root")     // Get the DOM node
const root = createRoot(container)                    // Create a React root
root.render(<h1>Anything I want</h1>)                 // Render JSX



/*
Breakdown (Step,	Code,	What it does)
1️⃣	document.getElementById("root")	Grabs the div in index.html where React will render
2️⃣	createRoot(container)	Creates the root that React will use to manage the UI
3️⃣	.render(<JSX>)	Renders a virtual DOM element into the actual DOM

*/

// Also possible:
import { createRoot } from "react-dom/client"
const container = document.getElementById("root")     
createRoot(document.getElementById("root")).render(<h1>Anything I want</h1>)
