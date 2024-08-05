import PropTypes from 'prop-types';
import './NavLink.css'
import { NavLink as NavLinkReactRouter } from "react-router-dom";

export const NavLink = ({ to, children, ...props }) => {
  return (
    <NavLinkReactRouter 
    {...props}
    className={({ isActive }) => {
      return isActive ? 'button is-active' : 'button'
    }}
    to={to}>
     {children}
    </NavLinkReactRouter>
  );
};


NavLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
  };