import { Button, Stepper, Step, StepLabel, Typography, TextField, Paper, useMediaQuery, Container } from '@mui/material'
import { useState } from 'react'
import VendorContactInfo from './VendorContactInfo'
import ContactInfo from './ContactInfo'
import FormMui from './FormMui'
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/system'
import ServiceDetails from './ServiceDetails'
import { Col, Row, Spinner } from 'react-bootstrap'
import MasterServices from '../MasterServices'
import { toast } from 'react-toastify'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const getSteps = () => {
    return [
        "Contact Information",
        "Service Details",
        "Confirmation"
    ]
}



const stepper = (theme) => ({
    padding: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
        padding: "5px",
        flexDirection: "row",
        flexWrap: "wrap",
    }
})
const nextBtn = (theme) => ({
    position: "absolute",
    bottom: "20px",
    right: "20px"

})
const cancelBtn = (theme) => ({
    position: "absolute",
    bottom: "20px",

})
const formCss = {
    marginBottom: "40px",
    height: "100%",
    width: "50%",
    margin: "2rem auto",
    marginTop: "0",
}




const FormStepper = ({ services }) => {

    const location = useLocation()
   

    const [activeStep, setActiveStep] = useState(0)

    const [formData, setFormData] = useState(
        {
            uniqueState: "",
            selectedCity: "",
            postalCode: "",
            Address: "",
            serviceName: "",
            brandName: "",
            specification: "",
            serviceDetails: "",
            price: 0,
        }
    )



    const getStepsContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <FormMui formData={formData} setFormData={setFormData} />
                )
            case 1:
                return (
                    <ServiceDetails services={services} formData={formData} setFormData={setFormData} />
                )
            case 2:
                return (
                    <Paper className="p-2">
                        <h4>Confirm Your Details</h4>
                        <hr />
                        <h5>Contact Information</h5>
                        <div>
                            <h6>
                                State: &nbsp;
                                <span style={{
                                    fontWeight: "400", fontSize: "15px",

                                }} >
                                    {formData.uniqueState}
                                </span>
                            </h6>
                            <h6>
                                City:&nbsp;
                                <span style={{
                                    fontWeight: "400", fontSize: "15px",

                                }} >
                                    {formData.selectedCity}
                                </span>
                            </h6>
                        </div>
                        <h6>
                            Postal Code:&nbsp;
                            <span style={{
                                fontWeight: "400", fontSize: "15px",

                            }} >
                                {formData.postalCode}
                            </span>
                        </h6>
                        <h6>
                            Address Line:&nbsp;
                            <span style={{
                                fontWeight: "400", fontSize: "15px",

                            }} >
                                {formData.Address}
                            </span>

                        </h6>
                        <hr />
                        <h5>Service Details</h5>
                        <h6>

                            Service Name:&nbsp;
                            <span style={{
                                fontWeight: "400", fontSize: "15px",

                            }} >
                                {formData.serviceName}
                            </span>
                        </h6>
                        <h6>

                            Brand Name:&nbsp;
                            <span style={{
                                fontWeight: "400", fontSize: "15px",

                            }} >
                                {formData.brandName}
                            </span>
                        </h6>
                        <h6>
                            Specification:&nbsp;
                            <span style={{
                                fontWeight: "400", fontSize: "15px",

                            }} >

                                {formData.specification}
                            </span>
                        </h6>

                        <h6>
                            Service Details:&nbsp;
                            <span style={{
                                fontWeight: "400", fontSize: "15px",

                            }} >

                                {formData.serviceDetails}
                            </span>


                        </h6>
                        <h6>
                            Service Price:&nbsp;
                            <span style={{
                                fontWeight: "400", fontSize: "15px",

                            }} >

                                &#8377; {formData.price}
                            </span>
                        </h6>

                    </Paper>
                )

            default:
                return "Unknown Step"
        }
    }

    const steps = getSteps()

    const handleNext = () => {
        if (activeStep === 0 && formData.uniqueState.length === 0) {
            toast.warning("Please Select State.");
        }
        else if (activeStep === 0 && formData.selectedCity.length === 0) {
            toast.warning("Please Select City.");
        }
        else if (activeStep === 0 && formData.postalCode.length !== 6) {
            toast.warning("Postalcode Should be of 6 digits.");
        }
        else if (activeStep === 0 && (formData.Address.length === 0)) {
            toast.warning("Address Cannot be Empty.");
        }
        else if (activeStep === 0 && (formData.Address.length > 100)) {
            toast.warning("Address cannot be more than 100 characters.");
        }
        else if (activeStep === 1 && formData.serviceName.length === 0) {
            toast.warning("Please Select Service");
        }
        else if (activeStep === 1 && formData.brandName.length === 0) {
            toast.warning("Brand Name Cannot be Empty.");
        }
        else if (activeStep === 1 && formData.brandName.length > 50) {
            toast.warning("Brand Name Should be less than 50 characters.");
        }
        else if (activeStep === 1 && formData.specification.length === 0) {
            toast.warning("Service Specifications Cannot be Empty.");
        }
        else if (activeStep === 1 && formData.specification.length > 256) {
            toast.warning("Service Specifications cannot be more than 256 characters.");
        }
        else if (activeStep === 1 && formData.serviceDetails.length === 0) {
            toast.warning("Service Details Cannot be Empty.");
        }
        else if (activeStep === 1 && (formData.serviceDetails.length < 256 || formData.serviceDetails.length > 2048)) {
            toast.warning("Service Details should be between 256 and 2048 characters.");
        }
        else if (activeStep === 1 && (formData.price === 0)) {
            toast.warning("Please Enter Your Service Fees.");
        }
        else if (activeStep === 2) {
            const service = services.filter((service) => service.serviceName === formData.serviceName)
            const masterServiceId = service[0].id
            const userId = location.state.userId

            const userBody = {
                state: formData.uniqueState,
                city: formData.selectedCity,
                pincode: formData.postalCode,
                addressLine: formData.Address
            }

            const serviceBody = {
                masterServiceId: masterServiceId,
                userId,
                brandName: formData.brandName,
                specification: formData.specification,
                description: formData.serviceDetails,
                servicePrice: formData.price
            }
            const userUrl = `http://localhost:8080/user/${userId}`
            const serviceUrl = `http://localhost:8080/servicedetail/add/`

            axios.get(userUrl,userBody).then((response) => {
                const result = response.data
                if (result['status'] === 'success'){
                    axios.get(serviceUrl).then((response)=>{
                        if (result['status'] === 'success'){
                            toast.success("Welcome To Evivah Family...")
                        }
                    })
                }
                    
            })

        }
        else {
            setActiveStep(activeStep + 1)
        } 
    }



    const handleBack = () => {
        setActiveStep(activeStep - 1)
    }

    const isActive = useMediaQuery("(max-width:600px)")

    return (
        <Box >

            {
                activeStep === 3 ? (
                    <Typography align="center" variant="h3">
                        Thank You
                    </Typography>
                ) : (
                    <Container>
                        <Stepper
                            orientation={isActive ? "vertical" : "horizontal"}
                            sx={stepper} alternativeLabel activeStep={activeStep}>
                            {
                                steps.map((step, index) => {
                                    return (
                                        <Step
                                            key={index}
                                        >
                                            <StepLabel
                                            >
                                                {step}
                                            </StepLabel>
                                        </Step>
                                    )
                                })
                            }


                        </Stepper>


                        <form style={formCss} >
                            {
                                getStepsContent(activeStep)
                            }
                        </form>


                        <Button
                            variant="outlined"
                            onClick={handleBack}
                            sx={cancelBtn}
                            style={
                                {
                                    display: activeStep === 0 ? "none" : "inline-block"
                                }
                            }
                        >
                            Back
                        </Button>

                        <Button
                            variant="contained"
                            onClick={handleNext}
                            sx={nextBtn}
                        >
                            {activeStep === 2 ? "Submit" : "Next"}
                        </Button>

                    </Container>


                )

            }



        </Box >
    )
}

export default FormStepper


