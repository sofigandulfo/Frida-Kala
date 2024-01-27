import "./Navbar.css";
import { NavLink } from "../NavLink/NavLink";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </>
  );
}

export default Navbar;

