import React from 'react';
import i from '../../img/assets/photography.jpg';
import i8 from '../../img/assets/venue.jpg';
import i9 from '../../img/assets/Wedding-Planner.jpg';
import './blogs.css';
import Card from './BlogCard';


function Blogs() {
  const blogData=[
    {
      src:i,
      text:'Explore',
      label:'Adventure',
      path:'/services',
    },
    {
      src:i9,
      text:'Travel',
      label:'Luxury',
      path:'/services',
    },
    {
      src:i8,
      text:'Set',
      label:'Mystery',
      path:'/services',
    }
  ]
    return (
      <div className='blog-card'>
      <h1>Latest Blogs</h1>
      <div className='card__container'>
        <div className='card__wrapper'>

          <ul className='card__items'>
            {
              blogData.map((blog,index)=>{
                return(
                  <Card blog={blog} key={index} ></Card>
                )
              })
            }
           
          </ul>
        </div>
      </div>
    </div>
    );
  }
  

        
 export default Blogs;    
  
 