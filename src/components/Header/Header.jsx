import './Header.css'
import Logo from "../Logo/Logo"
import Navbar from "../Navbar/Navbar"



function Header() {
  return (
    <header className="header">
      <Logo></Logo>
      <Navbar></Navbar>
    </header>
  )
}

export default Header