import React, {useState} from 'react';
import '../hojas-de-estilo/ListaDeTareas.css'
import Formulario from '../componentes/Formulario';
import Tarea from '../componentes/Tarea';


function ListaDeTareas() {

  const [tareas, setTareas] = useState([]);
  
  const agregarTarea = tarea => {
    console.log('Tarea Agregada')
    console.log(tarea)
  }

  return (
    <>
      <Formulario />
      <div className='tareas-lista-contenedor'>
        {
          tareas.map(
            (tarea) => 
              <Tarea
                texto={tarea.texto}
                completada={tarea.completada}
              />
          )
        }
      </div>
    </>
  );
}

export default ListaDeTareas;