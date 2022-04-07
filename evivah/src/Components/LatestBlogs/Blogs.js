import React from 'react';
import i from '../../img/assets/photography.jpg';
import i8 from '../../img/assets/venue.jpg';
import i9 from '../../img/assets/Wedding-Planner.jpg';
import './blogs.css';
import Card from './BlogCard';


function Blogs({blogData}) {

  


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
  
 