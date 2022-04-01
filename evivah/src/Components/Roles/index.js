import { Paper, Tooltip } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./style.css"


const cardBackground = (theme) => ({
    backgroundColor: "rgba(236, 220, 231, 0.925)",
    width: 200,
    padding: "10px 30px",
    border: "1px solid #c8b8d8",
    transition: "box-shadow .1s ease-in-out,top .1s ease-in-out,background .2s ease-in-out,-webkit-box-shadow .1s ease-in-out",
    cursor: "pointer",
    "&:hover": {
        transform: "scale3d(1.05, 1.05, 1)",
        backgroundColor: "#fff",
        boxShadow: "0 8px 12px rgb(0 0 0 / 30%)"
    }

})

const tooltip={
    fontSize: "20px!important"
}


const imgStyle = {
    width: "140px",
    height: "300px",
    margin: "20px auto",
    backgroundSize: "contains",
    objectFit: "cover"
}

const RolesCard = ({ title, src, msg }) => {

    const navigate = useNavigate();
    const rolesHandler = (role) => {
        if(role==="Vendor"){
            navigate("/master-services")
        }
        else{
            navigate("/planners")
        }
    }

    return (
        <div className="pb-3">
            <Tooltip  arrow style={tooltip} title={msg} placement="top">
                <Paper sx={cardBackground} elevation={3} onClick={() => rolesHandler(title)}>
                    <img style={imgStyle} src={src} alt="" />
                    <h4 style={{ color: "#639" }} className="text-center">{title}</h4>
                </Paper>
            </Tooltip>
        </div>
    )
}

export default RolesCard