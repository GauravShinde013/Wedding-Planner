import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import React from 'react';
import { Dropdown, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';

const VendorNav = () => {

    const Welcome = () => {
        const userName = "Pratik";
        const hr = new Date().getHours();

        if (hr >= 5 && hr <= 12) {
            return (<div>
                <span className='fw-bold'>Good Morning, </span>{userName}
            </div>)
        }
        else if (hr > 12 && hr <= 18) {
            return (<div>
                <span className='fw-bold'>Good Afternoon, </span>{userName}
            </div>)
        }
        else {
            return "Good Evening, " + userName
        }

    }

    return (
        <Navbar style={{backgroundColor:"#E2F0FE"}} className="px-4 pt-2 pb-1" expand="lg">
            <Navbar.Brand className="fs-5 fw-bold-normal text-primary bold" >
                <span>
                    <Link className="text-decoration-none" to="/">
                        <img width="30" height="30" className="me-2 rounded-circle"
                            src="https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" alt="Website Logo" />
                        <span className="text-dark fw-bold">
                            eVivah
                        </span>
                    </Link>
                </span>
                
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <Nav className="ms-auto align-items-center">

                    <Nav.Item  >
                        <Dropdown>
                            <Dropdown.Toggle style={{ display: "none" }} border="none" className="d-flex text-white align-items-center " variant="none" id="dropdown-basic" >
                                <Link to="/" style={{ height: "45px", backgroundColor: "#90caf9", borderColor: "#90caf9" }} className="profile d-block d-flex align-items-center justify-content-center rounded-pill" >
                                    <div className="ps-2">
                                        <img
                                            src="https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM"
                                            width="35"
                                            height="35"
                                            className="d-inline-block align-top rounded-circle"
                                            alt="Vendor Profile"
                                        />
                                    </div>
                                    <span style={{ padding: "12px" }}>
                                        <SettingsOutlinedIcon className="profile" style={{ color: "#616161" }} />
                                    </span>
                                </Link>
                                <Dropdown.Menu style={{ marginLeft: "-100px" }} className="rounded">
                                    <Dropdown.Item>
                                        <Welcome />
                                    </Dropdown.Item>
                                    <Dropdown.Divider></Dropdown.Divider>
                                    <Link>
                                    <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                                    </Link>
                                    <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
                                </Dropdown.Menu>

                            </Dropdown.Toggle>
                        </Dropdown>
                    </Nav.Item>

                </Nav>


            </Navbar.Collapse>
        </Navbar>
    );
};


export default VendorNav;