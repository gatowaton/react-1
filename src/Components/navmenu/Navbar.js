import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import catblack from "../../img/catblack.png"

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/'onClick={closeMobileMenu}>
          <div className='navbar-logo'>
          <p>Gato Web Developer</p>
          <img src={catblack} alt="" />
          </div>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            <i className="fas fa-home"/>
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div 
              to='/Ecommerce'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <Link to='/products'>
              <i class="fas fa-shopping-bag"></i> <i className='fas fa-caret-down' />
              </Link>
            </div>
            {dropdown && <Dropdown />}
          </li>
          
          <li className='nav-item'>
            <Link
              to='/contact'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <i className='fas fa-paper-plane'></i>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
