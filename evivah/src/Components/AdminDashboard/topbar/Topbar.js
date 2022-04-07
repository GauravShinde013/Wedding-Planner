import "./Topbar.css"
import logo from "../../../img/websiteLogo1.png"
import { Link } from "react-router-dom"
const Topbar = () => {



    return (
        <div className="topbar" >
            <div className="topbar-wrapper">
                <div className="top-left" style={{ height: "100%" }}>
                    <Link to="/">
                        <img src={logo} alt="" style={{ height: "100%" }} />
                    </Link>
                </div>
                <div className="top-right">

                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="topAvatar" alt="" />
                </div>

            </div>
        </div>
    )
}

export default Topbar
