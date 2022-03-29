import Navbar from '../Components/Navbar/Navbar'
import Showcase from '../Components/Showcase/Showcase'
import Categories from '../Components/Categories/ServiceCategories'
import Featured from '../Components/FeaturedVendors/FeaturedVendorsItems'
import Blogs from '../Components/LatestBlogs/Blogs'
import VendorRegistration from '../Components/HomeVendorRegistration/VendorRegistration'
import Footer from '../Components/Footer/Footer'


const Home = () => {
    return (
        <div>
            <Navbar />
            <Showcase/>
            <Categories/>
            <Featured/>
            <Blogs/>
            <VendorRegistration />
            <Footer/>
        </div>
    );
}

export default Home
