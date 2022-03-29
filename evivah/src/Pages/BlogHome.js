import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Header from '../Components/Header/Header'
import BlogSideBar from '../Components/BlogSidebar/Sidebar'
import Blog from '../Components/Blog/Blog'
import Footer from '../Components/Footer/Footer'

const BlogHome = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        {/* <BlogSideBar/> */}
        <Blog/>
        <Footer/>
    </div>
  )
}

export default BlogHome