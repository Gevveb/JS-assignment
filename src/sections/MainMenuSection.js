import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'

const MainMenuSection = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <nav className="mainmenu container"> 
            <NavLink className="logo" to="/" end>Fixxo.</NavLink>
            <div className={`menu-links ${showMenu ? "d-grid" : ""}`}>
                <NavLink className="menu-link" to="/" end> Home</NavLink>
                <NavLink className="menu-link" to="/categories" end> Categories</NavLink>
                <NavLink className="menu-link" to="/products" > Products</NavLink>
                <NavLink className="menu-link" to="/contacts" end> Contacts</NavLink>
            </div>
            <div className="menu-icons">   
                <MenuIcon className="icon" link="/search" icon="fa-regular fa-magnifying-glass"/>
                <MenuIcon hideMobile="true" className="icon" link="/comper" icon="fa-regular fa-code-compare"/>
                <MenuIcon hideMobile="true" quantity="1" className="icon" link="/liked" icon="fa-regular fa-heart"/>
                <MenuIcon quantity="3" className="icon" link="/bag" icon="fa-regular fa-bag-shopping"/>   

                <button onClick={toggleMenu} className="d-xl-none menu-icon btn-menu-icon"><i className="fa-regular fa-bars"></i></button>                         
            </div>
        </nav>
  )
}

export default MainMenuSection