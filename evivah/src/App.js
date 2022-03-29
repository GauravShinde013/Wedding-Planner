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



function App() {
  const loginStatus = sessionStorage['loginStatus']
  const [user,setUser]=useState(loginStatus)


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
        </Routes>
      </BrowserRouter>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
