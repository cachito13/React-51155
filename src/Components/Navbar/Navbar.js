import './Navbar.scss'
import logo from '../../assets/imgs/logonav.png';

export const Navbar = () => {
    return(
        <header className="header">
            <div className="header__container">
                     <img src={logo} className="header__logo" alt='logo'/>
                  <nav className="navbar">
                   <p className="navbar__link">Enlace 1</p>
                   <p className="navbar__link">Enlace 2</p>
                   <p className="navbar__link">Enlace 3</p>
            </nav>
            </div>
    </header>

    )
}