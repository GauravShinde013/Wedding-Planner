import React from 'react'
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import profilePic from "../../img/blogDefault.png"
import moment from 'moment';


const RatingReview = ({ feedback }) => {
    return (
        <div style={{ padding: "20px 0" }}>
            <div className='d-flex align-items-center '>
                <div>
                    <img style={{ width: "55px", height: "55px", borderRadius: "50%" }} src={feedback.profileImg ? feedback.profileImg : profilePic} alt="" />
                </div>
                <div style={{ paddingLeft: "8px" }}>
                    <div>
                        <h5
                            style={{ fontSize: "18px" }}
                        >
                            {feedback.firstName} {feedback.lastName}
                        </h5>
                    </div>
                    <div className="d-flex ">
                        <div>
                            <Rating
                                name="text-feedback"
                                value={feedback.rating}
                                readOnly
                                precision={0.5}
                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} />}
                            />
                        </div>
                        <div style={{ paddingLeft: "5px" }}>
                                    {moment(feedback.createdTimestamp).fromNow()}
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ paddingTop: "8px" }}>
                <h6 style={{ color: "#353b50" }}>{feedback.review}</h6>
            </div>

        </div>
    )
}

export default RatingReview