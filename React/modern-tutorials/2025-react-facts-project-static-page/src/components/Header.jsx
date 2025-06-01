import reactLogo from '../assets/react-logo.png'
import './Header.css'

function Header() {
    return (
        <header>
            <img src={reactLogo} alt='React Logo' className='nav-logo' />
            <nav>
                <ul className='nav-list'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;