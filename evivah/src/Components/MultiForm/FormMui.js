import { Box, MenuItem, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'



const paper = (theme) => ({
    height: "100%",
    width: "100%",
    margin: "2rem auto",
    marginTop: "0",


})

const selectOption = (theme) => ({
    margin: "7px 0",
    borderRadius: "25px"
})


const FormMui = ({ formData, setFormData }) => {

    const [data, setData] = useState([])
    const [cities, setCities] = useState([])


    useEffect(() => {
        axios.get("https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json")
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])


    let allStateData = data.filter(state => state.country === "India")
    let states = [...new Set(allStateData.map(state => state.subcountry))]
    states.sort()



    const handleState = (e) => {
        setFormData({ ...formData, uniqueState: e.target.value })

        let cities = data.filter(city => city.subcountry === e.target.value)
        cities = [...new Set(cities.map(city => city.name))]
        cities.sort()
        setCities(cities)
    }




    return (

        <Box sx={paper}>
            <TextField
                sx={selectOption}
                id="filled-select-state"
                select
                label="Select State"
                value={formData.uniqueState}
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
                onChange={(e) => setFormData({ ...formData, selectedCity: e.target.value })}
                value={formData.selectedCity}
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
                onChange={(e)=>setFormData({ ...formData, postalCode: e.target.value })}
                value={formData.postalCode}
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
                helperText="Please select your State"
                onChange={(e) => setFormData({ ...formData, Address: e.target.value })}
                value={formData.Address}
            />


        </Box>

    )
}

export default FormMui

