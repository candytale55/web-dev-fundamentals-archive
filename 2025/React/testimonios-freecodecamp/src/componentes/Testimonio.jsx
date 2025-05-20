import React from 'react';
import '../hojas-de-estilo/Testimonio.css'


function formatTestimonio(text) {
  return text.split(/(freeCodeCamp)/g).map((word, i) => {
    if (word === 'freeCodeCamp') {
      return <strong key={i}>{word}</strong>;
    }
    return word;
  });
}




function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt={`Foto de ${props.imagen.charAt(0).toUpperCase() + props.imagen.slice(1)}`}
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>{formatTestimonio(props.testimonio)}</p>
      </div>
    </div>
  );
} 

export default Testimonio