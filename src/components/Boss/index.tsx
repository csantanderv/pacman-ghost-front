import React from 'react';
import BossImg from '../../assets/boss.svg';
import './style.scss';

const Boss = () => {
  return (
    <div className='boss' style={{ top: 100 }}>
      <div className='boss-img'>
        <img src={BossImg}></img>
      </div>
    </div>
  );
};

export default Boss;
