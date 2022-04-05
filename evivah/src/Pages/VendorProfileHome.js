import AddIcon from '@mui/icons-material/Add';
import { Grid } from '@mui/material';
import { Fab, Tooltip } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Home from '../Components/ClientDashBoard/Home/DashboardHome';
import SideBar from '../Components/ClientDashBoard/Sidebar/SideBar';
import Navbar from '../Components/Navbar/Navbar';




const fab = (theme) => ({
    position: "fixed",
    right: 20,
    bottom: 20

})


const VendorProfile = () => {
    
    const [homeData,setHomeData]=useState([])

    const getMasterServices = () => {
        const userId = sessionStorage.id
        const url = `http://localhost:8080/orders/vendor/user/${userId}`
        axios.get(url).then((response) => {
            let result = response.data
            setHomeData(result.data)
        })
    }

    useEffect(() => {
        getMasterServices()
    }, [])
    console.log("🚀 ~ file: VendorProfileHome.js ~ line 24 ~ VendorProfile ~ homeData", homeData)

   

    return (

        <div>
            <Navbar/>
            <div
                className='d-flex'
                style={{ backgroundColor: "#E2F0FE" }}
            >
                <Grid container style={{width:"100%"}}>
                    <Grid item md={2} sm={3} xs={2}>
                        <SideBar />
                    </Grid>
                    <Grid item sm={9} md={10} xs={10}>
                        <Home homeData={homeData} />

                    </Grid>
                </Grid>
            </div>

            <Tooltip title="Add New Service">
                <Fab sx={fab} size="medium" color="secondary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>

        </div>

    );
};

export default VendorProfile;

