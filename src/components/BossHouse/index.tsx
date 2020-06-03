import React from 'react';
import Boss from '../Boss/index';
import './style.scss';
import Cementery from '../Cementery';

const BossHouse = () => {
  return (
    <div className='boss-house'>
      <Boss />
      <Cementery />
    </div>
  );
};

export default BossHouse;
