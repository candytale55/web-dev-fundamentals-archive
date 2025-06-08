import { useState } from 'react';
import { evaluate } from 'mathjs';

import './App.css';

import Logo from './componentes/Logo';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';


function App() {

  const [input, setInput] = useState('');
  const operators = ['+', '-', '*', '/', '%', '^'];
 
  
  // Ensures valid operator input: replaces consecutive operators, but allows '-' for negative numbers.
  function sanitizeOperatorInput(currentInput, newInput) {
    const lastChar = currentInput.slice(-1);
    if (operators.includes(lastChar)) {
      // Allow - after another operator for negative numbers
      if (newInput === '-' && lastChar !== '-') {
        return currentInput + newInput;
      }
      // Replace last operator (avoid ++, +*, etc.)
      return currentInput.slice(0, -1) + newInput;
    }
    return currentInput + newInput;
  }


  // Checks if a decimal can be added by ensuring the current number segment has no existing decimal point.
  function canAddDecimal(currentInput) {
    const parts = currentInput.split(/[\+\-\*\/]/) // Split into segments between operators
    const lastNumber = parts[parts.length - 1];
    return !lastNumber.includes('.')
  }

  // Prevents multiple leading zeros by removing the last zero if the current number segment is exactly '0'
  function sanitizeZeroInput(currentInput) {
    const parts = currentInput.split(/[\+\-\*\/]/);
    const last = parts[parts.length - 1];
    if (last === '0') {
      return currentInput.slice(0, -1); // remove last zero
    }
    return currentInput;
  }


  const agregarInput = (val) => {
    
    if (val === '.') {
      // Prevent adding multiple decimals in the same number segment
      if (!canAddDecimal(input)) return;
    }

    if (val === '0') {
      // Avoid multiple leading zeroes like '00'
      setInput(sanitizeZeroInput(input) + val);
      return;
    }

    if (operators.includes(val)) {
      // Prevent invalid sequences like ++ or *+ by sanitizing operator input
      setInput(sanitizeOperatorInput(input, val));
    } else {
      // Append valid numbers or characters to the input
      setInput(input + val);
    }
  }



  const calcularResultado = () => {

    if (input){
      setInput(evaluate(input).toString());
    } else {
      alert('Introduzca un valor para realizar los cálculos');
    }
   };

  return (
    <div className="App">

      <Logo />


      <div className='contenedor-calculadora'>

        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>

        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={()=>setInput('')} >
            Clear
          </BotonClear>
        </div>


        
      </div>
    </div>
  );
}

export default App;
