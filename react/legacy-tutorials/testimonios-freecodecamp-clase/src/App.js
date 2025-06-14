import React from 'react';
import './App.css';
import Testimonio from './componentes/Testimonio.jsx'
import testimonios from './data/testimonios.js'




class App extends React.Component {
  render() {
    return (
      <div className="App">

        <div className='contenedor-principal'>
          <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp</h1>

          {testimonios.map((testimonio, index) => (
            <Testimonio key={index} {...testimonio} />
          ))}

        </div>

      </div>
    );
  }
  
}



export default App;
