import React from 'react';
import BossImg from '../../assets/boss.svg';
import './style.scss';

const Boss = () => {
  return (
    <div className='boss'>
      <div className='boss-img'>
        <img src={BossImg} alt='Boss'></img>
      </div>
    </div>
  );
};

export default Boss;
