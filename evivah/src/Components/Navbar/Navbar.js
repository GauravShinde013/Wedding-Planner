import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import websiteLogo from '../../img/websiteLogo1.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import './NavbarStyles.css'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useNavigate } from 'react-router-dom'
import { ShoppingCart } from '@mui/icons-material'
import { Badge } from '@mui/material'
import { IconButton } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import { emptyCart } from "../../actions/index";

const dropdownStyle = (theme) => ({
    fontSize: "20px",
    fontWeight: "400",
    textTransform: "capitalize",
    color: "#000",
    fontFamily: "inherit",
    "&:hover": {
        backgroundColor: "#fff!important",
        border: "none!important",
    }
})

const Navbar = () => {


    const loginStatus = sessionStorage['loginStatus']
    const userRole = sessionStorage['role']
    const [user, setUser] = useState(loginStatus)

    const cartData=useSelector(state => state.cart)
    const [count,setCount]=useState()

    const dispatch=useDispatch()

    useEffect(()=>{
        setCount(cartData.total)
    },[cartData])

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const navigate = useNavigate();

    const handleDropDownClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logoutHandler = () => {
        // remove the logged users details from session storage
        sessionStorage.removeItem('id')
        sessionStorage.removeItem('firstName')
        sessionStorage.removeItem('lastName')
        sessionStorage.removeItem('loginStatus')
        sessionStorage.removeItem('email')
        sessionStorage.removeItem('role')

        dispatch(emptyCart())

        // navigate to sign in component
        navigate('/login')
    }


    //FIXME: Navbar responsivnes

    return (
        <header>
            <nav className='navbar'>
                <div className='logo'>
                    <Link to='/'><img src={websiteLogo} alt='' /></Link>
                </div>

                <ul className={click ? "nav-menu active" : 'nav-menu'}>
                   { userRole!=="Vendor"&&<li className='nav-item'>
                        <Link to='/vendor-options' className='navbar-link'>Vendors</Link>
                    </li>}
                    <li className='nav-item'>
                        <Link to='/blogs' className='navbar-link'>Blogs</Link>
                    </li>
                    {
                        !user && <li className='nav-item'>
                            <Link to="/login" className='navbar-link'>
                                Log In
                            </Link>
                        </li>
                    }
                    {
                        !user && <li className='nav-item'>
                            <Link to="/user-roles" className='navbar-link'>
                                Sign up</Link>
                        </li>
                    }



                    {user && <li className='nav-item'>
                        <Button
                            id="fade-button"
                            aria-controls={open ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleDropDownClick}
                            sx={dropdownStyle}
                        >
                            My Wedding
                        </Button>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                            <MenuItem onClick={handleClose}>
                                <Link to={userRole === "Vendor" ? "/vendor-dashboard" : "/customer-dashboard"}>Dashboard</Link>
                            </MenuItem>

                            {
                                userRole !== "Vendor" && <MenuItem onClick={handleClose}>
                                    <Link to="/create-blog">Create Blog</Link>
                                </MenuItem>
                            }
                            <MenuItem onClick={logoutHandler} >Logout</MenuItem>
                        </Menu>
                    </li>
                    }
                    {
                        user && userRole!=="Vendor"&&
                        <IconButton component={Link} to='/booking-cart' aria-label='Show cart items' color='inherit'>
                            <div style={{ cursor: "pointer" }}>
                                <Badge badgeContent={count} color="info">
                                    <ShoppingCart />
                                </Badge>
                            </div>
                        </IconButton>
                    }
                </ul>


                {/* sidebar */}
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{ color: '#000' }} />) : (<FaBars size={20} style={{ color: '#000' }} />)}

                </div>
            </nav>
        </header>
    )
}

export default Navbar
