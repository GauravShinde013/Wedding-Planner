import React from 'react';
import './Cards.css';
import CardItem from './ServiceCategoriesCard';




function Cards({ masterServiceList }) {
  

 


  return (
    <div className='cards'>
      <h1>Wedding Categories</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {
              masterServiceList.map((service) => {
                return (
                  <CardItem
                    src={service.thumbnailLink}
                    text='Explore'
                    label={service.serviceName}
                    id={service.id}
                  />
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;