
import { ArrowDownward, ArrowUpward } from "@mui/icons-material"
import "./FeaturedInfo.css"
import axios from "axios"
import { useEffect, useState } from "react"

const FeaturedInfo = () => {
    const [homeStats,setHomeStats]=useState({})

    const getStats=()=>{
        const url = `http://localhost:8080/admin/home/getStats`
        axios.get(url).then((response) => {
            let result = response.data
            setHomeStats(result.data)
        })
    }

    useEffect(()=>{
        getStats()
    },[])


    return (
        <div className='admin-featured' >
            <div className="admin-featured-item">
                <span className="admin-featured-title">
                    Vendors
                </span>
                <div className="admin-featured-money-container">
                    <span className="admin-featured-money">
                    {homeStats.vendorCount}
                    </span>
                    
                </div>
                
            </div>

            <div className="admin-featured-item">
                <span className="admin-featured-title">
                    Planners
                </span>
                <div className="admin-featured-money-container">
                    <span className="admin-featured-money">
                    {homeStats.plannerCount}
                    </span>
                   
                </div>
                
            </div>

            <div className="admin-featured-item">
                <span className="admin-featured-title">
                    Bookings
                </span>
                <div className="admin-featured-money-container">
                    <span className="admin-featured-money">
                    &#8377;{(homeStats.bookingSales/1000000).toFixed(1)} mln
                    </span>
                    <span className="admin-featured-money-rate">
                        ({homeStats.bookingCount})
                    </span>
                </div>
               
            </div>
        </div>
    )
}

export default FeaturedInfo
