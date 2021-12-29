import React, {useState } from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className='navbar'>
            <div className='navbar-wrapper'>
                <div className='navbar-container container'>
                     <div className='navbar-icon'>
                         <span className='navbar-logo'>G</span>
                         Gerald Encabo
                    </div>
                    <div className="navbar-mini-device" onClick={handleClick}>
                      { click ? <FaTimes /> : <FaBars /> }
                    </div>
                    <ul className={ click ? 'navbar-menu active' : 'navbar-menu' }>
                         <li className='navbar-item'>
                            <NavLink to='/' exact={true} onClick={closeMobileMenu} className='navbar-links' activeClassName='current'>About Me</NavLink>
                         </li>
                         <li className='navbar-item'>
                            <NavLink to='/resume' exact={true} onClick={closeMobileMenu} className='navbar-links' activeClassName='current'>Resume</NavLink>
                         </li>
                         <li className='navbar-item'>
                            <NavLink to='/portfolio' exact={true} onClick={closeMobileMenu} className='navbar-links' activeClassName='current'>Portfolio</NavLink>
                         </li>
                         <li className='navbar-item'>
                            <NavLink to='/contact' exact={true} onClick={closeMobileMenu} className='navbar-links' activeClassName='current'>Contact</NavLink>
                         </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
