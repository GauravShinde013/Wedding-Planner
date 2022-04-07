import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from "@mui/icons-material"
import "./Sidebar.css"
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="admin-sidebar" >
            <div className="admin-sidebar-wrapper">
                <div className="admin-sidebar-menu">
                    <h3 className="admin-sidebar-title">
                        Dashboard
                    </h3>
                    <ul className="admin-sidebar-list">
                        <Link to="/admin-dashboard" className="link" >
                            <li className="admin-sidebar-list-item active" >
                                <LineStyle className="admin-sidebar-icons" /> Home
                            </li>
                        </Link>

                    </ul>
                </div>

                <div className="admin-sidebar-menu">
                    <h3 className="admin-sidebar-title">
                        Quick Menu
                    </h3>
                    <ul className="admin-sidebar-list">
                        <Link className="admin-link" to="/admin-dashboard/users-list">
                            <li className="admin-sidebar-list-item">
                                <PermIdentity /> Users
                            </li>
                        </Link>
                        <Link className="admin-link" to="/admin-dashboard/vendors-list">
                            <li className="admin-sidebar-list-item">
                                <Storefront /> Vendors
                            </li>
                        </Link>
                        <Link className="admin-link" to="/admin-dashboard/categories-list">
                            <li className="admin-sidebar-list-item">
                                <WorkOutline /> Categories
                            </li>
                        </Link>
                        
                        <Link className="admin-link" to="/admin-dashboard/booking-list">
                            <li className="admin-sidebar-list-item">
                            <AttachMoney /> Bookings
                            </li>
                        </Link>
                    </ul>
                </div>


            </div>
        </div>
    )
}

export default Sidebar



