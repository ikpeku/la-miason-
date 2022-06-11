import { useState } from 'react'
import "./navbar.css"
import logo from "../../assets/logo.png"
import NavbarLink from "./NavbarLink";
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';


const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='position-relative'>
      <div className="laMaison__header-container d-flex align-items-center justify-content-between">
        <div className="laMaison__header-container__logosCon d-flex align-items-center">
          <img src={logo} alt="logo" />
          <h4>La Maison</h4>
        </div>
        <div className="laMaison__header-container__links-container">
          <NavbarLink classes="laMaison__header-container__links d-flex gap-5" />
        </div>
        <div className="laMaison__header-container__btn">
          <a href="#properties"><button>Find A House</button></a>
        </div>

        <div className="laMaison__header--menu">
          {
            toggleMenu
              ?
              <RiCloseFill size={40} color="#000000" onClick={() => setToggleMenu(false)} />
              :
              <RiMenu3Fill size={40} color="#000000" onClick={() => setToggleMenu(true)} />
          }
        </div>
      </div>
      {toggleMenu && <div className="dropdown bounce-in-top">
        <NavbarLink classes="position-absolute d-flex flex-column mb-5 me-5  dropdown-link" />
      </div>}
    </div>
  )
}

export default Navbar