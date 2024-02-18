import "./Navbar.css";
import { NavLink } from "../NavLink/NavLink";
import Input from "../Input/Input";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <Input></Input>
      </nav>
    </>
  );
}

export default Navbar;

