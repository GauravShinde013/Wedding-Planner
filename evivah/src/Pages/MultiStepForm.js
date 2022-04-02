import { Paper } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import MultiForm from "../Components/MultiForm/FormStepper"
import Navbar from '../Components/Navbar/Navbar'


const stepper = (theme) => ({
    padding: theme.spacing(4),
    marginTop: theme.spacing(3),
    width: "90vw",
    height: "90vh",
    borderRadius: theme.spacing(2)
})

const paper = (theme) => ({
    padding: theme.spacing(4),
    position: "relative"

})

const MultiStepForm = () => {
    const [masterServices, setMasterServices] = useState([])


    const getMasterServices = async () => {
        const url = `http://localhost:8080/masterServices`
        const data = await axios.get(url).then((response) => {
            let result = response.data.data
            setMasterServices(result)
        })
    }

    useEffect(() => {
        getMasterServices()
    }, [])

    
    return (
        <div>
            <Navbar />
            <div>
                <Container sx={stepper}>
                    <Paper sx={paper} elevation={5}  >
                        <MultiForm services={masterServices} />
                    </Paper>

                </Container>
            </div>


        </div>
    )
}

export default MultiStepForm