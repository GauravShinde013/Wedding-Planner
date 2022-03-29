import React from 'react';
import { Link } from 'react-router-dom';

function CardItem1({data}) {

  return (
    <>
      <li className='vendorcards__item'>
        <Link className='vendorcards__item__link' to={data.path}>
          <div className='vendorcards__item__pic-wrap' >
            <img
              className='vendorcards__item__img'
              alt=''
              src={data.src}
            />
          </div>
          <div className='vendorcards__item__info'>
            <h5 className='vendorcards__item__text'>{data.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem1;