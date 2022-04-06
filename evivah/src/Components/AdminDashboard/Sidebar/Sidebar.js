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
                        <li className="admin-sidebar-list-item">
                            <Timeline className="admin-sidebar-icons" /> Analytics
                        </li>
                        <li className="admin-sidebar-list-item">
                            <TrendingUp className="admin-sidebar-icons" /> Sales
                        </li>
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
                                <Storefront /> Products
                            </li>
                        </Link>
                        <li className="admin-sidebar-list-item">
                            <AttachMoney /> Transactions
                        </li>
                        <li className="admin-sidebar-list-item">
                            <BarChart /> Reports
                        </li>
                    </ul>
                </div>

                <div className="admin-sidebar-menu">
                    <h3 className="admin-sidebar-title">
                        Notifications
                    </h3>
                    <ul className="admin-sidebar-list">
                        <li className="admin-sidebar-list-item">
                            <MailOutline /> Mail
                        </li>
                        <li className="admin-sidebar-list-item">
                            <DynamicFeed /> Feedback
                        </li>
                        <li className="admin-sidebar-list-item">
                            <ChatBubbleOutline /> Messages
                        </li>
                    </ul>
                </div>

                <div className="admin-sidebar-menu">
                    <h3 className="admin-sidebar-title">
                        Staff
                    </h3>
                    <ul className="admin-sidebar-list">
                        <li className="admin-sidebar-list-item">
                            <WorkOutline /> Manage
                        </li>
                        <li className="admin-sidebar-list-item">
                            <Timeline /> Analytics
                        </li>
                        <li className="admin-sidebar-list-item">
                            <Report /> Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar



