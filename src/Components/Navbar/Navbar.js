import './Navbar.scss'
import logo from '../../assets/imgs/logonav.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return(
    <header className="header">
            <div className="header__container">
                <img src={logo} className="header__logo" alt='logo'/>
            
                <nav className="navbar">
                   <Link to='/' className="navbar__link">Inicio</Link>
                   <Link to='/productos/camperas' className="navbar__link">Camperas</Link>
                    <Link to='/productos/remeras' className="navbar__link">Remeras</Link>
                    <Link to='/productos/pantalon' className="navbar__link">Pantalones</Link>
                   <Link to='/contacto' className="navbar__link">Contacto</Link>
                   <Link to='/nuestra' className="navbar__link">Nuestra Empresa</Link>
                </nav>
                    <CartWidget/>
            </div>
    </header>

    )
}