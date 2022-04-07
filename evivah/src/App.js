import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import Login from "./Components/Login/Login"
import Signup from "./Components/Signup/Register"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from "react";
import UserRoles from "./Pages/UserRoles";
import BlogHome from "./Pages/BlogHome";
import SinglePost from "./Components/SinglePost/SingleBlog";
import Navbar from "./Components/Navbar/Navbar";
import CreateBlog from "./Pages/CreateBlog";
import MasterServicesHome from "./Pages/VendorOptions";
import VendorsHome from "./Pages/VendorsHome";
import VendorsListHome from "./Pages/VendorsListHome";
import VendorProfile from "./Components/VendorProfile/VendorProfile"
import PlannerHome from "./Pages/PlannerHome";
import MultiStepForm from "./Pages/MultiStepForm";
import VendorProfileHome from "./Pages/VendorProfileHome";
import Orders from "./Components/ClientDashBoard/ClientTable/ClientTable"
import VendorDashboardProfile from "./Components/ClientDashBoard/ProfileInfo/ProfileInfo"
import VendorDashboardProducts from "./Pages/VendorProduct"
import OrdersHome from "./Components/ClientDashBoard/OrdersHome/OrdersHome"
import CustomerDashboardHome from "./Pages/CustomerDashboardHome";
import CustomerOrders from "./Components/CustomerDashboard/CustomerOrders/CustomerOrders"
import Cart from "./Components/Cart/Cart"
import Checkout from "./Components/Checkout/Checkout"
import AdminHome from "./Pages/AdminDashBoardPages/Home/Home"
import UserList from "./Pages/AdminDashBoardPages/userList/UserList"
import VendorsList from "./Pages/AdminDashBoardPages/ProductList/ProductList"
import User from "./Pages/AdminDashBoardPages/user/User"
import Vendor from "./Pages/AdminDashBoardPages/Product/Product"
import NewUser from "./Pages/AdminDashBoardPages/NewUser/NewUser"
import NewVendor from "./Pages/AdminDashBoardPages/NewProduct/NewProduct"
import BookingsList from "./Pages/AdminDashBoardPages/Bookings/BookingsList"
import CategoriesList from "./Pages/AdminDashBoardPages/Categories/Categories"
import CustomerDetails from "./Components/CustomerAddressDetails/CustomerAddressHome"
import AboutUs from "./Components/AboutUs/About"



function App() {
  const loginStatus = sessionStorage['loginStatus']
  const [user, setUser] = useState(loginStatus)


  return (
    <div >
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={user?<Home />:<Login/>} /> */}
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/user-roles" element={<UserRoles />} />
          <Route path="/blogs" element={<BlogHome />} />
          <Route path="/blogs/single-blog" element={<SinglePost />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/vendor-options" element={<MasterServicesHome />} />
          <Route path="/master-services" element={<VendorsHome />} />
          <Route path="/vendors-list" element={<VendorsListHome />} />
          <Route path="/vendor-info" element={<VendorProfile />} />
          <Route path="/planners" element={<PlannerHome />} />
          <Route path="/vendor-details" element={<MultiStepForm />} />
          <Route path="/customer-details" element={<CustomerDetails />} />
          <Route path="/about" element={<AboutUs />} />

          <Route path="/vendor-dashboard" element={<VendorProfileHome />} />
          <Route path="/vendor-dashboard/orders" element={<OrdersHome />} />
          <Route path="/vendor-dashboard/profile" element={<VendorDashboardProfile />} />
          <Route path="/vendor-dashboard/products" element={<VendorDashboardProducts />} />

          <Route path="/customer-dashboard" element={<CustomerDashboardHome />} />
          <Route path="/customer-dashboard/booking" element={<CustomerOrders />} />

          <Route path="/booking-cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="/admin-dashboard" element={<AdminHome />} />
          <Route path="/admin-dashboard/users-list" element={<UserList />} />
          <Route path="/admin-dashboard/user" element={<User />} />
          <Route path="/admin-dashboard/add-user" element={<NewUser />} />
          <Route path="/admin-dashboard/vendors-list" element={<VendorsList />} />
          <Route path="/admin-dashboard/vendor" element={<Vendor />} />
          <Route path="/admin-dashboard/add-vendor" element={<NewVendor />} />
          <Route path="/admin-dashboard/booking-list" element={<BookingsList />} />
          <Route path="/admin-dashboard/categories-list" element={<CategoriesList />} />



        </Routes>
      </BrowserRouter>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
