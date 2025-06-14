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


class Testimonio extends React.Component{
  render() {
    return (
      <div className='contenedor-testimonio'>
        <img
          className='imagen-testimonio'
          src={require(`../imagenes/testimonio-${this.props.imagen}.png`)}
          alt={`Foto de ${this.props.imagen.charAt(0).toUpperCase() + this.props.imagen.slice(1)}`}
        />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'><strong>{this.props.nombre}</strong> en {this.props.pais}</p>
          <p className='cargo-testimonio'>{this.props.cargo} en <strong>{this.props.empresa}</strong></p>
          <p className='texto-testimonio'>{formatTestimonio(this.props.testimonio)}</p>
        </div>
      </div>
    );
  }
}


export default Testimonio