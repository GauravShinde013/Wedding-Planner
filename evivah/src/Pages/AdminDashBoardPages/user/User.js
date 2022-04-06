
import { CalendarToday, LocationSearching, MailOutlined, PermIdentity, PhoneAndroid, Publish } from "@mui/icons-material"
import { Link } from "react-router-dom"
import "./User.css"
import Topbar from "../../../Components/AdminDashboard/topbar/Topbar";
import Sidebar from "../../../Components/AdminDashboard/Sidebar/Sidebar";

const User = () => {
    return (
        <div>
            <Topbar />
            <div className="admin-container">
                <Sidebar />
                <div className="user" >
                    <div className="user-title-container">
                        <h1 className="user-title">Edit User</h1>
                        <Link to="/newUser">
                            <button className="user-add-btn">Create</button>
                        </Link>
                    </div>
                    <div className="user-container">
                        <div className="user-show">
                            <div className="user-show-top">
                                <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="user-show-img" />
                                <div className="user-show-top-title">
                                    <span className="user-show-userName">
                                        Anna Becker
                                    </span>
                                    <span className="user-show-job">
                                        Software Engineer
                                    </span>
                                </div>
                            </div>
                            <div className="user-show-bottom">
                                <span className="user-show-title">
                                    Account Details
                                </span>
                                <div className="user-show-info">
                                    <PermIdentity className="user-show-icon" />
                                    <span className="user-show-info-title">
                                        annabeck99
                                    </span>
                                </div>
                                <div className="user-show-info">
                                    <CalendarToday className="user-show-icon" />
                                    <span className="user-show-info-title">
                                        10.12-1999
                                    </span>
                                </div>
                                <span className="user-show-title">
                                    Contact Details
                                </span>
                                <div className="user-show-info">
                                    <PhoneAndroid className="user-show-icon" />
                                    <span className="user-show-info-title">
                                        +19299293
                                    </span>
                                </div>
                                <div className="user-show-info">
                                    <MailOutlined className="user-show-icon" />
                                    <span className="user-show-info-title">
                                        ananbeck@gmail.com
                                    </span>
                                </div>
                                <div className="user-show-info">
                                    <LocationSearching className="user-show-icon" />
                                    <span className="user-show-info-title">
                                        quas assumenda quod illum, repellendus adipisci?
                                    </span>
                                </div>

                            </div>
                        </div>
                        <div className="user-update">
                            <span className="user-update-title">
                                Edit
                            </span>
                            <form action="" className="user-update-form">
                                <div className="user-update-left">

                                    <div className="user-update-item">
                                        <label>Username</label>
                                        <input type="text" placeholder="annabeck99"
                                            className="user-update-input" />
                                    </div>

                                    <div className="user-update-item">
                                        <label>Full Name</label>
                                        <input type="text" placeholder="Anna Becker"
                                            className="user-update-input" />
                                    </div>

                                    <div className="user-update-item">
                                        <label>Email</label>
                                        <input type="text" placeholder="ananbeck@gmail.com"
                                            className="user-update-input" />
                                    </div>


                                    <div className="user-update-item">
                                        <label>Phone Number</label>
                                        <input type="text" placeholder="+19299293"
                                            className="user-update-input" />
                                    </div>


                                    <div className="user-update-item">
                                        <label>Address</label>
                                        <input type="text" placeholder="quas assumenda quod illum, repellendus adipisci?"
                                            className="user-update-input" />
                                    </div>


                                </div>
                                <div className="user-update-rigth">
                                    <div className="user-update-upload">
                                        <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="user-update-img" />
                                        <label htmlFor="file">
                                            <Publish className="user-update-icon" />
                                        </label>


                                    </div>
                                    <button className="user-update-btn">
                                        Update
                                    </button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default User
