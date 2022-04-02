import { Box, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const box = (theme) => ({
    // marginTop: 3,
    // backgroundColor: theme.palette.secondary.main,
    // height: "70vh",
    // padding: 5
})
const paper = (theme) => ({
    padding: 3
})

const VendorContactInfo = () => {
    const [data, setData] = useState([])
    const [country, setCountry] = useState()
    const [uniqueStates, setUniqueStates] = useState([])
    const [selectedState, setSelectedState] = useState()
    const [cities, setCities] = useState([])
    const [selectedCity, setSelectedCity] = useState()


    useEffect(() => {
        axios.get("https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json")
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])

    const contry = [...new Set(data.map((item) => item.country))]
    contry.sort()

    const handleCountry = (e) => {
        console.log(e.target.value)
        let states = data.filter(state => state.country === e.target.value)
        states = [...new Set(states.map(state => state.subcountry))]
        states.sort()
        setUniqueStates(states)
    }

    const handleStates = (e) => {
        let cities = data.filter(city => city.subcountry === e.target.value)
        cities= [...new Set(cities.map(city=>city.name))]
        cities.sort()
        setCities(cities)
    }

 

    return (
        <Box sx={box} >

            <div>
                <label htmlFor="">Country</label>
                <select onChange={(e) => handleCountry(e)} >
                    <option value="">Select Country</option>
                    {contry.map(item => <option key={item} value={country}>{item}</option>)}
                </select>
            </div>

            <div>
                <label htmlFor="">State</label>
                <select onChange={(e) => handleStates(e)} >
                    <option value="">Select State</option>
                    {uniqueStates.map(item => <option key={item} value={selectedState}>{item}</option>)}
                </select>
            </div>

            <div>
                <label htmlFor="">State</label>
                <select onChange={(e) => handleStates(e)} >
                    <option value="">Select City</option>
                    {cities.map(item => <option key={item} value={selectedCity}>{item}</option>)}
                </select>
            </div>


            {/* <Paper sx={paper}>

                <TextField
                    id="filled-multiline-static"
                    label="Address"
                    multiline
                    rows={3}
                    variant="filled"
                />
            </Paper> */}
        </Box>
    )
}

export default VendorContactInfo