import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function CardItem(props) {
  const navigate = useNavigate()


  const vendorHandler = (serviceId) => {
    navigate("/vendors-list", { state: { serviceId: serviceId } })
  }

  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
          <div style={{cursor:"pointer"}} onClick={()=>vendorHandler(props.id)} className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              src={props.src}
              alt=''
            />
          </div>

        </div>
      </li>
    </>
  );
}

export default CardItem;