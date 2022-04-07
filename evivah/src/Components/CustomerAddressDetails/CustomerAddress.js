import { Box, MenuItem, TextField, Paper } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate,useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'




const paper = (theme) => ({
    height: "100%",
    width: "100%",
    margin: "2rem auto",
    marginTop: "25px",
    padding: "10px 20px"


})

const selectOption = (theme) => ({
    margin: "7px 0",
    borderRadius: "25px"
})


const FormMui = () => {

    const [data, setData] = useState([])
    const [cities, setCities] = useState([])

    const [uniqueState, setUniqueState] = useState("")
    const [city, setCity] = useState("")
    const [postalcode, setPostalcode] = useState("")
    const [address, setAddress] = useState("")

    const navigate = useNavigate()
    const location = useLocation()
   

    const submitHandler=()=>{
        if (uniqueState.length === 0) {
            toast.warning("Please Select State.");
        }
        else if (city.length === 0) {
            toast.warning("Please Select City.");
        }
        else if (postalcode.length !== 6) {
            toast.warning("Postalcode Should be of 6 digits.");
        }
        else if ((address.length === 0)) {
            toast.warning("Address Cannot be Empty.");
        }
        else if ((address.length > 100)) {
            toast.warning("Address cannot be more than 100 characters.");
        }
        else{
            const userId = location.state.userId
            const userUrl = `http://localhost:8080/user/${userId}`
            const userBody = {
                state: uniqueState,
                city: city,
                pincode: postalcode,
                addressLine: address
            }

            axios.put(userUrl, userBody).then((response) => {
                const result = response.data
                if (result['status'] === 'success') {
                    navigate("/")
                }
                else{
                    toast.error("Address Updation Failed")
                }

            })
        }
    }


    useEffect(() => {
        axios.get("https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json")
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])


    let allStateData = data.filter(state => state.country === "India")
    let states = [...new Set(allStateData.map(state => state.subcountry))]
    states.sort()



    const handleState = (e) => {
        setUniqueState(e.target.value)

        let cities = data.filter(city => city.subcountry === e.target.value)
        cities = [...new Set(cities.map(city => city.name))]
        cities.sort()
        setCities(cities)
    }

   



    return (
        <div style={{backgroundColor:"#ffdbe9",height:"100vh"}}>
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Paper sx={paper}>
                            <h2>Enter Your Contact Details</h2>
                            <TextField
                                sx={selectOption}
                                id="filled-select-state"
                                select
                                label="Select State"
                                value={uniqueState}
                                helperText="Please select your State"
                                fullWidth
                                onChange={(e) => handleState(e)}
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
                                sx={selectOption}
                                id="filled-select-city"
                                select
                                label="Select City"
                                helperText="Please select your City"
                                fullWidth
                                onChange={(e) => setCity(e.target.value)}
                                value={city}
                            >
                                {cities.map((city, index) => {
                                    return (
                                        <MenuItem key={index} value={city}>
                                            {city}
                                        </MenuItem>)

                                })}

                            </TextField>

                            <TextField
                                fullWidth type="number"
                                sx={selectOption}
                                id="outlined-basic"
                                label="Postal Code"
                                variant="outlined"
                                onChange={(e) => setPostalcode(e.target.value)}
                                value={postalcode}
                            />

                            <TextField
                                id="address"
                                label="Address"
                                variant="outlined"
                                placeholder="Enter Your Address"
                                fullWidth
                                margin="normal"
                                name="address"
                                rows={2}
                                multiline
                                onChange={(e) => setAddress(e.target.value)}
                                value={address}
                            />
                            <button onClick={submitHandler} type="button" class="btn btn-primary">Submit</button>
                        </Paper>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}

export default FormMui

