import React, {useState} from 'react';
import '../hojas-de-estilo/ListaDeTareas.css'
import Formulario from '../componentes/Formulario';


function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);
  return (
    <>
      <Formulario />
      <div className='tareas-lista-contenedor'>
        {
          
        }
      </div>
    </>
  );
}

export default ListaDeTareas;