import { MenuItem, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const updateProfile = {
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    flex: 2,
    marginLeft: "20px",
    padding: '20px',
    background: "rgb(255,255,255)",
    borderRadius: "12px",
    border: " 1px solid rgb(45, 129, 198)",
    minWidth: "500px",
    width: "90%",
    minHeight: "500px"
}



export const EditProfile = ({profile}) => {
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [address, setAddress] = useState("");
    
    
    const [data, setData] = useState([])
    const [cities, setCities] = useState([])

    useEffect(()=>{
        setMobile(profile.mobile)
        setEmail(profile.email)
        setCity(profile.city)
        setSelectedState(profile.state)
        setAddress(profile.addressLine)
    },[])

    useEffect(() => {
        axios.get("https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json")
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])

 

    let allStateData = data.filter(state => state.country === "India")
    let states = [...new Set(allStateData.map(state => state.subcountry))]
    states.sort()



    const handleState = (e) => {
        setSelectedState(e.target.value)

        let cities = data.filter(city => city.subcountry === e.target.value)
        cities = [...new Set(cities.map(city => city.name))]
        cities.sort()
        setCities(cities)
    }

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const EditHandler=()=>{

    }


    return (
        <div>
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
                                value={mobile}
                                type="number"   
                                variant="standard"
                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                onChange={(e) => setMobile(e.target.value)}
                            />
                            <TextField
                                id="standard-number"
                                label="Email Address"
                                type="email"
                                variant="standard"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />

                            <TextField
                                id="outlined-select-city"
                                select
                                label="Select"
                                value={selectedState}
                                onChange={handleState}
                                helperText="Please select your State"
                            >
                                {
                                    states.map((state, index) => {
                                        return (
                                            <MenuItem key={index} value={state}>
                                                {state}
                                            </MenuItem>
                                        )
                                    })}
                            </TextField>

                            <TextField
                                id="outlined-select-state"
                                select
                                label="Select"
                                value={city}
                                onChange={handleChange}
                                helperText="Please select your City"
                            >
                                {cities.map((city, index) => {
                                    return (
                                        <MenuItem key={index} value={city}>
                                            {city}
                                        </MenuItem>)

                                })}
                            </TextField>

                            <TextField
                                id="standard-multiline-static"
                                label="Address"
                                multiline
                                rows={2}
                                type="text"
                                variant="standard"
                                onChange={(e) => setAddress(e.target.value)}
                                value={address}
                            />
                        </Box>
                    </div>

                    <div className='d-flex flex-column justify-content-end'>

                        <button onClick={EditHandler} style={{ background: "rgb(0, 0, 111)" }} className="rounded border border-0 p-2 text-white fw-bold">Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
