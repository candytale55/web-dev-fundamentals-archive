import { useState } from 'react'
import reactLogo from './assets/react-logo.png'
import { createApp } from 'react-dom/client'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <img src={reactLogo} alt='React Logo' width="40px" />
      <h1>Fun Facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walker</li>
        <li>Has well over 200k stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  )
}

export default App
