import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

export default App


/*

            <h1>Why I Want to Learn React</h1>
            <ol>
                <li>Because it's a modern, powerful, and frankly cool tool to build interfaces</li>
                <li>It boosts my employability — React is in high demand across the industry</li>
                <li>Helps me build applications faster and more efficiently</li>
                <li>It's a requirement for an exciting new job opportunity I'm preparing for</li>
                <li>Honestly... I just wanted to! And that's reason enough</li>
            </ol>
        </>
*/