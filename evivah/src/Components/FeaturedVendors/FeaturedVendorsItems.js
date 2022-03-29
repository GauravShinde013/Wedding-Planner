import React from 'react';
import i6 from '../../img/assets/pandit.jpg';
import i from '../../img/assets/photography.jpg';
import i7 from '../../img/assets/transport1.jpg';
import i8 from '../../img/assets/venue.jpg';
import i9 from '../../img/assets/Wedding-Planner.jpg';
import CardItem1 from './FeaturedVendorsCard';
import './style.css';


function Cards1() {

  const data=[
    {
      src:i6,
      text:'Explore',
      label:'Adventure',
      path:'/services'
    },
    {
      src:i9,
      text:'Travel',
      label:'Luxury',
      path:'/services'
    },
    {
      src:i8,
      text:'Set',
      label:'Mystery',
      path:'/services'
    },
    {
      src:i7,
      text:'Experience',
      label:'Adventure',
      path:'/products'
    },
    {
      src:i6,
      text:'Ride',
      label:'Adrenaline',
      path:'/sign-up'
    }
  ]

  return (
    <div className='vendorcards'>
      <h1>Top Featured Vendors</h1>
      <div className='vendorcards__container'>
        <div className='vendorcards__wrapper'>

          <ul className='vendorcards__items'>
            {
              data.map((card,index)=>{
                return (
                  <CardItem1 key={index} data={card} ></CardItem1>
                )
              })
            }
          
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards1;