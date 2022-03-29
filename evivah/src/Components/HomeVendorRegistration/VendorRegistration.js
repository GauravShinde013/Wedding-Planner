import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Testimonials = () => {
    return (
        <div className='testimonial'>
            <div className='container'>
                <div className='outline'>
                    <div className='content'>
                        <i>If you’re a Wedding Vendor/Planner</i>
                        <p className='body'>
                            REGISTER & BOOST YOUR BUSINESS 🚀
                        </p>

                        <button style={{ width: "15%" }} type="button" className="btn btn-danger">
                            <Link to="/user-roles" style={{color:"#fff"}}>
                                Register Now
                            </Link>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
