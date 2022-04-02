import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Col, Container, Row } from 'react-bootstrap';
import { ApprovalOutlined, Cancel, CancelOutlined, LocationCity, LocationSearching, MailOutlined, Pending, PermIdentity, PhoneAndroid, Publish, PushPinOutlined } from '@mui/icons-material';
import Verified from '@mui/icons-material/Verified';
import { MenuItem, TextField } from '@mui/material';
import ClientTable from '../ClientTable/ClientTable';
import ShowProfile from '../ShowProfile/ShowProfile';

const ProfileInfo = () => {
    const [city, setCity] = useState('Mumbai');

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const updateProfile = {
        boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
        flex: 2,
        marginLeft: "20px",
        padding: '20px',
        background: "rgb(255,255,255)",
        borderRadius: "12px",
        border: " 1px solid rgb(45, 129, 198)"
    }

    const cities = [
        {
            value: 'sat',
            label: "Satara"
        },
        {
            value: 'pun',
            label: "Pune"
        },
        {
            value: 'mum',
            label: "Mumbai"
        },
        {
            value: 'nsk',
            label: "Nashik"
        }
    ]

    const profile =
    {
        "First Name": "Pratik",
        "Last Name": "Suryawanshi",
        mobile: 7894561236,
        email: "pratik@gmail.com",
        city: "Dahiwadi",
        state: "Maharashtra",
        postal: 415508,
        address: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, voluptate!"
    }




    return (
        <Container className="body-back">

            <div className='d-flex mt-4'>
                <Row>

                    <Col>
                        <ShowProfile profile={profile} />
                    </Col>
                    <Col>
                        <div className='card-shadow-1' style={updateProfile}>
                            <span className="fs-4 fw-light">Edit</span>
                            <div className="d-flex justify-content-between ">
                                <div>
                                    <Box className="d-flex justify-content-between flex-column"
                                        component="form"
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '20ch', fontSize: '14   px' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            id="standard-number"
                                            label="Mobile Number"
                                            type="number"
                                            variant="standard"
                                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                        />
                                        <TextField
                                            id="standard-number"
                                            label="Email Address"
                                            type="email"
                                            variant="standard"
                                        />

                                        <TextField
                                            id="outlined-select-city"
                                            select
                                            label="Select"
                                            value={city}
                                            onChange={handleChange}
                                            helperText="Please select your City"
                                        >
                                            {cities.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>

                                        <TextField
                                            id="outlined-select-state"
                                            select
                                            label="Select"
                                            value={city}
                                            onChange={handleChange}
                                            helperText="Please select your State"
                                        >
                                            {cities.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>

                                        <TextField
                                            id="standard-multiline-static"
                                            label="Address"
                                            multiline
                                            rows={2}
                                            type="email"
                                            variant="standard"
                                        />
                                    </Box>
                                </div>

                                <div className='d-flex flex-column justify-content-between'>
                                    <div className="d-flex align-items-center">
                                        <img style={{ borderRadius: "10px" }} width="100px" height="100px" src="	https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" alt="" className="me-2"
                                        />

                                        <label role="button" htmlFor="file">
                                            <Publish />
                                            <input type="file" id="file" style={{ display: "none" }} />
                                        </label>

                                    </div>
                                    <button style={{ background: "rgb(0, 0, 111)" }} className="rounded border border-0 p-2 text-white fw-bold">Update</button>
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>

            </div>





        </Container>
    );
};

export default ProfileInfo;
