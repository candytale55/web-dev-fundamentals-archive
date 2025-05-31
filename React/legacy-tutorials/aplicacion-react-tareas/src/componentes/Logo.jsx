import freeCodeCampLogo from '../imagenes/freecodecamp-logo.png';
import '../hojas-de-estilo/Logo.css';

function Logo() {
    

    return (
        <div className="freecodecamp-logo-contenedor">
            <img
                src={freeCodeCampLogo}
                className='freecodecamp-logo'
            />
        </div>
    );
}

export default Logo;