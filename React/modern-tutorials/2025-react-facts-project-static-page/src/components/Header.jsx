import reactLogo from '../assets/images/react-logo.png'
import './Header.css'


function Header() {
    return (
        <header>
            <nav>
                <img src={reactLogo} alt='React Logo' className='nav-logo' />
                <span>ReactFacts</span>
            </nav>
        </header>
    );
}

export default Header;