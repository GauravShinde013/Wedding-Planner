import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FaStar } from "react-icons/fa";
import vendorsphoto from "../../img/vendorsphoto.jpg";
import { useLocation } from "react-router-dom";
import { Rating, Box } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from "react-router-dom";

export default function VendorCard({ vendor }) {



  function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }

    return splitStr.join(' ');
  }

  const ratingArray = vendor.feedbackList.map((feedback) => feedback.rating)
  const rating = ratingArray.length !== 0 ? (ratingArray.reduce((rating, b) => rating + b) / ratingArray.length) : 0

  vendor.brandName = titleCase(vendor.brandName)
  vendor.vendorCity=titleCase(vendor.vendorCity)
  vendor.specification=titleCase(vendor.specification)


  const navigate=useNavigate()

  const VendorProfileHandler=()=>{

    navigate("/vendor-info",{state:{vendor:{vendor},avgRating:rating}})
  }


  return (
    <div>

      <Card elevation={14} sx={{ maxWidth: 320 }}>
        <CardMedia
          component="img"
          height="200"
          image={vendor.imgList[0] ? vendor.imgList[0] : vendorsphoto}

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {vendor.brandName}
          </Typography>
          <Box className="d-flex justify-content-between">
            <div>
              <div
                style={{ fontSize: "18px", fontWeight: "500" }}
              >
                &#8377; {vendor.servicePrice}
              </div>
              <div style={{ fontSize: "18px", fontWeight: "500" }}>
                {vendor.vendorCity}
              </div>
            </div>
            <div className="d-flex align-items-end flex-column">
              <Rating
                name="text-feedback"
                value={rating}
                readOnly
                precision={0.5}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
              ({rating})
            </div>
          </Box>
        </CardContent>
        <CardActions>
          <Button onClick={VendorProfileHandler} size="small">Details</Button>
        </CardActions>
      </Card>
    </div>
  );
}

