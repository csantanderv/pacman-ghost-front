import React from 'react';
import Boss from '../Boss/index';
import Cementery from '../Cementery';
import './style.scss';

const BossHouse = () => {
  return (
    <div className='boss-house'>
      <Boss />
      <Cementery />
    </div>
  );
};

export default BossHouse;
