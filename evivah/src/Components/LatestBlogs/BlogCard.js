import React from 'react';
import { useNavigate } from 'react-router'


function Card({ blog }) {
  const navigate = useNavigate()

  return (
    <>
      <li className='card__item'>
        <div style={{cursor:"pointer"}} className='card__item__link' onClick={() => {
          navigate("/blogs/single-blog", { state: { blog: blog } })
        }}>
          <div className='card__item__pic-wrap' >
            <img
              className='card__item__img'
              src={blog.blogImageLink}
              alt=""
            />
          </div>
          <div className='card__item__info'>
            <h5 className='card__item__text'>{blog.title}</h5>
          </div>
        </div>
      </li>
    </>
  );
}
export default Card;