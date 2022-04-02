import { AttachMoney, PersonOutline, ProductionQuantityLimitsOutlined } from '@mui/icons-material';
import { Grid } from '@mui/material';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CardInfo from '../CardInfo/CardInfo';
import NewOrders from '../NewOrders/NewOrders';
import OrdersStats from '../OrderStats/OrdersStats';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';



const DashBoardHome = () => {
    const cardInfo = [
        {
            title: "Services",
            count: 23,
            logo: <RocketLaunchIcon sx={{ fontSize: 45, color: "#350fef" }} />,
            boxColor:"#FB9251",
            backgroundColor: "#FDF2EC"

        },
        {
            title: "Orders",
            count: 43,
            logo: <ProductionQuantityLimitsOutlined  sx={{ fontSize: 45,color:"#fff" }} />,
            boxColor:"#2979f4",
            backgroundColor: "#EEF2FE"
        },
        {
            title: "Sales",
            count: <div><CurrencyRupeeIcon/>220K</div>,
            logo: <AttachMoney  sx={{ fontSize:45, color:"#fff"  }} />,
            boxColor:"#00a2f1",
            backgroundColor: "#EFF8FF"
        }

    ]


    // style={{ backgroundColor: "#e3f2fd" }}
    return (
        <Container className="boddy-back" >
            <div>
                <CardInfo cardInfo={cardInfo} />
            </div>
            {/* <NewOrders/> */}
        </Container>
    );
};

export default DashBoardHome;
