import Paper from '@mui/material/Paper'
import React from 'react'
import  {Col,Row,Container}  from 'react-bootstrap'
import plannerLogo from "../img/planner.svg"
import clientLogo from "../img/client.jpg"
import vendorLogo from "../img/1 (1).png"
import { useNavigate } from 'react-router-dom'



const cardBackground = (theme) => ({
    backgroundColor: "rgba(236, 220, 231, 0.925)",
    width: 200,
    padding: "10px 30px",
    border: "1px solid #c8b8d8",
    transition: "box-shadow .1s ease-in-out,top .1s ease-in-out,background .2s ease-in-out,-webkit-box-shadow .1s ease-in-out",
    cursor:"pointer",
    "&:hover": {
        transform: "scale3d(1.05, 1.05, 1)",
        backgroundColor: "#fff",
        boxShadow: "0 8px 12px rgb(0 0 0 / 30%)"
    }

})


const imgStyle = {
    width: "140px",
    minHeight: "300px",
    margin: "20px auto",
    backgroundSize: "contains",
    objectFit:"cover"
}

const UserRoles = () => {

    const navigate=useNavigate();

    const rolesHandler=(role)=>{
        console.log(role);
        navigate("/signup",{state:{Role:role}})
    }

    return (
        <div style={{ height: "100vh", paddingTop: "80px", backgroundImage: "linear-gradient(45deg,#f7f2eb,#dfdae8)", }}>
            <Container>
                <h3 style={{ marginBottom: "75px",fontSize:"35px" }} className="text-center">Who Are You ?</h3>
                <Row >

                    <Col md lg="2" sm={1}></Col>
                    <Col sm md lg="3" >
                        <Paper sx={cardBackground} elevation={3} onClick={()=>rolesHandler("Planner")}>
                            <img style={imgStyle} src={plannerLogo} alt="" />
                            <h4 style={{ color: "#639" }} className="text-center">Planner</h4>
                        </Paper>
                    </Col>

                    <Col sm md lg="3">
                        <Paper sx={cardBackground} elevation={3} onClick={()=>rolesHandler("Customer")}>
                            <img style={imgStyle} src={clientLogo} alt="" />
                            <h4 style={{ color: "#639" }} className="text-center">
                                Bride/Groom
                            </h4>
                        </Paper>
                    </Col>

                    <Col sm md lg="3">
                        <Paper sx={cardBackground} elevation={3} onClick={()=>rolesHandler("Vendor")}>
                            <img style={imgStyle} src={vendorLogo} alt="" />
                            <h4 style={{ color: "#639" }} className="text-center">Vendor</h4>
                        </Paper>
                    </Col>

                    

                    <Col md lg="1" sm={1}></Col>
                </Row>

            </Container>
        </div>

    )
}

export default UserRoles