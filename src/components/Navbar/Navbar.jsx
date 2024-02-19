import { useState } from 'react';
import { NavLink } from '../NavLink/NavLink';
import Input from '../Input/Input';
import './Navbar.css'; // Asegúrate de tener este archivo con los estilos necesarios
import MenuIcon from '../../assets/Menu';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <ul className={`navbar-ul ${menuOpen ? 'active' : ''}`}>
          <li className="navbar-li">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="navbar-li">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="navbar-li">
            {/* <Input /> */}
          </li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          <MenuIcon />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
