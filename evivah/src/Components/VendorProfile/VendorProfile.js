import { Paper } from '@mui/material';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CallIcon from '@mui/icons-material/Call';
import moment from 'moment';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import RatingReview from '../RatingReview/RatingReview';
import { toast } from 'react-toastify';
import axios from 'axios';
import Imageslider from "../Imageslider/Imageslider"
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../../actions/index";


const subtitleStyle = {
  fontSize: "15px",
  color: "#868996",
  lineHeight: 1.7
}

const PlannerDetails = () => {




  const dispatch = useDispatch()

  const [rating, setRating] = useState()
  const [review, setReview] = useState("")
  const [buttonFlag, setButtonFlag] = useState(true)

  const user = sessionStorage["loginStatus"]
  const userRole = sessionStorage["role"]
  const customerId = sessionStorage["id"]


  const location = useLocation()
  const vendorInfo = location.state.vendor.vendor
  const avgRating = location.state.avgRating


  const navigate = useNavigate();

  const feedbackList = vendorInfo.feedbackList;

  const feedbackSave = () => {
    if (review.length > 256) {
      toast.warning("Only 256 Characters are allowed.")
    }
    else {
      const body = {
        customerId,
        rating,
        review
      }

      const url = `http://localhost:8080/feedback/${vendorInfo.serviceId}`
      axios.post(url, body).then((response) => {

        const result = response.data
        console.log(result);
        if (result['status'] === 'success') {
          toast.success('Feedback Submitted Successfully , ')
          navigate('/')
        } else {
          toast.error(result['error'])
        }
      })

    }
  }

  const toIndianCurrency = (num) => {
    const curr = num.toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR'
    });
    return curr;
};

  const getOption = (masterServiceName) => {
    return (
      masterServiceName === "Planner" ? (<><ShoppingCartIcon /> Book</>) : (<><ShoppingCartIcon /> Add To Cart</>)
    )
  }
  const bookingHandler = (vendorInfo) => {
    if (vendorInfo.masterServiceName === "Planner") {
      const productCartInfo = (
        {
          vendorServiceId: vendorInfo.serviceId,
          cartImage: vendorInfo.imgList[0],
          masterServiceName: vendorInfo.masterServiceName,
          serviceName: vendorInfo.brandName,
          price: vendorInfo.servicePrice,
        }
      )
      dispatch(addToCart(productCartInfo))
      navigate("/checkout");
    }
    else {
      const productCartInfo = (
        {
          vendorServiceId: vendorInfo.serviceId,
          cartImage: vendorInfo.imgList[0],
          masterServiceName: vendorInfo.masterServiceName,
          serviceName: vendorInfo.brandName,
          price: vendorInfo.servicePrice,
        }
      )
      dispatch(addToCart(productCartInfo))
      setButtonFlag(false)
      toast.success("Vendor Added to Cart")
      // Add to cart
    }
  }




  return (
    <div className="app" >
      <Navbar />
      <div>
        <div style={{ background: "rgba(236, 220, 231, 0.925)", padding: "30px 0" }}>
          <Container>
            <div className="d-flex flex-row justify-content-between mb-5 mt-4">
              <div style={{ flex: "2", width: "200px" }}>
                <Imageslider images={vendorInfo.imgList} />
                {/* <img style={{ width: "100%" }} src={vendorInfo.imgList[0]} alt="" /> */}
              </div>
              <Paper style={{ borderRadius: "7px", width: "100%", marginLeft: "40px", flex: "2", padding: "10px 0" }}>
                <div className="d-flex p-4 pb-0 justify-content-between align-items-center">
                  <div className="d-flex flex-column">
                    <h3
                      style={{ fontSize: "24px", lineHeight: "1.5rem", fontWeight: "700" }}
                    >
                      {vendorInfo.brandName}
                    </h3>
                    <h6
                      style={subtitleStyle}
                    >
                      Wedding {vendorInfo.masterServiceName} in {vendorInfo.vendorCity}
                    </h6>
                  </div>
                  <h6 style={{ background: "#2da700", color: "#fff", borderRadius: "7px", padding: "10px 20px" }}>&#9733; {avgRating.toFixed(1)} ({feedbackList.length}) </h6>
                </div>
                <hr style={{ margin: "0" }} />

                <div className='d-flex flex-column p-4 pb-0'>
                  <h3 style={{ color: "darkslateblue" }} >{toIndianCurrency(vendorInfo.servicePrice)} </h3>
                  <h5 style={subtitleStyle} >{vendorInfo.specification}</h5>
                </div>
                <hr style={{ margin: "0" }} />

                <div className='d-flex justify-content-between p-4 pb-0'>
                  <div className='flex-fill flex-grow-1'>
                    {
                     userRole!=="Vendor"&& buttonFlag && <button onClick={(e) => bookingHandler(vendorInfo)} style={{ width: "100%", borderRadius: "30px", border: 'none' }}>
                        {getOption(vendorInfo.masterServiceName)}
                      </button>
                    }
                  </div>
                  <div className='flex-fill flex-grow-1'>
                    <button style={{ width: "100%", marginLeft: "12px", borderRadius: "30px", backgroundColor: "#fa4a6f", border: 'none' }}>
                      <CallIcon /> Call
                    </button>
                  </div>
                </div>
              </Paper>

            </div>
          </Container>
        </div>

        <Container>
          <div>

            <div style={{ padding: "20px 0" }}>
              <h3 style={{ paddingBottom: "20px" }}>About </h3>
              <h4 style={{ fontSize: "18px", color: "#868996" }}>With us</h4>
              <h5 style={{ fontSize: "19px" }} >Since {moment(vendorInfo.createdTimestamp).format('YYYY')}
              </h5>
              <hr />

              <h4 style={{ fontSize: "18px", color: "#868996" }}>Service Specification</h4>
              <h5 style={{ fontSize: "19px" }}>{vendorInfo.specification}</h5>
              <hr />

              <h4 style={{ fontSize: "18px", color: "#868996" }}>Service Details</h4>
              <h5 style={{ fontSize: "19px" }}>{vendorInfo.description}</h5>
            </div>


            <div className="pt-4">
              <h2 style={{ fontSize: "28px" }}>Rating and Review</h2>
              <h1>{avgRating.toFixed(1)}</h1>
              <div>
                <Rating
                  name="text-feedback"
                  value={avgRating}
                  readOnly
                  precision={0.5}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
              </div>
            </div>

            <div>

              {
                user && (
                  <div>
                    <div>
                      <h3
                        style={{
                          paddingTop: "20px",
                          fontSize: "22px"
                        }}
                      >
                        Rate '{vendorInfo.brandName}'
                      </h3>
                      <Rating onChange={(e) => setRating(e.target.value)} sx={{ fontSize: "3rem" }} name="half-rating" defaultValue={1} precision={0.5} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlTextarea1" className="form-label">Review</label>

                      <textarea onChange={(e) => setReview(e.target.value)} column="70" placeholder="Tell your experience with this vendor ..." className="form-control col-md-4" id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                    <button onClick={feedbackSave} style={{ backgroundColor: "#1976d2", padding: "7px 12px", borderRadius: "12px" }}>Submit</button>
                  </div>
                )
              }


              <hr />
              <div>


                {
                  feedbackList.map((feedback) => {
                    return (
                      <RatingReview key={feedback.ratingId} feedback={feedback} />
                    )
                  })
                }

              </div>
            </div>
          </div>
        </Container>



      </div>

      <Footer />
    </div >
  );

}

export default PlannerDetails;