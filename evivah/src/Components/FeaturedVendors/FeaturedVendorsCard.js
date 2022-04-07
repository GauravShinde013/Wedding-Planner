import React from 'react';
import { useNavigate } from "react-router-dom";

function CardItem1({ vendor }) {
  const navigate=useNavigate()
  const ratingArray = vendor.feedbackList.map((feedback) => feedback.rating)
  const rating = ratingArray.length !== 0 ? (ratingArray.reduce((rating, b) => rating + b) / ratingArray.length) : 0
  const VendorProfileHandler = () => {

    navigate("/vendor-info", { state: { vendor: { vendor }, avgRating: rating } })
  }

  function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }

    return splitStr.join(' ');
  }

  return (
    <>
      <li className='vendorcards__item'>
        <div style={{cursor:"pointer"}} onClick={VendorProfileHandler}  className='vendorcards__item__link' >
          <div className='vendorcards__item__pic-wrap' >
            <img
              className='vendorcards__item__img'
              alt=''
              src={vendor.imgList[0]}
            />
          </div>
          <div className='vendorcards__item__info'>
            <h5 className='vendorcards__item__text'>{titleCase(vendor.brandName)}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem1;