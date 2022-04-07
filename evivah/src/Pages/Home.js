import Navbar from '../Components/Navbar/Navbar'
import Showcase from '../Components/Showcase/Showcase'
import Categories from '../Components/Categories/ServiceCategories'
import Featured from '../Components/FeaturedVendors/FeaturedVendorsItems'
import Blogs from '../Components/LatestBlogs/Blogs'
import VendorRegistration from '../Components/HomeVendorRegistration/VendorRegistration'
import Footer from '../Components/Footer/Footer'
import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'


const Home = () => {

    const [masterServiceList, setmasterServiceList] = useState([])
    const [featuredVendorsList, setfeaturedVendorsList] = useState([])
    const [latestBlogList, setlatestBlogList] = useState([])
   
   
    const getmasterServices = useCallback(async () => {
        const url = `http://localhost:8080/masterServices`
        const data = axios.get(url).then((response) => {
            let result = response.data.data
            setmasterServiceList(result)
        })


    }, [])
    const getFeaturedVendors = useCallback(async () => {
       
        const url = `http://localhost:8080/vendor/featured`
        const data = axios.get(url).then((response) => {
            let result = response.data.data
            console.log("🚀 ~ file: Home.js ~ line 33 ~ data ~ result", result)
            setfeaturedVendorsList(result)
        })


    }, [])


    const getLastestBlogs = useCallback(async () => {
       
        const url = `http://localhost:8080/blog/latest`
        const data = axios.get(url).then((response) => {
            let result = response.data.data
            setlatestBlogList(result)
        })


    }, [])



    useEffect(() => {
        getmasterServices()
        getFeaturedVendors()
        getLastestBlogs()
    }, [getmasterServices,getFeaturedVendors,getLastestBlogs])



    return (
        <div>
            <Navbar />
            <Showcase />
            <Categories masterServiceList={masterServiceList} />
            <Featured data={featuredVendorsList} />
            <Blogs blogData={latestBlogList} />
            <VendorRegistration />
            <Footer />
        </div>
    );
}

export default Home
