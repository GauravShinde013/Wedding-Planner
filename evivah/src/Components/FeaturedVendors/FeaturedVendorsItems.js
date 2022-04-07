import React from 'react';
import i6 from '../../img/assets/pandit.jpg';
import i from '../../img/assets/photography.jpg';
import i7 from '../../img/assets/transport1.jpg';
import i8 from '../../img/assets/venue.jpg';
import i9 from '../../img/assets/Wedding-Planner.jpg';
import CardItem1 from './FeaturedVendorsCard';
import './style.css';


function Cards1({data}) {



  return (
    <div className='vendorcards'>
      <h1>Top Featured Vendors</h1>
      <div className='vendorcards__container'>
        <div className='vendorcards__wrapper'>

          <ul className='vendorcards__items'>
            {
              data.map((card,index)=>{
                return (
                  <CardItem1 key={index} vendor={card} ></CardItem1>
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