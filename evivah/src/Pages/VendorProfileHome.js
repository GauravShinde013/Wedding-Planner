
import { Fab, Grid, IconButton, Tooltip } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServicesComparison from '../Components/ClientDashBoard/ServiceComparison/AllServicesComparison';
import ClientTable from '../Components/ClientDashBoard/ClientTable/ClientTable';

import Home from '../Components/ClientDashBoard/Home/DashboardHome';
import ProfileInfo from '../Components/ClientDashBoard/ProfileInfo/ProfileInfo';
import ServiceSales from '../Components/ClientDashBoard/ServiceSales/ServiceSales';
import SideBar from '../Components/ClientDashBoard/Sidebar/SideBar';
import VendorNav from '../Components/ClientDashBoard/VendorNav/VendorNav';
import VendorProduct from './VendorProduct';
import AddIcon from '@mui/icons-material/Add';



const fab = (theme) => ({
    position: "fixed",
    right: 20,
    bottom: 20

})


const VendorProfile = () => {



    return (

        <BrowserRouter >
            <VendorNav />
            <div
                className='d-flex'
                style={{ backgroundColor: "#E2F0FE" }}
            >
                <Grid container>
                    <Grid item md={2} sm={3} xs={2}>
                        <SideBar />
                    </Grid>
                    <Grid item sm={9} md={10} xs={10}>


                        {/* <ProfileInfo/> */}
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/profile" element={<ProfileInfo />} />
                            {/* <Route path="/profile" element={<ClientTable />} /> */}
                            <Route path="/products" element={<VendorProduct />} />
                            {/* <Route path="/products" element={<ServiceSales />} /> */}
                            <Route path="/orders" element={<ClientTable />} />
                            {/* <Route path="/orders" element={<ServicesComparison />} /> */}

                        </Routes>
                    </Grid>
                </Grid>
            </div>

            <Tooltip title="Add New Service">
                <Fab sx={fab} size="medium" color="secondary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
        </BrowserRouter>


    );
};

export default VendorProfile;


