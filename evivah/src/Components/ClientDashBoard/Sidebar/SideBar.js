import React from 'react';
import { Dropdown, Nav } from 'react-bootstrap';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeOutLinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import TableViewOutlinedIcon from '@mui/icons-material/TableViewOutlined';
import { Link } from 'react-router-dom';
import { Add, Logout, Speed } from '@mui/icons-material';
import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';

const text = (theme) => ({
    [theme.breakpoints.down("sm")]: {
        display: "none"
    }
})

const icon = (theme) => ({

    [theme.breakpoints.down("sm")]: {
       fontSize:"40px"
    }
})
const link = (theme) => ({
    textDecoration: "none",
    color: "#fff",
    padding: "0.5rem 1rem"
})

const sidebar = (theme) => ({
    height: "calc(100vh - 70px)",
    backgroundColor: "#0453F0",
    borderTopRightRadius: "75px",
    color: "#fff",
    padding:"1rem",
    [theme.breakpoints.down("sm")]: {
        padding:0,
        paddingTop:10
    }
})
const navItem = (theme) => ({
    paddingLeft: 2.5,
    margin: "10px 0",
    [theme.breakpoints.down("sm")]: {
        paddingLeft:0.5
    }

})

const SideBar = () => {

    return (

        <Box sx={sidebar} className='d-flex flex-column flex-shrink-0 '>

            <Typography
                sx={text}
                className="my-2 p-1"
            >
                Dashboard
            </Typography>

            <Box sx={navItem}>
                <Link className='d-flex align-items-center menu text-decoration-none text-white' to="/" style={{ padding: "0.5rem 1rem" }}>
                    <Speed sx={icon} className="me-3" />
                    <Typography sx={text} variant='h6'>
                        Home
                    </Typography>
                </Link>
            </Box>

            <hr className="my-2 border border-top" style={{ borderColor: "rgb(97,97,97)!important" }} />

            <Box className="mb-auto">
                <Typography
                    sx={text}
                    className="my-2 p-1"
                >
                    Utilities
                </Typography>

                <Box sx={navItem}>
                    <Link className='d-flex align-items-center menu text-decoration-none text-white' to="/profile" style={{ padding: "0.5rem 1rem" }}>
                        <AccountCircleOutlinedIcon className="me-3" />
                        <Typography sx={text} variant='body-1'>
                            Profile
                        </Typography>
                    </Link>
                </Box>

                <Box sx={navItem}>
                    <Link className='d-flex align-items-center menu text-decoration-none text-white' to="/products" style={{ padding: "0.5rem 1rem" }}>
                        <GridViewOutlinedIcon className="me-3" />
                        <Typography sx={text} variant='body-1'>
                            Products
                        </Typography>
                    </Link>
                </Box>

                <Box sx={navItem}>
                    <Link className='d-flex align-items-center menu text-decoration-none text-white' to="/orders" style={{ padding: "0.5rem 1rem" }}>
                        <TableViewOutlinedIcon className="me-3" />
                        <Typography sx={text} variant='body-1'>
                            Orders
                        </Typography>
                    </Link>
                </Box>

            </Box>


            <Box mt={3} p={1} className="d-flex align-items-center justify-content-center" sx={{ background: "#2860F3" }}>
                <Typography sx={text} mr={1} variant="h6" >
                    Logout
                </Typography>
                <Logout />
            </Box>
            <hr />

        </Box >

    );
};

export default SideBar;



{/* <Nav sx={{ display: "none" }} className="flex-column mb-auto" >

                <Nav.Item style={textColor}>
                    <Link sx={link} style={{ color: "#fff" }} id="home" to="/" className='nav-link d-flex align-items-center text-decoration-none menu'>
                        <Speed sx={icon} className="me-3" />
                        <Typography sx={text} variant='h6'>
                            Home
                        </Typography>
                    </Link>
                </Nav.Item>
                <hr className="my-2 border border-top" style={{ borderColor: "rgb(97,97,97)!important" }} />

                <Typography sx={text} className="my-2" style={{ color: "#fff", padding: "6px" }}>Utilities</Typography>

                <Nav.Item style={textColor}>
                    <Link sx={link}
                        id="home" style={textColor} to="/profile" className='nav-link d-flex align-items-center menu'>
                        <AccountCircleOutlinedIcon className="me-3" />
                        <Typography sx={text} variant='body-1'>
                            Profile
                        </Typography>
                    </Link>

                </Nav.Item>


                <Nav.Item style={textColor}>

                    <Link sx={link}
                        id="product" style={textColor} to="/products" className='nav-link d-flex align-items-center menu text-decoration-none'>
                        <GridViewOutlinedIcon className="me-3" />
                        <Typography sx={text} variant='body-1'>
                            Products
                        </Typography>
                    </Link>

                </Nav.Item>

                <Nav.Item style={textColor}>
                    <Link sx={link}
                        id="orders" style={textColor} to="/orders" className='nav-link d-flex align-items-center menu text-decoration-none'>
                        <TableViewOutlinedIcon className="me-3" />
                        <Typography sx={text} variant='body-1'>
                            Orders
                        </Typography>

                    </Link>
                </Nav.Item>


            </Nav> */}