import "./Navbar.css";
import ButtonLink from "../ButtonLink/ButtonLink";
import { NavLink as NavLinkReactRouter } from "react-router-dom";

const NavLink = ({ to, children, ...props }) => {
  return (
    <NavLinkReactRouter {...props} className={({isActive}) => {
      return isActive ? 'is-active' : undefined
    }} to={to}>
      <ButtonLink className="button" buttonText={children} to={to} />
    </NavLinkReactRouter>
  );
};

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <NavLink>
          <ButtonLink className="button" buttonText="Home" to="/" />
        </NavLink>
        <NavLink>
          <ButtonLink className="button" buttonText="About" to="/about" />
        </NavLink>
        <NavLink>
          <ButtonLink className="button" buttonText="Contact" to="/contact" />
        </NavLink>
      </nav>
    </>
  );
}

export default Navbar;
