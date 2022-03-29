import { Link,useLocation } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import "./register.css"
import { Card } from '@mui/material'
import { Container } from 'react-bootstrap'

const Signup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate()
  const location=useLocation();

  const role=location.state.Role



  const signupUser = () => {
   
    var letters = /0-9^[A-Za-z]+$/;

    if (firstName.length === 0 || (firstName.match(letters))) {
      toast.warning('Please Enter Valid First Name. Only Characters Are Allowed')
    } 
    else if (lastName.length === 0 || (lastName.match(letters))) {
      toast.warning('Please Enter Valid Last Name. Only Characters Are Allowed')
    } 
    else if (email.length === 0) {
      toast.warning('Please Enter Email')
    } else if (!(email.includes("@") && email.includes(".com"))) {
      toast.warning("Please Enter Valid Email")
    } else if (mobile.length === 0 || mobile.length !== 10 || isNaN(mobile)) {
      toast.warning("Please Enter Valid Mobile Number")
    } else if (password.length === 0) {
      toast.warning('Please Enter Password')
    } else if (password !== confirmPassword) {
      toast.warning('Password Does Not Match')
    } else {
      const body = {
        firstName,
        lastName,
        email,
        mobile,
        password,
        role
      }



      const url = `http://localhost:8080/user/signup`


      axios.post(url, body).then((response) => {

        const result = response.data
        console.log(result)
        if (result['status'] === 'success') {
          toast.success('Welcome to Evivah Family , '+firstName)
          navigate('/')
        } else {
          toast.error(result['error'])
        }
      })
    }
  }

  return (
    <Container className="mt-3">
      <Card className="p-3" elevation={13}>
        <h1 className="title text-center">Signup</h1>
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <div className="form">
              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  First Name
                </label>
                <input
                  onChange={(e) => {
                    setFirstName(e.target.value)
                  }}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Last Name
                </label>
                <input
                  onChange={(e) => {
                    setLastName(e.target.value)
                  }}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Email Address
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  type="text"
                  className="form-control "
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Mobile Number
                </label>
                <input
                  onChange={(e) => {
                    setMobile(e.target.value)
                  }}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Password
                </label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  type="password"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Confirm Password
                </label>
                <input
                  onChange={(e) => {
                    setConfirmPassword(e.target.value)
                  }}
                  type="password"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <div>
                  Already have an account? <Link to="/signin">Signin here.</Link>
                </div>
                <button onClick={signupUser} className="btn btn-primary">
                  Signup
                </button>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </Card>
    </Container>
  )
}

export default Signup
