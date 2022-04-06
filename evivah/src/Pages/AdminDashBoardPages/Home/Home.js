import "./Home.css"
import { userData } from "../../../dummyData";
import WidgetSm from "../../../Components/AdminDashboard/WidgetSml/WidgetSm";
import WidgetLg from "../../../Components/AdminDashboard/WidgetLg/WidgetLg";
import Chart from "../../../Components/AdminDashboard/Chart/Chart";
import FeaturedInfo from "../../../Components/AdminDashboard/featuredInfo/FeaturedInfo";
import Topbar from "../../../Components/AdminDashboard/topbar/Topbar";
import Sidebar from "../../../Components/AdminDashboard/Sidebar/Sidebar";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

{/* <FeaturedInfo title="Revanues" featuredmoney="$12334" featuredmoneyrate="" ></FeaturedInfo> */ }
const Home = () => {
    const [latestMembers, setLatestMembers] = useState([])
    const [latestBookings, setLatestBookings] = useState([])
    const [loading,setLoading]=useState(false)



    const fetchData = useCallback(async () => {
        const url = `http://localhost:8080/admin/recent/members`
        axios.get(url).then((response) => {
            let result = response.data
            setLatestMembers(result.data)
        })
    }, [])
    const fetchRecentBooking = useCallback(async () => {
        const url = `http://localhost:8080/admin/recent/bookings`
        axios.get(url).then((response) => {
            let result = response.data
            setLatestBookings(result.data)
        })
    }, [])
    
    useEffect(() => {
        fetchData()
        fetchRecentBooking()
        setLoading(true)
    }, [fetchData,fetchRecentBooking])



    return (
        <div>
            <Topbar />
            <div className="admin-container">
                <Sidebar />
                {loading?<div className="admin-home" >
                    <FeaturedInfo></FeaturedInfo>
                    <Chart data={userData} title="User Analytics" grid dataKey="Active User" ></Chart>
                    <div className="admin-home-widget">
                        <WidgetSm latestMembers={latestMembers} />
                        <WidgetLg latestBookings={latestBookings}/>
                    </div>
                </div>:"Loading"
                }
            </div>
        </div>
    )
}

export default Home
