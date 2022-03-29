import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './style.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='col solutions'>
                    <h6>Home</h6>
                    <ul>
                        <li><Link to='/' className='link'>About EVivah</Link></li>
                        <li><Link to='/'className='link'>Vendors</Link></li>
                        <li><Link to='/'className='link'>Blogs</Link></li>
                        <li><Link to='/'className='link'>Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className='col legal'>
                    <h6>Start Planning with Top Rated Vendors</h6>
                    <ul>
                        <li><Link to='/'className='link'>Planners</Link></li>
                        <li><Link to='/'className='link'>Photographers</Link></li>
                        <li><Link to='/'className='link'>Makeup Artist</Link></li>
                        <li><Link to='/'className='link'>Trasporatation</Link></li>
                        <li><Link to='/'className='link'>Venue</Link></li>
                        <li><Link to='/'className='link'>Music</Link></li>
                        <li><Link to='/'className='link'>Decorators</Link></li>
                        <li><Link to='/'className='link'>Mehandi Artist</Link></li>
                        <li><Link to='/'className='link'>Pandit</Link></li>
                        <li><Link to='/'className='link'>Invitation</Link></li>
                        <li><Link to='/'className='link'>Apparel</Link></li>
                    </ul>
                </div>
                <div className='col legal'>
                    <h6>Wedding</h6>
                    <ul>
                        <li><Link to='/'className='link'>Wedding Blogs</Link></li>
                        <li><Link to='/'className='link'>Add Blog</Link></li>
                        <li><Link to='/'className='link'>Wedding Gallery</Link></li>

                    </ul>
                </div>
                <div></div>
                <div className='col-subscribe'>
                    <h6>Subscribe to our newsletter</h6>
                    <p>The latest news, articles, and resources sent to your inbox weekly.</p>
                    <div className='subscribe'>
                        <input type='email' placeholder='Enter your email' />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='content'>
                    <div className='rights'>
                        <p style={{color:"#fff"}} >&copy; Evivah, Inc. All rights reserved.</p>
                    </div>
                    <div>
                        <FaFacebook size={20} style={{color: '#d3d3d3', marginRight: '10px'}} />
                        <FaInstagram size={20} style={{color: '#d3d3d3', marginRight: '10px'}} />
                        <FaTwitter size={20} style={{color: '#d3d3d3', marginRight: '10px'}} />
                        <FaGithub size={20} style={{color: '#d3d3d3', marginRight: '10px'}} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer
