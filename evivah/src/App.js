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
          <Route path="/vendor-dashboard" element={<VendorProfileHome />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
