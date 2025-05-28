import '../hojas-de-estilo/Formulario.css'


function Formulario(props) {
    
    return (
        <form className='tarea-formulario'>
            <input
                className='tarea-input'
                type='text'
                placeholder='Escribe una tarea'
                name='texto'
            />
            <button className='tarea-boton'>Agregar tarea</button>
        </form>
    );
}

export default Formulario;
