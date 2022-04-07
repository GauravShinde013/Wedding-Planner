import Google from "../../img/google.png";
import Facebook from "../../img/facebook.png";
import Github from "../../img/github.png";
import "./login.css"
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import {useSelector,useDispatch} from "react-redux"
import {isLogged} from "../../actions/index"


const Login = () => {
  
  const userLogged=useSelector(state=>state.isLogged)
  const dispatch=useDispatch()
  console.log(userLogged);

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  }; 

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const navigate = useNavigate()


  const LoginHandler = () => {
    
    if (email.length === 0) {
      toast.warning('please enter email')
    } else if (password.length === 0) {
      toast.warning('please enter password')
    }
    else if (!(email.includes("@") && email.includes(".com"))) {
      toast.warning("please enter valid email")
    }
    else {
      const body = {
        email,
        password,
      }

      const url = `http://localhost:8080/user/signin`

      axios.post(url, body).then((response) => {
        const result = response.data
        console.log("🚀 ~ file: Login.js ~ line 59 ~ axios.post ~ result", result)
        if (result['status'] === 'success') {
          dispatch(isLogged())
          const { id, firstName, lastName, email,role } = result['data']
          toast.success('Welcome, ' + firstName + " " + lastName)


          sessionStorage['id'] = id
          sessionStorage['firstName'] = firstName
          sessionStorage['lastName'] = lastName
          sessionStorage['email'] = email
          sessionStorage['loginStatus'] = 1
          sessionStorage['role'] = role

          if(role==="Customer"){
            navigate('/')
          }
          else if(role==="Vendor" || role==="Planner"){
          
            navigate("/vendor-dashboard")
          }
          else if(role==="Admin"){
            navigate("/admin-dashboard")
          }

        } else {
          toast.error('Invalid user name or password')
        }
      })
    }
  }




  return (
    <>
      <Navbar/>
      <div className="login">
        <h1 className="loginTitle">Choose a Login Method</h1>
        <div className="wrapper">
          <div className="left">
            <div className="loginButton google" onClick={google}>
              <img src={Google} alt="" className="icon" />
              Google
            </div>
            <div className="loginButton facebook" onClick={facebook}>
              <img src={Facebook} alt="" className="icon" />
              Facebook
            </div>
            <div className="loginButton github" onClick={github}>
              <img src={Github} alt="" className="icon" />
              Github
            </div>
          </div>
          <div className="center">
            <div className="line" />
            <div className="or">OR</div>
          </div>
          <div className="right">
            <input onChange={(e) => setEmail(e.target.value)} className="loginInput" type="text" placeholder="Email" />
            <input onChange={(e) => setPassword(e.target.value)} className="loginInput" type="password" placeholder="Password" />
            <button onClick={LoginHandler} className="submit">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;