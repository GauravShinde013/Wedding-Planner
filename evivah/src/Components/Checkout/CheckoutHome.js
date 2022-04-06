import React, { useState } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, CssBaseline, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import PaymentForm from './PaymentForm';
import AddressForm from './weddingForm';



const stepper = (theme) => ({
    padding: theme.spacing(3, 0, 5),
})

const paper = (theme) => ({
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
        width: '100%',
        marginTop: 60,
    },
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
    },
})

const layout = (theme) => ({
    marginTop: '5%',
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
})

const steps = ['Wedding Details', 'Payment details'];

const Checkout = ({ order, error }) => {

    const [user, setUser] = useState(sessionStorage.id)
    const [userFirstName, setUserFirstName] = useState(sessionStorage.firstName)
    const [userLastName, setUserLastName] = useState(sessionStorage.lastName)

    const [activeStep, setActiveStep] = useState(0);
    const [weddingData, setWeddingData] = useState({});
    const [isFinished, setIsFinished] = useState(false);
    const navigate = useNavigate();

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const next = (data) => {
        setWeddingData(data);
        nextStep();
    }


    const timeout = () => {
        setTimeout(() => {
            setIsFinished(true)
        }, 3000);
    }

    let Confirmation = () => isFinished ? (

        <>
            <div>
                <Typography variant='h5'>
                    Thank You for your purchase, {userFirstName} {userLastName}
                </Typography>
            </div>
            <br />
            <Button component={Link} to='/' variant='outlined' type='button'>Back to Home</Button>
        </>
    ) : (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <CircularProgress />
        </div>
    );

    if (error) {
        <>
            <Typography variant='h5'>Error:{error}</Typography>
            <br />
            <Button component={Link} to='/' variant='outlined' type='button'>Back to Home</Button>
        </>
    }

    const Form = () => activeStep === 0
        ? <AddressForm next={next} />
        : <PaymentForm weddingData={weddingData} nextStep={nextStep} backStep={backStep} timeout={timeout} />                                                             //If we are on 1st step render AddressForm otherwise render PaymentForm

    return (
        <>
            <CssBaseline />
            <Box sx={layout}>
                <Paper sx={paper}>
                    <Typography variant='h4' align='center'>Checkout</Typography>
                    <Stepper sx={stepper} activeStep={activeStep} >
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : <Form />}
                </Paper>
            </Box>
        </>
    )
}

export default Checkout
