import { Box, Button, Paper, TextField } from '@mui/material'
import React from 'react'


const box = (theme) => ({
    marginTop: 1,
    height: "70vh",
    padding: 5
})
const paper = (theme) => ({
    width: "80%",
    margin: "0 auto",
    padding: 5,
    backgroundColor:"#e7e7e7",
    borderRadius:"15px",
   
})
const text= (theme) => ({
    width:"90%",
    color:"#fff"
})

const ContactInfo = () => {
    return (
        <Box sx={box}>

            <Paper sx={paper}>

                <TextField
                    id="email"
                    label="E-mail"
                    variant="outlined"
                    placeholder="Enter Your E-mail Address"
                    sx={text}
                    margin="normal"
                    name="emailAddress"
                />
                <TextField
                    id="phone-number"
                    label="Phone Number"
                    variant="outlined"
                    placeholder="Enter Your Phone Number"
                    fullWidth
                    margin="normal"
                    name="phoneNumber"
                />
                <TextField
                    id="alternate-phone"
                    label="Alternate Phone"
                    variant="outlined"
                    placeholder="Enter Your Alternate Phone"
                    fullWidth
                    margin="normal"
                    name="alternatePhone"
                />

                <Button>Back</Button>
                <Button>Next</Button>
            </Paper>

        </Box>
    )
}

export default ContactInfo