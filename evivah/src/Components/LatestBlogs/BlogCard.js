import React from 'react';
import { Link } from 'react-router-dom';

function Card({blog}) {
  return (
    <>
    <li className='card__item'>
      <Link className='card__item__link' to={blog.path}>
        <div className='card__item__pic-wrap' >
          <img
            className='card__item__img'
            src={blog.src}
            alt=""
          />
        </div>
        <div className='card__item__info'>
          <h5 className='card__item__text'>{blog.text}</h5>
        </div>
      </Link>
    </li>
  </>
  );
}
export default Card;