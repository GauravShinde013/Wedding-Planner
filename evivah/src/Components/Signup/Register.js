import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import "./register.css"
import { Card } from '@mui/material'
import { Col, Container, Row } from 'react-bootstrap'
import Navbar from '../Navbar/Navbar'
import { PhotoCamera } from '@mui/icons-material'


const imgStyle = {
  width: "75px",
  height: "75px",
  borderRadius: "50%",
  objectFit: "cover"
}

const Signup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [imgFile, setImgFile] = useState("");

  const navigate = useNavigate()
  const location = useLocation();

  const role = location.state.Role



  const signupUser = () => {

    var letters = /0-9^[A-Za-z]+$/;
    let formData=new FormData();

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
    }
    else if (imgFile && !(imgFile.type.includes("image/"))) {
      toast.error("Invalid Image Type.")
    }
    else if ((imgFile.size / 1000000) > 10) {
      toast.error("File Size Exceeded 10Mb.");
    }
     else {
      const body = {
        firstName,
        lastName,
        email,
        mobile,
        password,
        role
      }

      formData.append("blogImg", imgFile)

      formData.append('jsonBodyData',
        new Blob(
          [JSON.stringify(
            {
              "firstName": firstName,
              "lastName": lastName,
              "email": email,
              "mobile": mobile,
              "password":password,
              "role":role
            })
          ],
          { type: 'application/json' }
        ))


      const url = `http://localhost:8080/user/signup`


      axios.post(url, formData).then((response) => {

        const result = response.data
        if (result['status'] === 'success') {
          // toast.success('Welcome to Evivah Family , ' + firstName)
          if(role==="Customer"){
            navigate('/cust-contact-info')
          }
          else{
            navigate('/vendor-details')
          }
        } else {
          toast.error(result['error'])
        }
      })
    }
  }


  const uploadHandler = (e) => {
    setImgFile(e.target.files[0])
  }

  return (
    <>
      <Navbar />
      <div style={{ background: "#f8f0e3" }}>
        <Container style={{ paddingBottom: "100px" }} className="pt-5">
          <Row>
            <Card className="p-3 d-flex justify-between" elevation={13}>
              <Col style={{ flex: "2" }} >
                <div style={{ width: "450px", padding: "20px 0" }} className="signup">
                  <img style={{ width: "100%" }} src={require("../../img/signup.png")} alt="" />
                </div>
              </Col >
              <Col style={{ flex: "3" }}>
                <div >
                  <h1 className="title text-center">Signup</h1>
                  <div style={{ margin: "10px auto", width: "50%" }} className="row d-block">
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
                            type="email"
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
                            type="number"
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
                          <div style={{ paddingBottom: "25px" }}>
                            Already have an account? <Link to="/login">Signin here.</Link>
                          </div>
                          <div className="d-flex align-items-center justify-content-between">

                            <label htmlFor="icon-button-file">
                              Profile Photo:
                              <input
                                onChange={uploadHandler}
                                accept="image/*"
                                style={{ display: "none" }}
                                id="icon-button-file" type="file"
                              />
                              <PhotoCamera color="primary" sx={{ marginLeft: "6px", cursor: "pointer" }} />
                            </label>

                            {
                              imgFile && <img style={imgStyle}
                                src={URL.createObjectURL(imgFile)}
                                alt={imgFile.name}
                              />
                            }


                          </div>
                          <button onClick={signupUser} style={{ backgroundColor: "#1976d2", padding: "7px 12px", borderRadius: "25px", width: "100%", marginTop: "12px" }}>Sign up</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Card>
          </Row>
        </Container >
      </div>

    </>
  )
}

export default Signup
