import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../img/assets/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import './NavbarStyles.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    //FIXME: Navbar responsivnes
    //FIXME:Blog Vendor Buttons Disappeared

    return (
        <header>
            <nav className='navbar'>
                <div className='logo'>
                    <Link to='/'><img src={Logo} alt='' /></Link>
                </div>
                <ul className={click ? "nav-menu active" : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='navbar-link'>Vendors</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/blogs' className='navbar-link'>Blogs</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="/login" className='navbar-link'>
                    Log In </Link>
                    </li>

                    <li className='nav-item'>
                    <Link to="/user-roles" className='navbar-link'>
                    Sign up</Link>
                    </li>
                </ul>
                {/* sidebar */}
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{ color: '#ffffff' }} />) : (<FaBars size={20} style={{ color: '#ffffff' }} />)}

                </div>
            </nav>
        </header>
    )
}

export default Navbar
