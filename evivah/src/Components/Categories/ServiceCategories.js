import React from 'react';
import './Cards.css';
import CardItem from './ServiceCategoriesCard';
import i1 from '../../img/assets/decor1.jpg'
import i2 from '../../img/assets/invitation.jpg'
import i3 from '../../img/assets/makeup.jpg'
import i4 from '../../img/assets/mehandi.jpg'
import i5 from '../../img/assets/music.jpg'
import i6 from '../../img/assets/pandit.jpg'
import i7 from '../../img/assets/transport1.jpg'
import i8 from '../../img/assets/venue.jpg'
import i9 from '../../img/assets/Wedding-Planner.jpg'
import i from '../../img/assets/photography.jpg'


function Cards() {
  return (
    <div className='cards'>
      <h1>Wedding Categories</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>

          <ul className='cards__items'>
          <CardItem
              src={i}
              text='Explore'
              label='Photographer'
              path='/services'
            />
            <CardItem
              src={i9}
              text='Travel'
              label='Planner'
              path='/services'
            />
            <CardItem
              src={i8}
              text='Set'
              label='Venue'
              path='/services'
            />
            <CardItem
              src={i7}
              text='Experience '
              label='Transport'
              path='/products'
            />
            <CardItem
              src={i6}
              text='Ride '
              label='Pandit'
              path='/sign-up'
            />
             <CardItem
              src={i5}
              text='Ride '
              label='Music'
              path='/sign-up'
            />
             <CardItem
              src={i4}
              text='Ride '
              label='Mehandi'
              path='/sign-up'
            />
             <CardItem
              src={i3}
              text='Ride '
              label='Makeup'
              path='/sign-up'
            />
             <CardItem
              src={i2}
              text='Ride '
              label='Invitation'
              path='/sign-up'
            />
            <CardItem
              src={i1}
              text='Ride '
              label='Decoration'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;